from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import json
import uuid

app = Flask(__name__)
CORS(app)

DB_FILE = 'tastehub.db'

def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    c = conn.cursor()
    # Create users table
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            is_admin BOOLEAN NOT NULL DEFAULT 0
        )
    ''')
    # Create orders table
    c.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            customer_name TEXT NOT NULL,
            customer_email TEXT NOT NULL,
            items TEXT NOT NULL,
            total_price REAL NOT NULL,
            phase TEXT NOT NULL,
            date TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Initialize database on startup
init_db()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    
    if not name or not email:
        return jsonify({"error": "Name and email are required"}), 400

    conn = get_db_connection()
    c = conn.cursor()
    
    # Check if user exists
    c.execute('SELECT * FROM users WHERE email = ?', (email,))
    user = c.fetchone()
    
    if not user:
        # Register new user
        is_admin = 1 if 'admin' in email.lower() else 0
        c.execute('INSERT INTO users (name, email, is_admin) VALUES (?, ?, ?)', (name, email, is_admin))
        conn.commit()
        # Fetch the newly created user
        c.execute('SELECT * FROM users WHERE email = ?', (email,))
        user = c.fetchone()
        
    conn.close()
    
    return jsonify({
        "name": user['name'],
        "email": user['email'],
        "isAdmin": bool(user['is_admin'])
    }), 200

@app.route('/api/orders', methods=['POST', 'GET'])
def handle_orders():
    conn = get_db_connection()
    c = conn.cursor()

    if request.method == 'POST':
        data = request.json or {}
        # Some basic validation so we don't blow up on missing fields
        customer_name = data.get('customerName')
        customer_email = data.get('customerEmail')
        items_list = data.get('items', [])
        total_price = data.get('totalPrice')
        phase = data.get('phase')
        date = data.get('date')

        if not customer_name or not customer_email or not items_list or total_price is None or not phase or not date:
            conn.close()
            return jsonify({"error": "Missing order information"}), 400

        # allow client to specify an id but generate one if not provided
        order_id = data.get('id') or uuid.uuid4().hex
        items = json.dumps(items_list)  # Store items as JSON string

        try:
            c.execute('''
                INSERT INTO orders (id, customer_name, customer_email, items, total_price, phase, date)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (order_id, customer_name, customer_email, items, total_price, phase, date))
            conn.commit()
        except sqlite3.IntegrityError:
            # duplicate primary key (order already exists)
            conn.close()
            return jsonify({"error": "Order ID already exists"}), 409

        conn.close()
        return jsonify({"message": "Order created successfully", "id": order_id}), 201

    elif request.method == 'GET':
        email = request.args.get('email')
        
        if not email:
            conn.close()
            return jsonify({"error": "Email is required to fetch orders"}), 400
            
        # Check if the user is an admin
        c.execute('SELECT is_admin FROM users WHERE email = ?', (email,))
        user = c.fetchone()
        
        if not user:
            conn.close()
            return jsonify({"error": "User not found"}), 404
            
        is_admin = bool(user['is_admin'])
        
        if is_admin:
            # Admin can see all orders
            c.execute('SELECT * FROM orders ORDER BY rowid DESC')
        else:
            # Normal user can only see their own orders
            c.execute('SELECT * FROM orders WHERE customer_email = ? ORDER BY rowid DESC', (email,))
            
        rows = c.fetchall()
        orders = []
        for row in rows:
            orders.append({
                "id": row['id'],
                "customerName": row['customer_name'],
                "customerEmail": row['customer_email'],
                "items": json.loads(row['items']),
                "totalPrice": row['total_price'],
                "phase": row['phase'],
                "date": row['date']
            })
            
        conn.close()
        return jsonify(orders), 200

@app.route('/api/orders/<order_id>/phase', methods=['PUT'])
def update_order_phase(order_id):
    data = request.json
    new_phase = data.get('phase')
    
    if not new_phase:
        return jsonify({"error": "Phase is required"}), 400
        
    conn = get_db_connection()
    c = conn.cursor()
    c.execute('UPDATE orders SET phase = ? WHERE id = ?', (new_phase, order_id))
    conn.commit()
    
    if c.rowcount == 0:
        conn.close()
        return jsonify({"error": "Order not found"}), 404
        
    conn.close()
    return jsonify({"message": "Order phase updated successfully"}), 200

# @app.route('/')
# def index():
#     return send_from_directory('.', 'index.html')

# @app.route('/<path:path>')
# def static_files(path):
#     return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

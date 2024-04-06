from flask import Flask, render_template, request
import pymongo

app = Flask(__name__, template_folder='templates')
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["HackHound"]
collection = db["BitGeeks"]

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    email_id = request.form['email_id']
    equipment_name = request.form['equipment_name']
    price = int(request.form['price'])
    quantity = int(request.form['quantity'])
    quotation = int(request.form['quotation'])

    equipment_data = {
        "Email ID": email_id, 
        "equipment_name": equipment_name,
        "price": price,
        "quantity": quantity,
        "quotation": quotation
    }
    collection.insert_one(equipment_data)

    return f"Quotation sent successfully"

if __name__ == '__main__':
    app.run(debug=True)

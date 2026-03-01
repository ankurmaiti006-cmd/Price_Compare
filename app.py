from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/compare")
def compare():
    query = request.args.get("q")

    # Dummy data for hackathon demo
    data = [
        {"store": "Amazon", "price": 52999, "link": "https://amazon.in"},
        {"store": "Flipkart", "price": 51499, "link": "https://flipkart.com"},
        {"store": "Croma", "price": 53200, "link": "https://croma.com"}
    ]

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

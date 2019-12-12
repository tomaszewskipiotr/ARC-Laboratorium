import pyrebase
import os
from google.cloud import firestore
from flask import Flask, render_template, request, make_response, jsonify, session
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = os.urandom(16)
config = {
    apiKey: "AIzaSyChDNk6BY9ox_WGILDCA6lrKwAMJL07_Ic",
    authDomain: "arc-zadanie.firebaseapp.com",
    databaseURL: "https://arc-zadanie.firebaseio.com",
    projectId: "arc-zadanie",
    storageBucket: "arc-zadanie.appspot.com",
    messagingSenderId: "548252718267",
    appId: "1:548252718267:web:c3b2b8f5c1927039e5059e"
}

firebase = pyrebase.initialize_app(config)
db = firestore.Client()
auth = firebase.auth()


def del_none(data):
    for key, value in list(data.items()):
        if value is None or value is "":
            del data[key]
        elif isinstance(value, dict):
            del_none(value)
    return data


@app.route("/api/v1/hat", methods=["GET"])
@cross_origin()
def getAllCars():
    try:
        cars_ref = db.collection(u'Cars')
        all_cars = [car.to_dict() for car in cars_ref.stream()]
        return jsonify(all_cars), 200
    except Exception as e:
        return f"An Error Occured: {e}"


@app.route("/api/v1/hat", methods=["POST"])
@cross_origin()
def addBook():
    data = request.json
    del_none(data)
    try:
        db.collection(u'Books').document().set(data)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}", 500


if __name__ == '__main__':
    app.run()



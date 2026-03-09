from flask import Flask,request,jsonify
import joblib

app=Flask(__name__)

# Load train modeel

model=joblib.load("./student_model.pkl")

@app.route("/predict",methods=["POST"])
def predict():
    data=request.json

    feature=[[
        data["attendance"],
        data["assignment"],
        data["mock"],
        data["aptitude"],
        data["communication"],
        data["backlogs"]
    ]]

    prediction=model.predict(feature)

    return jsonify({
        "prediction":prediction[0]
    })

@app.route("/")
def home():
    return "Student Prediction API running ..."


if __name__=="__main__":
    app.run(port=5000)
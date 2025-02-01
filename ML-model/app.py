from flask import Flask, request, jsonify
import joblib
import re

app = Flask(__name__)

# Load model & vectorizer
model = joblib.load("fake_news_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

# Preprocessing
def clean_text(text):
    text = text.lower()
    text = re.sub(r'\W', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    news_text = clean_text(data['newsText'])
    transformed_text = vectorizer.transform([news_text])
    prediction = model.predict(transformed_text)[0]
    result = "Fake News" if prediction == 0 else "Real News"
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, request, jsonify
import pandas as pd
import numpy as np
from flaml import AutoML
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib
from flask_cors import CORS

app = Flask(__name__, static_url_path='/sam_project/static')
CORS(app, resources={r"/*": {"origins": "http://localhost:5175"}})

def get_features_from_csv(df):
    return df.columns.tolist()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test_case', methods=['GET', 'POST'])
def test_case():
    if request.method == 'POST':
        # Get uploaded file
        file = request.files['file']
        # Save the file to a temporary location
        file_path = 'temp.csv'
        file.save(file_path)

        # Read CSV file
        df = pd.read_csv(file_path)

        X = df.iloc[:, :-1]
        y = df.iloc[:, -1]

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train FLAML model on training data
        automl = AutoML()

        settings = {
            "time_budget": 10,  # in seconds
            "metric": 'accuracy',
            "task": 'classification'
        }

        automl.fit(X_train=X_train, y_train=y_train, **settings)
        # Using the testing data for finding accuracy
        y_pred = automl.predict(X_test)
        accuracy = (format(accuracy_score(y_pred, y_test) * 100, ".2f")) + " %"

        # Saving the model
        joblib.dump(automl, 'Flaml_model.joblib')

        # Assuming the target column is 'target'
        features = get_features_from_csv(df.iloc[:, :-1])

        # Model Used by automl
        model = automl.best_estimator

        return render_template('result.html', features=features, model=model, accuracy=accuracy)


@app.route('/predict', methods=['POST'])
def predict():
    # Load the CSV file again
    file_path = "temp.csv"

    # Load the model
    automl = joblib.load('Flaml_model.joblib')

    # reading the file as df
    df = pd.read_csv(file_path)

    # Taking a test case as input from user
    user_input = request.form.to_dict()

    # converting user input into a dataframe object
    input_data = pd.DataFrame({key: [value] for key, value in user_input.items()})

    # Finding the prediction of the test case
    prediction = automl.predict(input_data)

    return render_template('pred.html', prediction=prediction[0])


# Add a new route to check the accuracy of the trained model
@app.route('/check_accuracy', methods=['POST'])
def check_accuracy():
    file_path = "temp.csv"
    automl = joblib.load('Flaml_model.joblib')

    # Read CSV file
    df = pd.read_csv(file_path)

    X = df.iloc[:, :-1]
    y = df.iloc[:, -1]

    # Using the testing data for finding accuracy
    y_pred = automl.predict(X)
    accuracy = accuracy_score(y_pred, y)

    return jsonify({'accuracy': accuracy})


if __name__ == '__main__':
    app.run(debug=True)

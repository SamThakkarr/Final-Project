# your_prediction_module.py

import pandas as pd
from statsmodels.stats.outliers_influence import variance_inflation_factor

def calculate_vif(dataset):
    vif = pd.DataFrame()
    vif['features'] = dataset.columns
    vif['VIF_value'] = [variance_inflation_factor(dataset.values, i) for i in range(dataset.shape[1])]
    return vif

def calculate_price(df, vif):
    rows, columns = df.shape[0], df.shape[1] - 1
    low_vif = vif.loc[vif['VIF_value'] > 7]
    a = len(list(low_vif.features))
    avg_vif = vif['VIF_value'].sum() / len(vif.features)
    nan = df.isna().sum().sum()

    if rows < 100 or columns < 2:
        predicted_price = 0
    else:
        predicted_price = 100 * rows / (columns * avg_vif) - 10 * nan

    return predicted_price

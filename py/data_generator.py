import random
import pandas as pd 
import json

'''
sample:

{
    "AAPL":{
        "2019-01-03 08:00:01.11":{
            type: bid/ask/cancel,
            price: number,
            volume: number,
        },
        "2019-01-03 08:00:01.13":{

        },
        "2019-01-03 08:00:01.15":{

        },
    },
    "GOOGL":{
        ...
    }
}
'''
data = {}
all_stocks = pd.read_csv("./data/constituents.csv", header=0)

def dataGen():
    out = {}
    dates = ["2019-01-03", "2019-01-04", "2019-01-05"]
    for date in dates:
        for hour in [x for x in range(8,15, 3)]:
            for minute in [x for x in range(10,15, 3)]:
                for second in [x for x in range(20,25, 3)]:
                    for milisecond in [x for x in range(20,40, 5)]:
                        out[date + "T" + str(hour) + ":" + str(minute) + ":" + str(second) + "." + str(milisecond)] = {
                            "type":random.choice(["bid", "ask", "cancel"]),
                            "price": random.randint(200,210),
                            "volume": random.randint(0,200)
                        }
    return out

for symbol in all_stocks["Symbol"]:
    print(symbol)
    data[symbol] = dataGen()

with open("./data/sampleData.json", "w") as f:
    json.dump(data, f)

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
        for hour in [x for x in range(8,16)]:
            for minute in [random.randint(0,59) for x in range(10,60,6)]:
                for second in [x for x in range(40,41)]:
                    for milisecond in [x for x in range(20,21)]:
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


tsla = pd.read_csv("./data/TSLA.csv", header=0)

tsla_price = list(tsla["Adj Close"])

ret = [0]
for i in range(1, len(tsla_price)):
    ret.append(100*(tsla_price[i] - tsla_price[i-1])/tsla_price[i-1])

ret = [x for x in ret if (x > -3) and (x < 2)]
print(ret)

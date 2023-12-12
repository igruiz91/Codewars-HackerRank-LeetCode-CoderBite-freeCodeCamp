import pandas
import os

dir = os.path.dirname(os.path.abspath(__file__))
route = os.path.join(dir,"Squirrel_Data.csv")

data = pandas.read_csv(route)


cinnamons = data[data["Primary Fur Color"] == "Cinnamon"]
blacks = data[data["Primary Fur Color"] == "Black"]
grays = data[data["Primary Fur Color"] == "Gray"]


colors_dict = {
  "Primary Fur Color" : ["Black", "Gray", "Cinnamon"],
  "Count" : [len(blacks),  len(grays),len(cinnamons)],
}


colors_data = pandas.DataFrame(colors_dict)
colors_data.to_csv(os.path.join(dir,"colors_data.csv"))

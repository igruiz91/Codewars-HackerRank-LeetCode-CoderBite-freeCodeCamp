import json

def sort_by_key(input_file, output_file):
  try:
    with open(input_file, 'r') as f:
      data = json.load(f)
      print(data)


    sorted_data = dict(sorted(data.items()))

    with open(output_file, "w") as f:
      json.dump(sorted_data, f, indent=4)
  except Exception as e:
    print(f"Error ocurred: {e}")



input_file = "settings.json"
output_file = "sorted_setting.json"


sort_by_key(input_file, output_file)

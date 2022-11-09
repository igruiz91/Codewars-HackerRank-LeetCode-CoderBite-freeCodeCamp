def scrolling_text(text):
  text = text.upper()
  return [text[i:]+text[0:i] for i in range(len(text))]





print(scrolling_text('abc'))
print(scrolling_text('codewars'))

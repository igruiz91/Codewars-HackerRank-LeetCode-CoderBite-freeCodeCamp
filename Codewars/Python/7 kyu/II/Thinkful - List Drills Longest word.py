def longest(words):
    return max(len(w) for w in words)


def longest_up(words):
  return len(max(words, key=len))

print(longest(['beautiful', 'is', 'better', 'than', 'ugly']))
print(longest_up(['beautiful', 'is', 'better', 'than', 'ugly']))

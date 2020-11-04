function nextItem(xs, item) {
  let pos = xs.indexOf(item)
  return xs[pos+1] ? xs[pos+1] : undefined
}

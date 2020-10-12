function feedbackReview(feed, size) {
  return feed.split(' ').map((e,i, arr) => {
    let next = arr[i+1] ? arr[i+1] : ' '
    if(e.length + next.length <= size-1){
      arr.splice(i,1)
      return `${e} ${next}`
    } else return e
  })//.filter(String)
}



console.log(feedbackReview("This is an example feedback", 8))
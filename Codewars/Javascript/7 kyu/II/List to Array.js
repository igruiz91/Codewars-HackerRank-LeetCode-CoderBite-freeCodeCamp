function listToArray(list) {
  let resp = [];
  while (list) {
    resp.push(list.value);
    list = list.next;
  }
  return resp;
}

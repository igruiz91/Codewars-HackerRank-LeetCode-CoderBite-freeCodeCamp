const whosOnline = (friends) => {
  let resp = { }
  friends.map(f => {
    const {username, status,lastActivity } = f
    if(status == 'online' && lastActivity>10){
      resp['away'] ? resp['away'].push(username) : resp['away']=[username]
    } else resp[status] ? resp[status].push(username) : (resp[status] = [username]);
  })
  return resp
};

const whosOnlineUp = (friends) => {
  return friends.reduce((pre, { username, status, lastActivity }) => {
    return (val => pre[val] ? pre[val].push(username) : pre[val]=[username])(status === 'online' && lastActivity >10 ? 'away' : status), pre
  },{});
}


let f = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(f))
console.log(whosOnlineUp(f))

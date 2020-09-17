function generateMenu (menuItems) { 
    return menuItems.map(i => `<a href="${i.url}">${i.text}</a>`).join('')
}

var inputs = [
    {url:"http://www.google.com",text:"10^100"},
    {url:"#codewars",text:"codewars"},
    {url:"#q", text:"query"},
    {url:"#a", text:"ans"},
    {url:"#123", text:123}
]

console.log(generateMenu(inputs));
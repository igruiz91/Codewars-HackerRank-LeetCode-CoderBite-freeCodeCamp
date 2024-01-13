function balance(book) {
  book = book.replace(/[^\s\.0-9a-zA-Z]/g, "").split`\n`.filter((v) => v);
  book[0] = (book[0] * 1).toFixed(2);
  let balance = book.map((v) => v.match(/\d+\.\d+/).join``);
  let newBalance = [];
  let originalBalance = balance[0];
  for (let i = 1; i < balance.length; i++) {
    newBalance.push((originalBalance -= balance[i]).toFixed(2));
  }
  let totalExpenses = (balance[0] - newBalance[newBalance.length - 1]).toFixed(
    2
  );
  const averageExpenses = (
    balance.slice(1).reduce((a, b) => a + b * 1, 0) /
    (balance.length - 1)
  ).toFixed(2);
  let phrase = book
    .slice(1)
    .map(
      (v, i) =>
        v.replace(/\d+\.\d+/, (v) => (v * 1).toFixed(2)) +
        ` Balance ${newBalance[i]}`
    );
  return [
    `Original Balance: ${(balance[0] * 1).toFixed(2)}`,
    ...phrase,
    `Total expense  ${totalExpenses}`,
    `Average expense  ${averageExpenses}`,
  ].join`\r\n`;
}


let b1 = `1000.00!=
125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`;

var b2 = `1980
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`;

console.log(balance(b1));
console.log();
console.log(balance(b2));

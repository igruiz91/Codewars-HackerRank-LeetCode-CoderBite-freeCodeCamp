
function money_value(s) {
  s = s.replace(/\$| /g, "");
  resp = s.length ? parseFloat(s) : 0.0;
  return isNaN(resp) ? 0.0 : resp;
}


const money_value_up = (s) => {
  return +s.replace(/\s|\$/g, "") || 0
}

console.log(money_value("12.34"), money_value_up("12.34")); // 12.34)
console.log(money_value(" $5.67"), money_value_up(" $5.67")); // 5.67)
console.log(money_value("-0.89"), money_value_up("-0.89")); // -0.89)
console.log(money_value("-$ 0.1"), money_value_up("-$ 0.1")); // -0.1)
console.log(money_value("$-2.3456"), money_value_up("$-2.3456")); // -2.3456)
console.log(money_value("007"), money_value_up("007")); // 7.0)
console.log(money_value(" $ 89"), money_value_up(" $ 89")); // 89.0)
console.log(money_value("   .11"), money_value_up("   .11")); // 0.11)
console.log(money_value("$.2"), money_value_up("$.2")); // 0.2)
console.log(money_value("-.34"), money_value_up("-.34")); // -0.34)
console.log(money_value("$$$"), money_value_up("$$$")); // 0.0)
console.log(money_value("-$.7"), money_value_up("-$.7")); // 0.0)
console.log(money_value("           $"), money_value_up("           $")); // 0.0)
console.log(money_value("-"), money_value_up("-")); // 0.0)

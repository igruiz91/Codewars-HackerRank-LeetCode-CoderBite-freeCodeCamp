function calculateAge(a, b) {
    let age = b - a;
    return age < -1 ? 'You will be born in ' + age * -1 + ' years.' : age == -1 ? 'You will be born in 1 year.' : age == 0 ? 'You were born this very year!' : age == 1 ? 'You are 1 year old.' : 'You are ' + age + ' years old.'
}

console.log(calculateAge(2012, 2016));


var quote = function (fighter) {
    return fighter.toLowerCase().split(' ').join('') == 'conormcgregor' ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" : "I am not impressed by your performance.";
};

console.log(quote('george saint pierre'));
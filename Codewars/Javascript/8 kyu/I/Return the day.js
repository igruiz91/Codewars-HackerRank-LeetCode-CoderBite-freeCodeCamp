function whatday(num) { 
    switch (num) {
        case 1: return 'Sunday';
        case 2: return 'Monday';
        case 3: return 'Tuesday';
        case 4: return 'Wednesday';
        case 5: return 'Thursday';
        case 6: return 'Friday';
        case 7: return 'Saturday';
    }
}

function whatdayUp(num) { 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
  }

console.log(whatday(1))
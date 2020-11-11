function capitalize(s,arr){
    return s.split('').map((a,i) => arr.includes(i) ? a.toUpperCase() : a).join('');
};

console.log(capitalize("abcdef",[1,2,5]));
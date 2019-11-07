const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
})



console.log(formatter.format(300000));
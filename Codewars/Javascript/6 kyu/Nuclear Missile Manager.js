function launchAll(launchMissile) {

    setTimeout(function (i) {
        for (var i = 0; i < 5; i++) {
            console.log('a');
        }
    }, i * 1000);

}


launchAll([0, 1, 2, 3, 4])
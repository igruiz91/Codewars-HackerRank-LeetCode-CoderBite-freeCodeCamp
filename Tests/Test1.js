const log = console.log;
function sort(array) {
    let index1 = 0;
    let index3 = array.length - 1;

    for (let i = 0; i <= index3; i++) {
        if (array[i] === 3) {

            if (i < index3) {
                while (array[index3] === 3 && index3 > i) {
                    index3--; //cada paso de este bucle, reduce en un paso el for
                }
                log('moviendo 3 a', index3);
                let aux = array[index3];
                array[index3] = array[i];
                array[i] = aux;
                console.log(array);
            }
            index3--;
        }
        if (array[i] === 1) {

            if (i > index1) {
                log('moviendo 1 a', index1);
                let aux = array[index1];
                array[index1] = array[i];
                array[i] = aux;
            }
            index1++;
        }
    }
    return array;
}

log(sort([2, 2, 3, 2, 1, 3, 3, 2, 2, 2, 1, 3, 3, 1, 3, 3]))
function canBeSplitted(array) {
 
    let leftSide = 0;

    if(array.length === 0) return console.log(0)

    for (let i = 0; i < array.length; i++) {

        leftSide += array[i];

        let rightSide= 0;
        
        for (let j = i+1 ; j < array.length; j++ ) {
            rightSide += array[j];
        }
            
    if (leftSide === rightSide) return console.log(1);

    }

    return console.log(-1);
}

const array = [1 , 3 , 3 , 8 , 4 , 3, 2, 3, 3];

canBeSplitted(array);
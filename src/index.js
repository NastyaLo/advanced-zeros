module.exports = function getZerosCount(number, base) {
    let simple = [];
    let i = 2;

    while(true) {
        if(i == base) {
            simple.push(i);
            break;
        } else if(base % i == 0) {
            simple.push(i);
            base /= i;
        } else {
            i++;
        };
    };

    simple.sort((a, b) => b - a);

    let baseAmount = 1;

    for(let j = 0; j < simple.length; j++) {
        if(simple[j] == simple[j+1]) {
            baseAmount++;
        } else {
            break;
        };
    };

    let baseNum = simple[0];

    let counter = 0;

    for (let j = 1; j <= number; j++) {
        let num = j;
        if(num%baseNum == 0) {
            counter++;
            num /= baseNum;

            while(num%baseNum == 0) {
                counter++;
                num /= baseNum;
            };
        };
    };

    return Math.floor(counter/baseAmount);
}

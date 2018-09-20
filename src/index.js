module.exports = function getZerosCount(number, base) {
    let simple = [];
    let repeats = {};
    let i = 2;

    while(true) {
        if(i == base) {
            simple.push(i);
            if(!repeats[i]) repeats[i] = 1;
            else repeats[i]++;
            break;
        } else if(base % i == 0) {
            simple.push(i);
            base /= i;
            if(!repeats[i]) repeats[i] = 1;
            else repeats[i]++;
        } else {
            i++;
        };
    };

    var maxValue = Math.pow(simple[0], repeats[simple[0]]);
    var key = simple[0];

    for (var variable in repeats) {
        let a = Math.pow(variable, repeats[variable]);
        if(a > maxValue) {
            maxValue = a;
            key = variable;
        }
    }

    let counter = 0;

    for (let i = 1; i <= number; i++) {
        let num = i;
        if(num%key == 0) {
            counter++;
            num /= key;

            while(num%key == 0) {
                counter++;
                num /= key;
            };
        };
    };

    return Math.floor(counter/repeats[key]);
}

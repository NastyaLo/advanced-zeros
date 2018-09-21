module.exports = function getZerosCount(number, base) {
    let simple = [];
    let unique = [];
    let results = [];
    let repeats = {};
    let i = 2, k;

    while(true) {
        if(i == base) {
            simple.push(i);
            if(unique.indexOf(i) == -1) unique.push(i);
            if(!repeats[i]) repeats[i] = 1;
            else repeats[i]++;
            break;
        } else if(base % i == 0) {
            simple.push(i);
            base /= i;
            if(unique.indexOf(i) == -1) unique.push(i);
            if(!repeats[i]) repeats[i] = 1;
            else repeats[i]++;
        } else {
            i++;
        };
    };

    for (k = 0; k < unique.length; k++) {
        let counter = 0
        let curDevider = unique[k];
        let curNum = number;

        while (curNum >= curDevider) {
            curNum = Math.floor(curNum/curDevider);
            counter += curNum;
        };

        results.push(Math.floor(counter/repeats[curDevider]));
    };

    return results.sort((a, b) => a - b)[0];
}

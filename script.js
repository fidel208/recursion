function fibs(n) {
    console.log("This was printed recursively");

    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i -1] + sequence[i -2]);
    }

    return sequence.slice(0, n);
}

console.log(fibs(8));

function fibsRec(n) {
    console.log("This was printed recursively");

    if (n <= 1) {
        return[0];
    }
    if (n === 2) {
        return[0, 1]
    }

    let sequence = fibsRec(n -1);
    sequence.push(sequence[sequence.length -1 ] + sequence[sequence.length - 2]);
    return sequence;
}

console.log(fibsRec(8));
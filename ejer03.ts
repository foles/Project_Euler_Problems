let n = 600851475143;
let lastPri = 2;
let div = 2;
while (1 < n) {
    while (n % div == 0) {
        lastPri = div;
        n = n / div;
    }
    div += 1;
}
console.log(lastPri);
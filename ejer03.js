"use strict";
var lastPri = 0;
var n = 600851475143;
for (var i = 2; i <= n; i++) {
    var primo = 1;
    var contador = 2;
    while (contador <= i / 2 && primo) {
        if (i % contador === 0) {
            primo = 0;
        }
        contador++;
    }
    (primo && n % i == 0 && i > lastPri) ? lastPri = i : null;
}
console.log(lastPri);

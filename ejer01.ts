let sum:number=0;
for (let i = 1; i < 1000; i++) {
    i%3==0 || i%5==0 ? sum+=i:null;
}
console.log(sum);

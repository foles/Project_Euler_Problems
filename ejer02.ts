let a=0,b=1,sump=0,c=0;
for(let i=1;c<4000000;i++){
    c=a+b;
    a=b;
    b=c;
    c%2===0 ? sump+=c:null;
}
console.log(sump);

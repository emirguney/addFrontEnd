var diziilk=[ 4, 13, 8, 9, 7, 1];
let dizi=[ 4, 13, 8, 9, 7, 1 ];
let dizi2 = [16, 23, 7, 11, 3, 14];
var temp=[];
let temp2=[];

function sirala(dizi,temp) {
dizi.sort((a,b)=>a-b);

   for(let i =0; i<dizi.length; i++){
    
    
    if(i%2==0)
    {
     temp.push(dizi[i])
    }
    else if(i%2==1)
    { 
     temp.unshift(dizi[i])
    }
    
    
     
  }
}
console.log("input:   " + diziilk);
sirala(dizi,temp);
console.log("output:   " + temp);

console.log("input:   " + dizi2);
sirala(dizi2,temp2);
console.log("output:   "  + temp2);
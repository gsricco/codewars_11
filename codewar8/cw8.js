

function fff(number) {
    const arrNum =[];
    let result=0;
    if (number<0) number = 0;
    for(let i=1; i<number; i++){
        arrNum[i-1]=i;
    }
const arrThree = arrNum.filter((ar)=>ar%3===0);
const arrFive = arrNum.filter((ar)=>ar%5===0);
const arrKrat = [...arrThree,...arrFive];

      arrKrat.forEach((s,index)=>{if (arrKrat[index+1]===s)  s=0; else result += s; })


    // arrKrat.forEach((r)=>{
    //     result += r;
    //     })


    console.log(arrNum)
    console.log(arrThree)
    console.log(arrFive)
    console.log(arrKrat)
    console.log(result)
return result;
}

id1.innerHTML = fff(10);



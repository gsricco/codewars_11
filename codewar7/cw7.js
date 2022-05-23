

function fff(str) {
    let arrStr =[]
    let res =[], result=[]
    let j=0
    let h='', s=''
    let str1=str.toUpperCase();
     arrStr = str.split('');

    let arrMam = arrStr.filter((a)=> a === a.toUpperCase());
    let arrChild = arrStr.filter((a)=> a !== a.toUpperCase());
    arrMam = arrMam.sort()
    console.log(arrMam)
    for (let i = 0; i< arrMam.length; i++) {
        res[i] = arrChild.filter((ch)=>arrMam[i] === ch.toUpperCase());
        result+=[...arrMam[i],...res[i]]
    }
    let arrMam1 = arrMam.map((m,index)=>m+res[index])
    arrMam1.forEach((a)=>{h += a})
    for (let i = 0; i< h.length; i++){
        if(h[i]!==',') s+=h[i];
    }

return s;
}

id1.innerHTML = fff('beeeEBb');



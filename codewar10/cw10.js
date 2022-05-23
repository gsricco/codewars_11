function fff(num) {

    let elem = num.toString()
    let r = elem.length;
    let sum = 0;

        // for (let i = 0; i < r; i++) {
        //     sum += Number(elem[i]);
        // }
    while (r >1) {
        sum = summer(elem,r);
        elem= sum.toString();
        r = elem.length;
    }


 return sum;
}

function summer(elem,r){
    let sum=0;
    for (let i = 0; i < r; i++) {
        sum += Number(elem[i]);
    }
    console.log(sum)
    return sum;
}

id1.innerHTML = fff(493193    );



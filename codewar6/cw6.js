

function fff(str) {

    let arrStr = str.split(' ')
    const strAlf = 'abcdefghijklmnopqrstuvwxyz';
    let arrAlf = strAlf.split('');

    let newArrStr = arrStr.map((arr)=> [ arr.split('')]);
    let arrRet = arrAlf.map((arr, index)=>[{sim:arr, rait:index}]);

    let rating = [], newResult=[], zna;
    newArrStr.forEach((str,index1)=>{

        str.forEach((el,index2)=> {
            zna=0;
            arrRet.forEach((alf,index3)=>{
                console.log( alf[0].sim)
                console.log( el[index2])

                if (el[index2] == alf[0].sim) {
                    zna += alf[0].rait;
                    console.log('DDDD' + alf[0].rait);
                    rating[index3] = zna;
                }
            })
            zna += 0;
            console.log('zna' + zna)

            // debugger

        })
        // rating[index1] = zna

        console.log(rating);
    })

     newResult = arrStr.map((arr,index)=>[{wr:arr, rat:rating[index]}])

    console.log(arrStr)
    console.log(arrAlf)
    console.log(arrRet)
    console.log(newArrStr)
    console.log(newResult)

    return rating;
}

id1.innerHTML = fff('dggdhd hdhdhd djdjdjjd jdjdjdjd');



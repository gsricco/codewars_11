

function fff(str) {

    let arrStr = str.split(' ')
    const strAlf = 'abcdefghijklmnopqrstuvwxyz';
    let arrAlf = strAlf.split('');

    let sss = arrStr.reduce((acc,arr)=>acc+arr,'')
    let alfavit={};
    let art =[]

    arrAlf.forEach((el,index)=>{
        alfavit[index] =el;
        art[index]={[el]:index+1}
    })


    let ss1='';
    for(let d=0;d<sss.length;d++) {

        for (let i = 0; i < 26; i++) {
            if (sss[d].toLowerCase() == alfavit[i]) ss1+=i+1+' ';

        }
        console.log(ss1)
    }
    console.log(ss1)




    return ss1.trim();
}

id1.innerHTML = fff('The sunset sets at twelve o\' clock.');



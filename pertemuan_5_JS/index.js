let busjumlah = 10;
let jumalahoperasi = 6;
let nobus = 0;

for(nobus; nobus <= busjumlah; nobus++){
    if(nobus <=jumalahoperasi){
        console.log('bus transjakarta ' + nobus + " beroprasi dengan baik")
    }else if(nobus ===8){
        console.log('bus transjakarta '+ nobus + " sedang lembur")
    }else{
        console.log('bus transjakarta '+ nobus + " tidak beroperasi")
    }
}
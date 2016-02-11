var suitcase = {
    shirt: "Hawaiian"
};

if( suitcase["shorts"] === true){
    console.log(suitcase["shorts"])
}else{
    console.log(suitcase.shorts = "red");
}
suitcase.hasOwnProperty('shorts');
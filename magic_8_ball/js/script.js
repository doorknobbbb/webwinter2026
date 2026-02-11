// alert('hi')

function magic8ball(){
    var fortune = getafortune();
    showfortune(fortune);
}

function getafortune(){
    var fortunes = ["Hmm... Perhaps...", "It seems so...", "I believe not.", "[REDACTED]"];
    var random = rando(fortunes.length);
    return fortunes[random];
}

function rando(max){
    return Math.floor(Math.random()*max);
}

function showfortune(fortune) {
    document.getElementById("answer").innerHTML = fortune;
}

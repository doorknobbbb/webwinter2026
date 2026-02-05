function askName(){
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('Enter your name in the box below!');
    if (name == ''){
        alert('Please try again.');
    } else{
        nameReturn.innerHTML = 'Hello' + name + '! Nice to meet you!';
    }
}

function askQuestion() {
    var p=prompt('If Zimo is eating 53 apples, how many tylers will it take to cause a total economic collapse?');
    if(p != null){
        document.getElementById('question').innerHTML = 'Wow! ' + p + '? That\'s... not a lot of Tylers...'
    }
}
var questions = [
{
    prompt: "How many letters are in the alphabet?\n(a) 26\n (b) 37\n (c) 6",
    answer: "a"
},
{
    prompt: "How many President have been elected in the United States?\n (a) 50\n (b) 37\n (c) 45",
    answer: "c"
},
{
    prompt: "How many days are in a non leap year?\n (a) 367\n (b) 365\n (c) 52",
    answer: "b"
},
]
var score = 0; 
    for(var i=0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt); 
        if (response == questions[i].answer){
            score++; 
            alert("WOW! you are so smart!");
        }else{
            alert("Sorry! maybe next time!");
        }
    }
    alert("total correct" + score + "/" + questions.length);

    var x = setInterval(function() {
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("timer").innerHTML =  minutes + "m " + seconds + "s "; 
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("timer").innerHTML = "EXPIRED"; 
    } 
}, 1000); 
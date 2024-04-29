function checkTriviaAnswer()
{
    const answer = document.getElementById("trivia-answer").value.trim()
    const responseElement = document.getElementById("trivia-response");
    const correctAnswer = "Paris";

    if(answer.toLowerCase() === correctAnswer.toLowerCase())
    {
        responseElement.textContent = `Yes! ${answer} is the capital of France.`;
    }
    else
    {
        responseElement.textContent = `Nope! ${answer} is not the capital of France.`;
    }
}


function checkNumber()
{
    const numberInput = document.getElementById("number-input").value;
    const num = parseInt(numberInput);

    if(!isNaN(num) && num>= 10000 && num <= 99999 && numberInput.length==5)
    {
        const isEven = num % 2 === 0;
        document.getElementById("number-response").innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;
        console.log(numberInput)   //check numberInput length to handle the leading zeros problem (eg. '0099999')
    }
    else
    {
        document.getElementById("number-response").innerText = "Please enter a valid 5-digit number.";
        console.log(numberInput)
    }
}




document.addEventListener('DOMContentLoaded', () => {

    const triviaInput = document.getElementById("trivia-answer");
    triviaInput.addEventListener("keypress", function(event){
        if (event.key === "Enter")
        {
            event.preventDefault();
            checkTriviaAnswer();
        }   
    });
    const numberInput = document.getElementById("number-input");
    numberInput.addEventListener("keypress", function(event){
        if (event.key === "Enter")
        {
            event.preventDefault();
            checkNumber();
        }   
    });

});

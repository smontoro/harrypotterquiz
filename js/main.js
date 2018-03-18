
var questions = [
	
	{
		question: "What is the name of Hermione's cat?",
		answer: "crookshanks"
	}, 
	{
		question: "What is Harry's patronus?",
		answer: "stag"
	},
	{
		question: "On what holiday did Harry's parents die?",
		answer: "Halloween"
	},
	{
		question: "What kind of giant insect does Hagrid keep in the woods?",
		answer: "spider"
	},
	{
		question: "What house is Cedric Diggory in?",
		answer: "Ravenclaw"
	}

]

//loop through each question
for (var i = 0; i<questions.length; i++) {
	//store each question value
	var question = questions[i].question
	//store each elemement to add questions to
	var elemement = document.getElementById('question' + [i])
	//turn questions into text
	var questionText = document.createTextNode(question)

	elemement.appendChild(questionText)
}

//check reseults when user submits quiz
function testResults() {
	//store variables to update correct and incorrct totals
	var correct = 0;
	var incorrect = 0;

//loop through questions array
for (var i = 0; i < questions.length; i++) {

   var answer = questions[i].answer;
   var guess = document.getElementById('answer' + [i].value);
   //store element to add a class if correct or incorrect
   var questionSpot = document.getElementById('question' + [i]);

   //check if the user answer matches the correct answer
   if(answer == guess) {
   	//update class on questionsSpot
   	questionSpot.className = questionSpot.className + ' correct';
   	//add one to correct
   	correct++;
   } else {
   	//update class on questionsSpot
   	questionSpot.className = questionSpot.className + ' incorrect';
   	//add one to incorrect
   	incorrect++;
   };
 };

 //update correct and incorrect values
 document.getElementById('correct').textContent = correct;
 document.getElementById('incorrect').textContent = incorrect;
}
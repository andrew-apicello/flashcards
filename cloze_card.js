var inquirer = require("inquirer");

inquirer.prompt([{
	type: "list",
	message: "What kind of flashcard would you like to create?",
	choices: ["Basic","Cloze"],
	name: "flashcard"
}]).then(function(response) {

	if (response.flashcard == "Basic"){
		inquirer.prompt([{
			type: "input",
			message: "Please enter the question:",
			name: "flashcardFront"
		}]).then(function(response) {
			var front = response.flashcardFront;
			console.log(response.flashcardFront);
			inquirer.prompt([{
				type: "input",
				message: "Please enter the answer:",
				name: "flashcardBack"
			}]).then(function(response) {
				var back = response.flashcardBack;
				console.log(response.flashcardBack);

				function Question(number,front,back) {
					this.number = number;
					this.front = front;
					this.back = back;
				}

				var firstQuestion = new Question(1,"Who was the first president of the United States?","George Washington");
				var secondQuestion = new Question(2,"What is the tallest building in the world?","The Burj Khalifa ");
				var thirdQuestion = new Question(3,"What is the most famous national park in Wyoming?", "Yellowstone ");
				var fourthQuestion = new Question(4,front,back);

				console.log("Here are all of you flashcards:")
				console.log(firstQuestion);
				console.log(secondQuestion);
				console.log(thirdQuestion);
				console.log(fourthQuestion);

			});
		});

	} else {

		inquirer.prompt([{
			type: "input",
			message: "Please enter the partial text",
			name: "flashcardPartialText"
		}]).then(function(response) {
			var partial = response.flashcardPartialText;
			inquirer.prompt([{
				type: "input",
				message: "Please enter the cloze text",
				name: "flashcardClozeText"
			}]).then(function(response) {
				var cloze = response.flashcardClozeText;

				function Question(number,partial,cloze) {
					this.number = number;
					this.partial = partial;
					this.cloze = cloze;
					this.fulltext = partial + " " + cloze
				}

				var firstQuestion = new Question(1,"George Washington ","was the first president of the United States.");
				var secondQuestion = new Question(2,"The Burj Khalifa ","is the tallest building in the world.");
				var thirdQuestion = new Question(3,"Yellowstone ","is the most famous national park in Wyoming.");
				var fourthQuestion = new Question(4,partial,cloze);

				console.log("Here are all of you flashcards:")
				console.log(firstQuestion);
				console.log(secondQuestion);
				console.log(thirdQuestion);
				console.log(fourthQuestion);

			});
		});
	};
});



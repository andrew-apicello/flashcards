function Question(number,front,back) {
  this.number = number;
  this.front = front;
  this.back = back;
}

var firstQuestion = new Question(1,"George Washington ","was the first president of the United States.");
console.log(firstQuestion.front);

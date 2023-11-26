class Question{
    constructor(_number1,_number2){
        this.number1 = _number1;
        this.number2 = _number2;
        this.math='';
    }
}

Question.prototype.getSum = function(){
    this.math=this.number1 + this.number2;
    return this.math;
}

Question.prototype.getMin = function(){
    this.math=this.number1 - this.number2;
    return this.math;
}

Question.prototype.getMul = function(){
    this.math=this.number1 * this.number2;
    return this.math;
}

Question.prototype.getAns = function(){
    this.math=this.number1 / this.number2;
    return this.math;
}

const answer=new Question(1,2);

console.log(answer.getSum());
console.log(answer.getAns());
console.log(answer.getMin());
console.log(answer.getMul());
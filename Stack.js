console.log("testing");

function MyStack(){
  this.array=[];
}

MyStack.prototype.add= function(data){
  this.array.push(data);
}

MyStack.prototype.remove=function(){
  return this.array.pop();
}

MyStack.prototype.peek=function(){
  return this.array[this.array.length-1];
}

MyStack.prototype.size=function(){
  return this.array.length;
}

MyStack.prototype.print=function(){
  console.log(this.array.join());
}


var stack1 = new MyStack;
stack1.add(4);
stack1.add(8);
stack1.add(2);
stack1.add(9);
console.log(stack1);

console.log(stack1.remove());
console.log(stack1.peek());

console.log(stack1.size());

stack1.print();

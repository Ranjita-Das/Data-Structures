console.log("testing");


function MyQueue(){
  this.array=[];
}

MyQueue.prototype.enqueue=function(data){
  this.array.push(data);
}

MyQueue.prototype.dequeue=function(){
  return this.array,shift();
}

MyQueue.prototype.length=function(){
  return this.array.length;
}

MyQueue.prototype.peek=function(){
  return this.array[0];
}

MyQueue.prototype.print=function(){
  console.log(this.array.join());
}

console.log("testing")

function MyArray(){
  this.array=[];
}

MyArray.prototype.add= function(data){
  this.array.push(data);
}

MyArray.prototype.remove= function(data){
  this.array=this.array.filter(function(element){
    return element!=data;
  })
}

MyArray.prototype.search = function(data){
  var foundIndex = this.array.indexOf(data);
  if(foundIndex)
  {
    return foundIndex;
  }
  else{
    return "no such element in the array"
  }
}

MyArray.prototype.getElementAtIndex= function(data){
  return this.array[data];
}

MyArray.prototype.length=function(){
  return this.array.length;
}

MyArray.prototype.printArray=function(){
  console.log(this.array.join())
}

var arr = new MyArray();
arr.add(1);
arr.add(4);
arr.add(8);

console.log(arr);
console.log(arr.search(8));
console.log(arr.getElementAtIndex(1));
console.log(arr.length());
arr.printArray();

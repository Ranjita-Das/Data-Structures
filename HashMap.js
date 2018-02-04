console.log("testing");

function HashMap(size){
  this.values={};
  this.numberOfValues=0;
  this.size=size;
}


HashMap.prototype.hash=function(key){
  return key.toString().length%this.size;
};


HashMap.prototype.length=function(){
  return this.numberOfValues;
}

HashMap.prototype.add=function(key, value){
    var hash= this.hash(key);

    if(!this.values.hasOwnProperty(hash)){
      this.values[hash]={};
    }

    if(!this.values[hash].hasOwnProperty(key)){
      this.numberOfValues++;
    }

    this.values[hash][key]=value;
}


HashMap.prototype.remove=function(key, value){
  var hash = this.hash(key);

  if((this.values.hasOwnproperty(hash)) && (this.values.hash.hasOwnproperty(key)))
  {
    delete this.values[hash][key];
    this.numberOfValues--;
  }
};



HashMap.prototype.search=function(key){
  var hash= this.hash(key);
  if((this.values.hasOwnproperty(hash)) && (this.values[hash].hasOwnproperty(key))){
    return this.values[hash][key];
  }
  else{
    return null;
  }
}

HashMap.prototype.print=function(){
  var output=""
  for (var hash in this.values){
    for (var key in this.values[hash]){
      output = output+ key+":"+ this.values[hash][key] + " "
    }
    output += "\n"
  }
  console.log(output.trim());
}

var hashMap = new HashMap(3);
console.log(hashMap);
hashMap.add('first', 1);
console.log(hashMap);
hashMap.add('second', 2);
hashMap.add('third', 3);
hashMap.add('fourth', 4);
hashMap.add('fifth', 5);
hashMap.print();

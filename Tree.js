console.log("testing");

function Node(data){
  this.data=data;
  this.left=null;
  this.right=null;
}

function Tree(){
  this.root=null;
}

Three.prototype.findBFS=function(data){
  if(this.root==null){
    console.log("tree is empty")
  }
  else{
    var queue=[this.root];
    while(queue.length){
      var node = queue.shift();
      if(node.data==data)
      {
        return node;
      }else
        var children=[node.left, node.right];
        for(var i=0; i<children.length; i++)
        {
          queue.push(children[i]);
        }
      }
    }
    return null;
  }
};

Tree.prototype.add=function(data, toNodeData){
  var node = new Node(data);
  var parent = toNodeData ? findBFS(toNodeData) : null;
  if(parent){
    parent.children.push(node)
  }
  else {
    if(this.root==null)
    this.root=node;
    else {
      return "root is already assigned";
    }
  }
};

Tree.prototype.remove=function(data){
  if(this.root.data==data)
    this.root=null;

  var queue = [this.root];
  while(queue.length){
    var node= queue.shift();
    for(var i=0; i<node.children.length;++i){
      if(node.children[i].data==data){
        node.children.splice(i,1);
      }else{
        queue.push(children[i]);
      }
    }
  }
};




Tree.prototype.contains=function(data){
  return(this.findBFS(data)? true:false);
}


//this is only for binary trees
Tree.prototype.preOrder=function(node){
  if(node==null)
  {
    return null;


  }
  else{
    console.log(node.data);
    if(node.left)
    {
      this.preOrder(node.left);
    }
    if(node.right)
    {
      this.preOrder(node.right);
    }
  }
}

Tree.prototype.inOrder=function(node){
  if(node==null)
  return null;
  else {
    {
      if(node.left)
      {
        this.inOrder(node.left);
      }
      console.log(node.data);
      if(node.right){
        this.inOrder(node);
      }
    }
  }
}

Tree.prototype.postOrder=function(node){
  if(node==null)
  return null;
  else {
    {
      if(node.left)
      {
        this.inOrder(node.left);
      }
      if(node.right){
        this.inOrder(node);
      }
      console.log(node.data);
    }
  }
}

var tree1 = new Tree();

console.log("testing");


function Node(data){
  this.data=data;
  this.next=null;
}

function SinglyLinkedList(){
  this.head=null;
  this.tail=null;
  this.numberOfValues=0;
}

SinglyLinkedList.prototype.add=function(data){
  var node = new Node(data);

  if(this.head==null)
  {
    this.head=node;
    this.tail=node;
  }
  else {
    {
      this.tail.next=node;
      this.tail=node;
    }
  }
  this.numberOfValues++;
}

SinglyLinkedList.prototype.printList=function(){
  if(this.head==null)
    return "its is an empty list";
  else{
    var output =""
    var tempNode = new Node();
    tempNode=this.head;
    while(tempNode)
    {
      output=output+tempNode.data+" ";
      tempNode=tempNode.next;
    }
  }
  console.log(output);
}

SinglyLinkedList.prototype.remove=function(data){
  console.log("current");
  if(this.head==null)
  {
    console.log("string is empty");
  }
  else{
    var current = new Node();
    var prev = new Node();
    prev.next=this.head;
    current=this.head;

    while(current){
      if(current.data==data)
      {
        prev.next=current.next;
        current=current.next;
      }
      else{
        prev=current;
        current=current.next;
        prev.next=current;
      }
    }
  }
}

    SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
      var current = this.head;
      while(current) {
        if(current.data === toNodeData) {
          var node = new Node(data);
          if(current === this.tail) {
            this.tail.next = node;
            this.tail = node;
          } else {
            node.next = current.next;
            current.next = node;
          }
          this.numberOfValues++;
        }
        current = current.next;
      }
    };

var ll= new SinglyLinkedList();

ll.add(1);
ll.add(3);
ll.add(4);
ll.add(1);
ll.add(3);
ll.add(5);
ll.add(4);
ll.add(4);
ll.printList();
//ll.remove(4);
console.log("1");
ll.insertAfter(3,5);
ll.printList();

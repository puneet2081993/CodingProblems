class LinkedList{
  constructor(data){
    this.key = data;
    this.next = null;
  }
}


function createLinkedList(arr, list, pointer){
    if(!arr[pointer]){
      return;
    }
    list.key = arr[pointer];
    list.next = (arr[pointer+1]) ? new LinkedList(arr[pointer+1]) : null;
    createLinkedList(arr, list.next, pointer+1);
}

function printList(list){
  while(list != null){
    console.log(list.key);
    list = list.next;
  }
}


/* Function to reverse the linked list */
function reverseLinkedlist(node) {
  var prev = null;
  var current = node;
  var next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

let list = new LinkedList();
const arr = [1,2,3,4,5];
createLinkedList(arr,list, 0);

const result = reverseLinkedlist(list);
console.log('-----Reversed LinkedList------');
printList(result);

/*
Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place.
The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL.
The order of nodes in DLL must be same as Inorder of the given Binary Tree.
The first node of Inorder traversal (left most node in BT) must be head node of the DLL.
*/

class Node{
  constructor(data){
    this.key = data;
    this.left = null;
    this.right = null;
  }
}

class DoublyLinkedList{
  constructor(data){
    this.key = data;
    this.next = null;
    this.prev = null;
  }
}

const inorderList = [];
const preorderList = [];
const postorderList = [];

function printInorder(node){
  if(node == null){
      return;
  }
  printInorder(node.left);
  inorderList.push(node.key);
  printInorder(node.right);
  
}

const root = new Node(10);
root.left = new Node(12);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right = new Node(15);
root.right.left = new Node(36);


printInorder(root);
console.log("Inorder : " + inorderList);

function createDoublyLinkedListFromInorder(list, pointer){
    if(!inorderList[pointer]){
      return;
    }
    list.key = inorderList[pointer];
    list.next = (inorderList[pointer+1]) ? new DoublyLinkedList(inorderList[pointer+1]) : null;
    list.prev = (inorderList[pointer-1]) ? inorderList[pointer-1] : null;
    createDoublyLinkedList(list.next, pointer+1);
}

  let list = new DoublyLinkedList();
  createDoublyLinkedListFromInorder(list, 0);
  console.log(list);

class Node{
  constructor(data){
    this.key = data;
    this.left = null;
    this.right = null;
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

function printPreorder(node){
  if(node == null){
      return;
  }
  preorderList.push(node.key);
  printPreorder(node.left);
  printPreorder(node.right);
  
}

function printPostorder(node){
  if(node == null){
      return;
  }
  printPostorder(node.left);
  printPostorder(node.right);
  postorderList.push(node.key);
  
}

const root = new Node(10);
root.left = new Node(12);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right = new Node(15);
root.right.left = new Node(36);


printInorder(root);
printPreorder(root);
printPostorder(root);

console.log("Inorder : " + inorderList);
console.log("Preorder : " + preorderList);
console.log("Postorder : " + postorderList)

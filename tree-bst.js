class Node{
  constructor(data){
    this.key = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);

let queue = [];
queue.push(root);

while(queue.length > 0){
    console.log(queue[0].key);

    const temp_node = queue.shift();
 
    if(temp_node.left != null){
      queue.push(temp_node.left);
    }
    
    if(temp_node.right != null){
      queue.push(temp_node.right);
    }        
}

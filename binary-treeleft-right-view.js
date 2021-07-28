class Node {
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


function printRightView() {
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let n = queue.length;
        while (n-- > 0) {
            const temp_node = queue.shift();

            if (n == 0) {
                console.log(temp_node.key + " ");
            }

            if (temp_node.left != null) {
                queue.push(temp_node.left);
            }

            if (temp_node.right != null) {
                queue.push(temp_node.right);
            }
        }
    }
}

function printLeftView() {
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let n = queue.length;
        while (n-- > 0) {
            const temp_node = queue.shift();

            if (n == 0) {
                console.log(temp_node.key + " ");
            }

            if (temp_node.right != null) {
                queue.push(temp_node.right);
            }

            if (temp_node.left != null) {
                queue.push(temp_node.left);
            }
        }
    }
}


console.log("Right View of tree : ");
printRightView(root);

console.log("Left View of tree : ");
printLeftView(root);

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insertNode(value) {

        if(this.root == null){
            let newNode = new TreeNode(value);
            this.root = newNode;
            return this.root;
        } else {
            function traverseAndAddNode(node) {
    
                if(value < node.value){
                    if(!node.left){
                        return node.left = new TreeNode(value);
                    } else {
                        return traverseAndAddNode(node.left);
                    }
                } else {
                    if(!node.right){
                        return node.right = new TreeNode(value);
                    } else {
                        return traverseAndAddNode(node.right);
                    }
                }            
            }
            traverseAndAddNode(this.root)
        }
    }

    deleteNode(root, value) {

        if(this.root == null){
            return root;
        } else if(value < root.value){
            this.deleteNode(root.left, value);
        }else if(value > root.value){
            this.deleteNode(root.right, value);
        } else {
            // case 1 : if the node has no child
            
            if(root.left == null && root.right == null){
                root = null;
                return null;
            }

            // case 2 : when node has only one child, either left or right

            else if(root.left == null){
                let temp = root;
                root = root.right;
                temp = null;
            } else if(root.right == null){
                let temp = root;
                root = root.left;
                temp = null;
            }

            //case 3 : when node has both child

            else {
                let temp = this.findMin(root.right)
                root.value = temp.value;
                root.right = this.deleteNode(root.right, temp.value);
            }
        }
    }

    findMin(root) {
        let temp = root;

        while(temp.left){
            temp = temp.left;
        }
        return temp;
    }
}



let binarySearchTree = new BST();

let root = binarySearchTree.insertNode(11);
//console.log(root);

binarySearchTree.insertNode(8);
binarySearchTree.insertNode(14);
binarySearchTree.insertNode(6);
binarySearchTree.insertNode(15);
binarySearchTree.insertNode(10);
binarySearchTree.deleteNode(root, 11);

console.log(root);


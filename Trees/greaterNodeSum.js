class TreeNode {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let pre = 0;
class BST {
    constructor(){
        this.root = null;
    }

    insertNode(value){
         if(this.root === null){
            let newNode = new TreeNode(value);
            this.root = newNode;
            return this.root;
         }

         else {
            function traverseAndAddNode(node){
                if(value < node.value){
                    if(!node.left){
                        return node.left = new TreeNode(value);
                    } else {
                        return traverseAndAddNode(node.left);
                    }
                }
                else {
                    if(!node.right){
                        return node.right = new TreeNode(value);
                    } else {
                        return traverseAndAddNode(node.right)
                    }
                }
            }
            traverseAndAddNode(this.root);
         }
    }
    
    sumGreaterNodes(){
        if(this.root.right != null)
            this.sumGreaterNodes(this.root.right);
        
        pre = this.root.value = pre+this.root.value;
    
         if(this.root.left != null)
            this.sumGreaterNodes(this.root.left);

        return this.root;
    }

    printTree(){
        console.log(this.root);
    }

}

let binarySearchTree = new BST();

binarySearchTree.insertNode(50);
binarySearchTree.insertNode(40);
binarySearchTree.insertNode(60);
binarySearchTree.insertNode(35);
binarySearchTree.insertNode(45);
binarySearchTree.insertNode(65);
binarySearchTree.insertNode(10);
binarySearchTree.printTree();
binarySearchTree.sumGreaterNodes();
//binarySearchTree.printTree();
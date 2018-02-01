/**
 * @file 二叉搜索树
 * @author Marx
 */

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        this.root = insert(key, this.root);
    }
    remove(key) {

    }
}

function insert(key, node) {
    if (node) {
        if (key < node.key) {
            node.insertLeft(insert(key, node.left));
        }
        else {
            node.insertRight(insert(key, node.right));
        }
        return node;
    }
    else {
        return new Node(key);
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    insertLeft(node) {
        this.left = node;
    }

    insertRight(node) {
        this.right = node
    }
}

const tree = new BinarySearchTree();

[20, 49, 13, 9, 4, 6, 30, 12, 100, 7, 40, 5, 4, 2, 21, 60].map(function (item) {
    tree.insert(item);
});
console.log(JSON.parse(JSON.stringify(tree.root)));
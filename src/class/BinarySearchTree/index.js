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
        return this.root;
    }
    remove(key) {
        this.root = remove(key, this.root);
        return this.root;
    }
    searchKey(key) {
        return searchKey(key, this.root);
    }
    max() {
        return max(this.root);
    }
    min() {
        return min(this.root);
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

function remove(key, node) {
    if (node === null) {
        return null;
    }
    if (node.key > key) {
        return remove(key, node.right);
    }
    else if (node.key < key) {
        return remove(key, node.left);
    }
    else {
        if (node.left === null && node.right === null) {
            return null
        }
        if (node.left === null) {
            node = node.right;
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }

        const aux = min(node.right);
        node.key = aux.key;
        node.right = remove(aux.key, node.right);
        return node;
    }
}

function max(node) {
    if (node.right) {
        return max(node.right);
    }
    return node;
}

function min(node) {
    if (node.left) {
        return min(node.left)
    }
    return node;
}

function searchKey(key, node) {
    if (node === null) {
        return false;
    }
    if (key === node.key) {
        return true;
    }
    if (key > node.key) {
        return searchKey(key, node.right);
    }
    if (key < node.key) {
        return searchKey(key, node.left);
    }
}

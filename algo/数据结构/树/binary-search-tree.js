class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(key, node = this.root){
    if (this.root == null){
      return this.root = new Node(key);
    }
    if (key < node.key){
      if (node.left == null){
        return node.left = new Node(key);
      }
      return this.insert(key, node.left);
    } else if (key > node.key) {
      if (node.right == null){
        return node.right = new Node(key);
      }
      return this.insert(key, node.right);
    }
  }
  search(key, node = this.root){
    if (node == null){
      return false;
    }
    if (key == node.key){
      return true;
    } else if (key < node){
      return this.search(key, node.left);
    } else {
      return this.search(key, node.right);
    }
  }
  min(node = this.root){
    let current = node;
    if (current == null) {
      return undefined;
    }
    while(current.left){
      current = current.left;
    }
    return current;
  }
  max(node = this.root){
    let current = node;
    if (current == null) {
      return undefined;
    }
    while(current.right){
      current = current.right;
    }
    return current;
  }
  remove(key, node = this.root){
    if (node == null){
      return null;
    }
    if (key < node.key){
      node.left = this.remove(key, node.left);
    } else if (key > node.key){
      node.right = this.remove(key, node.right);
    } else {
      if(node.left == null && node.right == null){
        node = null;
      } else if (node.left == null) {
        node = node.right;
      } else if (node.right == null) {
        node = node.left;
      } else {
        const minRightNode = this.min(node.right);
        node.key = minRightNode.key;
        node.right = this.remove(minRightNode.key, node.right);
      }
    }
    return node;
  }
  // zhong
  inOrderTraverse(node = this.root){
    if (node == null) {
      return
    }
    this.inOrderTraverse(node.left);
    console.log(node.key);
    this.inOrderTraverse(node.right);
  }
  // xian
  preOrderTraverse(node = this.root){
    if (node == null) {
      return
    }
    console.log(node.key);
    this.preOrderTraverse(node.left);
    this.preOrderTraverse(node.right);
  }
  // hou
  postOrderTraverse(node = this.root){
    if (node == null) {
      return
    }
    this.postOrderTraverse(node.left);
    this.postOrderTraverse(node.right);
    console.log(node.key);
  }
}
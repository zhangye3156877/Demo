class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class AVLTree{
  #balanceType = {
    'balance': 0,
    'unbalanceLeft': 2,
    'unbalanceRight': -2
  }
  constructor(){
    this.root = null;
  }
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
  }
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }
  rotationRL(node){
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
  getBanlance(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }
  insert(key) {
    this.root = this.insertNode(key, this.root);
  }
  insertNode(key, node){
    if (node == null){
      return new Node(key);
    }
    if (key < node.key){
      node.left = this.insertNode(key, node.left);
    } else if (key > node.key) {
      node.right = this.insertNode(key, node.right);
    } else {
      return node;
    }
    const balanceType = this.getBanlance(node);
    
    if (balanceType === this.#balanceType.unbalanceLeft) {
      if (key < node.left.key) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceType === this.#balanceType.unbalanceRight) {
      if (key > node.right.key) {
        node = this.rotationRR(node);
      }else {
        return this.rotationRL(node);
      }
    }
    return node;
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
    const banlanceType = this.getBanlance(node);

    if (balanceType === this.#balanceType.unbalanceLeft){
      const banlanceTypeLeft = this.getBanlance(node.left);
      if (banlanceTypeLeft === 0 || banlanceTypeLeft === 1){
        return this.rotationLL(node);
      }
      if (banlanceTypeLeft === -1) {
        return this.rotationLR(node);
      }
    }
    if (balanceType === this.#balanceType.unbalanceRight){
      const banlanceTypeRight = this.getBanlance(node.right);
      if (banlanceTypeRight === 0 || banlanceTypeRight === -1) {
        return this.rotationRR(node);
      }
      if (banlanceTypeRight === 1) {
        return this.rotationRL(node);
      }
    }
    return node
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
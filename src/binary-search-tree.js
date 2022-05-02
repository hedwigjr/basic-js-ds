const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.list = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.list;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const addNode = list => {
      if (list === null) {
          this.list = new Node(data);
      } else if (data < list.data) {
          if (list.left === null) {
              list.left = new Node(data);
          } else {
              addNode(list.left)
          }
      } else if (data > list.data) {
          if (list.right === null) {
              list.right = new Node(data);
          } else {
              addNode(list.right)
          }
      }
  }
  addNode(this.list)
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.find(data) !== null;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = this.list;
    while (node !== null) {
        if (node.data === data) {
            return node;
        } else if (data < node.data) {
            node = node.left;
        } else if (data > node.data) {
            node = node.right;
        }
    }
    return null

  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
     if (this.list === null) return null;
        let min = this.list.data,
            node = this.list;
        while (node.left !== null) {
            min = node.left.data;
            node = node.left;
        }
        return min;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.list === null) return null;
        let max = this.list.data,
            node = this.list;
        while (node.right !== null) {
            max = node.right.data;
            node = node.right;
        }
        return max;
  }
}

module.exports = {
  BinarySearchTree
};
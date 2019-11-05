class LinkedListNode<T> {
  value: T;
  next?: LinkedListNode<T> = undefined;

  constructor(value: T) {
    this.value = value;
  }
}

export default class LinkedList<T> {
  head?: LinkedListNode<T>;

  addFirst(value: T) {
    const newNode = new LinkedListNode(value);

    newNode.next = this.head;

    this.head = newNode;
  }

  addLast(value: T) {
    const newNode = new LinkedListNode(value);
    let node = this.head;

    // empty list
    if (!node) {
      this.head = newNode;
      return;
    }

    while (node.next) {
      node = node.next;
    }

    node.next = newNode;
  }

  removeFirst() {
    const node = this.head;

    // empty list
    if (!node) return;

    this.head = node.next;
    node.next = undefined;
  }

  removeLast() {
    let node = this.head;

    // empty list
    if (!node) return;

    // one node
    if (!node.next) {
      this.head = undefined;
      return;
    }

    // many nodes
    while (node.next && node.next.next) {
      node = node.next;
    }

    node.next = undefined;
  }

  remove(value: T) {
    let prevNode;
    let node = this.head;

    while (node && node.value !== value) {
      prevNode = node;
      node = node.next;
    }

    if (!node) return;

    if (!prevNode) {
      this.removeFirst();
      return;
    }

    prevNode.next = node.next;
    node.next = undefined;
  }

  get values() {
    let node = this.head;
    const values = [];

    while (node) {
      values.push(node.value);
      node = node.next;
    }

    return values;
  }

  get count() {
    return this.values.length;
  }
}

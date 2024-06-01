class AVLNode {
  key: number;
  left: AVLNode | null = null;
  right: AVLNode | null = null;
  height: number = 1;

  constructor(key: number) {
    this.key = key;
  }
}

class AVLTree {
  insert(root: AVLNode | null, key: number): AVLNode {
    if (!root) {
      return new AVLNode(key);
    } else if (key < root.key) {
      root.left = this.insert(root.left, key);
    } else {
      root.right = this.insert(root.right, key);
    }

    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    const balance = this.getBalance(root);

    if (balance > 1 && key < root.left!.key) {
      return this.rightRotate(root);
    }
    if (balance < -1 && key > root.right!.key) {
      return this.leftRotate(root);
    }
    if (balance > 1 && key > root.left!.key) {
      root.left = this.leftRotate(root.left!);
      return this.rightRotate(root);
    }
    if (balance < -1 && key < root.right!.key) {
      root.right = this.rightRotate(root.right!);
      return this.leftRotate(root);
    }

    return root;
  }

  leftRotate(z: AVLNode): AVLNode {
    const y = z.right!;
    const T2 = y.left;
    y.left = z;
    z.right = T2;
    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    return y;
  }

  rightRotate(z: AVLNode): AVLNode {
    const y = z.left!;
    const T3 = y.right;
    y.right = z;
    z.left = T3;
    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    return y;
  }

  getHeight(root: AVLNode | null): number {
    if (!root) {
      return 0;
    }
    return root.height;
  }

  getBalance(root: AVLNode | null): number {
    if (!root) {
      return 0;
    }
    return this.getHeight(root.left) - this.getHeight(root.right);
  }

  preOrder(root: AVLNode | null): number[] {
    const res: number[] = [];
    if (root) {
      res.push(root.key);
      res.push(...this.preOrder(root.left));
      res.push(...this.preOrder(root.right));
    }
    return res;
  }
}

export { AVLNode, AVLTree };

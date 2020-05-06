const reverseBetween = function(head, m, n) {
  this.left = head;
  this.stop = false;
  recurseAndReverse(head, m, n);
  return head;
};
const recurseAndReverse = function(right, m, n) {
  if (n === 1) return;
  right = right.next;
  if (m > 1) this.left = this.left.next;
  recurseAndReverse(right, m - 1, n - 1);
  // In case both the pointers cross each other or become equal, we
  // stop i.e. don't swap data any further. We are done reversing at this
  // point.
  if (this.left === right || right.next === this.left) this.stop = true;
  // Until the boolean stop is false, swap data between the two pointers
  if (!this.stop) {
    const t = this.left.val;
    this.left.val = right.val;
    right.val = t;
    // Move left one step to the right.
    // The right pointer moves one step back via backtracking.
    this.left = this.left.next;
  }
};

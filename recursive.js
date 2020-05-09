// recursive solution

// leetcode solution translated to Javascript
// this solution swaps node values, does not manipulate next pointers
const reverseBetween = function(head, m, n) {
  this.left = head;
  this.continue = true;
  recurseAndReverse(head, m, n);
  return head;
};

const recurseAndReverse = function(right, m, n) {
  if (n === 1) return;
  right = right.next;

  if (m > 1) this.left = this.left.next;
  recurseAndReverse(right, m - 1, n - 1);

  // If the pointers cross each other or become equal,
  // there is nothing else to swap
  if (this.left === right || right.next === this.left) this.continue = false;

  // Until the boolean stop is true, swap data between the two pointers
  // When boolean is false, nothing happens and function resolves,
  //    since this.stop = true, function keeps resolving/returning until stack is empty
  if (this.continue) {
    const temp = this.left.val;
    this.left.val = right.val;
    right.val = temp;

    // Move left one step to the right.
    this.left = this.left.next;
    // The right pointer doesn't need to be moved, it is pointing at previous in the previous call
  }
};

// recursive solution
function reverseBetween(head, m, n) {
  if (m === n || head === null) return head;
  if (n === 1) {
    this.con = head.next;
    return head;
  }
  const r = reverseBetween(head.next, m - 1, n - 1);
  if (m <= 1) {
    head.next.next = head;
    head.next = null;
    if (m === 1) {
      head.next = this.con;
    }
    return r;
  }
  if (m === 2) {
    head.next = r;
  }
  return head;
}

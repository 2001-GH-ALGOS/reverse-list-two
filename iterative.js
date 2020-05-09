function reverseBetween(head, m, n) {
  // address edge cases
  if (!head) return null;
  if (m === n) return head;

  // create curr/prev pointers and traverse until we get to starting point m of the sublist
  let curr = head;
  let previous;
  while (m > 1) {
    previous = curr;
    curr = curr.next;
    m--;
    n--;
  }

  // create pointers to (later) re-link our sublist
  const beforeM = previous;
  const newSubTail = curr;

  // reverse sublist from m to n
  let temp;
  while (n) {
    temp = curr.next;
    curr.next = previous;
    previous = curr;
    curr = temp;
    n--;
  }

  // re-link sublist to the main linked list by updating next properties on our pointers
  if (beforeM) beforeM.next = previous;
  else head = previous;
  newSubTail.next = curr;

  // return just the head
  return head;
}

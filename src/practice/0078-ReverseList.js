/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function ReverseList (pHead) {
  if (!pHead.val) return pHead
  const newHead = JSON.parse(JSON.stringify(pHead))
  newHead.next = null
  let p = pHead
  let h = p
  while (p.next) {
    h = p.next
    p.next = newHead.next
    newHead.next = p
    p = h
  }
  p.next = newHead.next
  newHead.next = p
  return newHead.next
}

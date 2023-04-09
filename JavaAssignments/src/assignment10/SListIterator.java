package assignment10;
public class SListIterator<T> {
    private SList.Node<T> curr;
    private SList.Node<T> head;

    SListIterator(SList.Node<T> Node) {
        curr = Node;
        head = Node;
    }

    public boolean hasNext() {
        return curr != null && curr.next != null;
    }

    public SList.Node<T> next() {
        if (!hasNext()) {
            return null;
        }
        curr = curr.next;
        return curr;
    }

    public void insert(T data) {
        if (curr == null) {
            curr = new SList.Node<T>(data, null);
            head = curr;
        } else {
            curr.next = new SList.Node<T>(data, curr.next);
            curr = curr.next;
        }
    }

    public void remove() {
        if (curr == null) {
            return;
        }
        if (curr == head) {
            curr = null;
            head = new SList.Node<T>(null);
        } else {
            SList.Node<T> prev = head;
            while (prev.next != curr) {
                prev = prev.next;
            }
            prev.next = curr.next;
            curr = prev;
        }
    }
}
//TC-O(N)
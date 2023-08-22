package assignment10;

public class SList<T> {
    private Node<T> head = new Node<T>(null);

    public SListIterator<T> iterator() {
        return new SListIterator<T>(head);
    }
    public static class Node<T> {
        T data;
        Node<T> next;

        Node(T data, Node<T> next) {
            this.data = data;
            this.next = next;
        }

        Node(T data) {
            this(data, null);
        }

    }
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for(SListIterator<T> it = iterator(); it.hasNext();) {
            sb.append(it.next().data);
            if(it.hasNext()) {
                sb.append("-->");

            }
        }
        return sb.toString();
    }
    //O(n)
}
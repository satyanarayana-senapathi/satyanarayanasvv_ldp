package assignment10;

public class Main {
    public static void main(String[] args) {
        SList<Integer> list = new SList<Integer>();
        SListIterator<Integer> iterator = list.iterator();

        iterator.insert(10);
        iterator.insert(20);
        iterator.insert(30);

        System.out.println(list.toString());

        iterator.remove();

        System.out.println(list.toString());
        iterator.remove();

        System.out.println(list.toString());
        iterator.remove();

        iterator.insert(50);
        iterator.insert(60);
        System.out.println(list.toString());
    }
}

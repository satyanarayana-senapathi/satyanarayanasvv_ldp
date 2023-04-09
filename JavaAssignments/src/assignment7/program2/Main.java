package assignment7.program2;

public class Main {
    public static void main(String[] args) {
        Cycle cycle1 = new Unicycle();
        Cycle cycle2 = new Bicycle();
        Cycle cycle3 = new Tricycle();

        Cycle[] cycles = {cycle1, cycle2, cycle3};
//        for (Cycle cycle : cycles) {
//            cycle.balance();   // attempt to call balance() method (polymorphism)
//        }
        for (Cycle cycle : cycles) {
            // downcast to call balance() on Unicycle and Bicycle objects
            if (cycle instanceof Unicycle) {
                ((Unicycle) cycle).balance();
            } else if (cycle instanceof Bicycle) {
                ((Bicycle) cycle).balance();
            } else {
                // Tricycle object does not have a balance() method
                System.out.println("This cycle cannot balance.");
            }
        }
    }
}








package dip.corrections;

public class CreditCard implements Card {
    public void transaction(long amount) {
        System.out.println("Transaction done by Credit Card");
    }

}

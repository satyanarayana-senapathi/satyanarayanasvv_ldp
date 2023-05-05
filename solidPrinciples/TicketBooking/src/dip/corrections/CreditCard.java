package dip.corrections;

public class CreditCard implements Card {
    public void doTransaction(long amount) {
        System.out.println("Transaction done by Credit Card");
    }

}

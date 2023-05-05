package dip.corrections;

public class DebitCard implements Card {

    @Override
    public void doTransaction(long amount) {
        System.out.println("Debit Card Transaction");
    }

}

package dip.corrections;

public class DebitCard implements Card {

    @Override
    public void transaction(long amount) {
        System.out.println("Debit Card Transaction");
    }

}

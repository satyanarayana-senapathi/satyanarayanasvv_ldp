package dip.corrections;

public class Transaction {
    private Card card;
    public Transaction(Card card){
        this.card=card;

    }
    public void doPurchase(long amount){
        card.doTransaction(amount);

    }
    public static void main(String[] args){
        DebitCard debitCard=new DebitCard();
        CreditCard creditCard=new CreditCard();
        Card card=new DebitCard();
        Transaction transaction=new Transaction(card);
        transaction.doPurchase(5000);
    }
}


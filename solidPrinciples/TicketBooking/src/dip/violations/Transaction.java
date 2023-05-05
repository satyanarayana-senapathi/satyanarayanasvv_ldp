package dip.violations;


public class Transaction {
    private CreditCard creditCard;
    public Transaction(CreditCard creditCard){
        this.creditCard=creditCard;

    }
    public void doPurchase(long amount){
        creditCard.doTransaction(amount);

    }
    public static void main(String[] args){
        DebitCard debitCard=new DebitCard();
        CreditCard creditCard=new CreditCard();
        Transaction transaction=new Transaction(creditCard);
        transaction.doPurchase(5000);
    }
}

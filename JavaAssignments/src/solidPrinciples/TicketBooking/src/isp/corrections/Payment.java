package isp.corrections;

import dip.corrections.Card;
import dip.corrections.DebitCard;

public class Payment implements PaymentByCard, PaymentByUpi {

    @Override
    public void Card() {
//        transaction via debit card
        Card card = new DebitCard();
        System.out.println("Payment by Card");
    }

    @Override
    public void UpiPayment() {
        System.out.println("Payment by Upi");
    }
}
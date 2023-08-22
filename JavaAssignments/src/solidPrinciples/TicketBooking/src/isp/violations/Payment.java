package isp.violations;

public class Payment implements Payments {

    @Override
    public void Card() {
        System.out.println("Payment by Card");
    }

    @Override
    public void UpiPayment() {
        System.out.println("Payment by Upi");
    }

}

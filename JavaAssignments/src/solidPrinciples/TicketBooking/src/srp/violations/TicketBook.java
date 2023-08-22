package srp.violations;

public class TicketBook {
private int ticketNumber;
    private int ticketPrice;

    public TicketBook(int ticketNumber, int ticketPrice) {
        this.ticketNumber = ticketNumber;
        this.ticketPrice = ticketPrice;
    }

    public int getTicketNumber() {
        return ticketNumber;
    }

    public void setTicketNumber(int ticketNumber) {
        this.ticketNumber = ticketNumber;
    }

    public int getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(int ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public void printTicket() {
        System.out.println("Ticket number: " + ticketNumber);
        System.out.println("Ticket price: " + ticketPrice);
    }



}

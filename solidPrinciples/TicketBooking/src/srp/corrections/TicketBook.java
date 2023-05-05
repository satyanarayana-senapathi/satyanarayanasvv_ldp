package srp.corrections;

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

}

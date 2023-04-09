package srp.corrections;

public class TicketPrinter {
    public void printTicket(TicketBook ticketBook) {
        System.out.println("Ticket number: " + ticketBook.getTicketNumber());
        System.out.println("Ticket price: " + ticketBook.getTicketPrice());
    }
}

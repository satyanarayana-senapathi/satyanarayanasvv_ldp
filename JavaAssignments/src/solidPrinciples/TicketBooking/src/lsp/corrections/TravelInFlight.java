package lsp.corrections;

public class TravelInFlight implements Travel,BookFirstClass{
    public void search(String from, String to){
        //   search for a flight from a to b
    }
    public void book(String from, String to){
        //   book a flight from a to b
    }

    @Override
    public void cancel(String from, String to) {
        //   cancel a flight from a to b
    }

    @Override
    public void bookFirstClass(String from, String to) {
        //   book a first class flight from a to b
    }
}

package lsp.corrections;

public class TravelInTrain implements Travel, BookFirstClass {
    public void search(String from, String to){
        //   search for a train from a to b
    }
    public void book(String from, String to){
        //   book a train from a to b
    }

    @Override
    public void cancel(String from, String to) {
        //   cancel a train from a to b
    }

    @Override
    public void bookFirstClass(String from, String to) {
        //   book a first class train from a to b
    }
}

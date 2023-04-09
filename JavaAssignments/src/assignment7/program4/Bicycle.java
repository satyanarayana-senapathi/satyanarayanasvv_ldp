package assignment7.program4;

public class Bicycle implements  Cycle{
    @Override
    public void ride() {
        System.out.println("Riding a bicycle");
    }

    public void createFactory(){
        System.out.println("creating factory for bicycle");
    }
}

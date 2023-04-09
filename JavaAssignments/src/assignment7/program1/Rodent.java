package assignment7.program1;

abstract class Rodent {
    public Rodent() {
        System.out.println("This is a Rodent");
    }

    public abstract void eat();

    public void move() {
        System.out.println("Rodent is moving");
    }
}

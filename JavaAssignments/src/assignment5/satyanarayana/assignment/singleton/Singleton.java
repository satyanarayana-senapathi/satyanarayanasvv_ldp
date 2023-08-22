package assignment5.satyanarayana.assignment.singleton;

public class Singleton {
    private String s;

    public static Singleton initializeString(String s) {
        //actually non-static functions and variables cannot be able to use in static methods
        //so this is the error which wil stop the line of execution in main
        Singleton obj = new Singleton();
        obj.s = s;
        return obj;
    }

    public void printString() {
        System.out.println("s: " + s);
    }
}


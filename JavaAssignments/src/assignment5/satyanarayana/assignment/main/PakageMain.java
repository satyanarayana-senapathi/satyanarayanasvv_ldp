package assignment5.satyanarayana.assignment.main;

import assignment5.satyanarayana.assignment.singleton.Singleton;
import assignment5.satyanarayana.assignment.data.Data;

public class PakageMain {
    public static void main(String[] args) {
        Data obj1 = new Data();
        obj1.printVariables();
        obj1.printLocalVariables();

        Singleton obj2 = Singleton.initializeString("Hello World");
        obj2.printString();
    }
}

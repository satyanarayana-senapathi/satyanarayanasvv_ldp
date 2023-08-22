package assignment5.satyanarayana.assignment.data;
public class Data {
    int num;
    char bite;

    public void printVariables() {
        System.out.println("num: " + num);
        System.out.println("bite: " + bite);
    }

    public void printLocalVariables() {
        int A;
        char B;
        //printing local data without initialization will cause an compile time error at line of code in main class
        //System.out.println("x = " + x);
        // System.out.println("c = " + c);
    }
}
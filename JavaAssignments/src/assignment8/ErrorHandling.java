package assignment8;

class CustomException1 extends Exception {
    public CustomException1(String message) {
        super(message);
    }
}

class CustomException2 extends Exception {
    public CustomException2(String message) {
        super(message);
    }
}

class CustomException3 extends Exception {
    public CustomException3(String message) {
        super(message);
    }
}

class ExceptionThrower {
    public static void throwAllExceptions() throws CustomException1, CustomException2, CustomException3 {
        int randomNum = (int) (Math.random() * 3) + 1;
        if (randomNum == 1) {
            throw new CustomException1("Exception1");
        } else if (randomNum == 2) {
            throw new CustomException2("Exception2");
        } else if(randomNum == 3){
            throw new CustomException3("Exception3");
        }
        else{
            throw new NullPointerException();
        }
    }
}

public class ErrorHandling {
    public static void main(String[] args) {
        try {
            ExceptionThrower.throwAllExceptions();
        } catch (Exception e) {
            System.out.println("Exception raised: " + e.getMessage());
        } finally {
            System.out.println("Final execution");
        }
    }
}



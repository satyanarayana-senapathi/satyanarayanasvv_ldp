package assignment7.program3;

class MyClass extends BaseClass implements CombinedInterface {
    @Override
    public void method1a() {
        System.out.println("Implementing method1a.");
    }

    @Override
    public void method1b() {
        System.out.println("Implementing method1b.");
    }

    @Override
    public void method2a() {
        System.out.println("Implementing method2a.");
    }

    @Override
    public void method2b() {
        System.out.println("Implementing method2b.");
    }

    @Override
    public void method3a() {
        System.out.println("Implementing method3a.");
    }

    @Override
    public void method3b() {
        System.out.println("Implementing method3b.");
    }

    @Override
    public void method4() {
        System.out.println("Implementing method4.");
    }


    // Define four methods, each taking one of the four interfaces as an argument
    static void methodWithInterface1(Interface1 obj) {
        obj.method1a();
        obj.method1b();
    }

    static void methodWithInterface2(Interface2 obj) {
        obj.method2a();
        obj.method2b();
    }

    static void methodWithInterface3(Interface3 obj) {
        obj.method3a();
        obj.method3b();
    }

    static void methodWithCombinedInterface(CombinedInterface obj) {
        obj.method1a();
        obj.method1b();
        obj.method2a();
        obj.method2b();
        obj.method3a();
        obj.method3b();
        obj.method4();
    }

    public static void main(String[] args) {
        MyClass obj = new MyClass();


        methodWithInterface1(obj);
        methodWithInterface2(obj);
        methodWithInterface3(obj);
        methodWithCombinedInterface(obj);
    }
}
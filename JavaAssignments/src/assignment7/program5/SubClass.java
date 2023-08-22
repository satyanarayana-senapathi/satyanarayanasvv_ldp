package assignment7.program5;

public class SubClass extends OuterClass.InnerClass {
    private int subField;

    public SubClass(OuterClass outer, int innerField, int subField) {
        outer.super(innerField);
        this.subField = subField;
    }

    public int getSubField() {
        return subField;
    }
}

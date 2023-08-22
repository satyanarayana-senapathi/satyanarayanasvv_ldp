package assignment7.program5;

public class SecondOuterClass {
    public class SecondInnerClass extends OuterClass.InnerClass {
        private int secondInnerField;

        public SecondInnerClass(OuterClass outer, int innerField, int secondInnerField) {
            outer.super(innerField);
            this.secondInnerField = secondInnerField;
        }

        public int getSecondInnerField() {
            return secondInnerField;
        }
    }
}

package assignment7.program5;

public class OuterClass {
    private int outerField;

    public OuterClass(int outerField) {
        this.outerField = outerField;
    }

    public int getOuterField() {
        return outerField;
    }

    public class InnerClass {
        private int innerField;

        public InnerClass(int innerField) {
            this.innerField = innerField;
        }

        public int getInnerField() {
            return innerField;
        }
    }
}
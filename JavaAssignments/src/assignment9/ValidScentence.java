package assignment9;

import java.util.regex.Pattern;

public class ValidScentence {
    public static void main(String[] args) {
        String sentence1 = "This is a valid sentence.";
        String sentence2 = "this is not a valid sentence.";
        String sentence3 = "This is also not a valid sentence.";
        String sentence4 = "this is also not a valid sentence";
        String regex = "[A-Z].*\\.$";
        Pattern pattern = Pattern.compile(regex);
        System.out.println(sentence1 + ": " + pattern.matcher(sentence1).matches());
        System.out.println(sentence2 + ": " + pattern.matcher(sentence2).matches());
        System.out.println(sentence3 + ": " + pattern.matcher(sentence3).matches());
        System.out.println(sentence4 + ": " + pattern.matcher(sentence4).matches());
    }
}

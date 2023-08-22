package assignment2;

import java.util.Scanner;
public class Assignment2 {
    public static boolean containsAllLetters(String input) {
        boolean[] letters = new boolean[26];
        for (int i = 0; i < input.length(); i++) {
            char c = Character.toLowerCase(input.charAt(i));
            if (c >= 'a' && c <= 'z') {
                letters[c - 'a'] = true;
            }
        }
        for (boolean b : letters) {
            if (!b) {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args){
        System.out.println("Enter the String");
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        System.out.println(containsAllLetters(s));
    }
}

//Time complexity: O(n), where n is the length of the input string. We need to loop through the string once.

//Space complexity: O(1). The space used is at most 26 characters, which is a constant amount of space.
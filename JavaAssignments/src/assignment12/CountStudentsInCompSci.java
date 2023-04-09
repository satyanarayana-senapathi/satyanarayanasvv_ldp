package assignment12;

import java.util.List;

public class CountStudentsInCompSci {
    public static void count(List<Student> students){
        long maleCount = students.stream()
                .filter(s -> s.getDepartment().equals("Computer Science") && s.getGender().equals("Male"))
                .count();

        long femaleCount = students.stream()
                .filter(s -> s.getDepartment().equals("Computer Science") && s.getGender().equals("Female"))
                .count();

        System.out.println("Male count in Computer Science: " + maleCount);
        System.out.println("Female count in Computer Science: " + femaleCount);

    }
}

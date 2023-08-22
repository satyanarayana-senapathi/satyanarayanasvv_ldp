package assignment12;

import java.util.List;
import java.util.stream.Collectors;

public class MaleStudInCompScienceDept {
    public static void get(List<Student> students){
        List<Student> computerScienceMaleStudents = students.stream()
                .filter(s -> s.getDepartment().equals("Computer Science"))
                .filter(s -> s.getGender().equals("Male"))
                .collect(Collectors.toList());

        System.out.println("Details of all male students in Computer Science department:");
        computerScienceMaleStudents.forEach(System.out::println);
    }
}

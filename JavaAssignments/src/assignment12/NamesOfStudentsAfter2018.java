package assignment12;

import java.util.List;
import java.util.stream.Collectors;

public class NamesOfStudentsAfter2018 {
    public static void get(List<Student> students){
        System.out.println("Students enrolled after 2018:");
        List<String> studAfter2018 = students.stream()
                .filter(s -> s.getYearOfEnrollment() > 2018)
                .map(Student::getName)
                .collect(Collectors.toList());

        for (String s : studAfter2018) {
            System.out.println(s);
        }
    }
}

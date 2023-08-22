package assignment12;

import java.util.List;

public class PrintNameOfAllDepartments {
    public static void print(List<Student> students){
        students.stream()
                .map(Student::getDepartment)
                .distinct()
                .forEach(System.out::println);
    }
}

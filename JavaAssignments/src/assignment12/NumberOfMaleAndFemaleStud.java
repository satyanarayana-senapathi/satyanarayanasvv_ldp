package assignment12;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class NumberOfMaleAndFemaleStud {
    public static void get(List<Student> students){
        Map<String, Long> genderCount = students.stream()
                .collect(Collectors.groupingBy(Student::getGender, Collectors.counting()));

        System.out.println("Number of male and female students:");
        genderCount.forEach((gender, count) -> System.out.println(gender + ": " + count));
    }
}

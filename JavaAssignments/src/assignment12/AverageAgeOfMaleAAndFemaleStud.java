package assignment12;

import java.util.List;
import java.util.Map;
import java.util.OptionalDouble;
import java.util.stream.Collectors;

public class AverageAgeOfMaleAAndFemaleStud {
    public static void get(List<Student> students){
        Map<String, List<Student>> studentsByGender = students.stream()
                .collect(Collectors.groupingBy(Student::getGender));

        OptionalDouble avgMaleAge = studentsByGender.get("Male").stream()
                .mapToInt(Student::getAge)
                .average();

        OptionalDouble avgFemaleAge = studentsByGender.get("Female").stream()
                .mapToInt(Student::getAge)
                .average();

        System.out.println("Average age of male students: " + avgMaleAge);
        System.out.println("Average age of female students: " + avgFemaleAge);
    }
}

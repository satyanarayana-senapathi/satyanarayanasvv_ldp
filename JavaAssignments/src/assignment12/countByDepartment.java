package assignment12;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class countByDepartment {
    public static void countStudents(List<Student> students){
        Map<String, Long> countByDepartment = students.stream()
                .collect(Collectors.groupingBy(Student::getDepartment, Collectors.counting()));

        for (Map.Entry<String, Long> entry : countByDepartment.entrySet()) {
            String department = entry.getKey();
            long count = entry.getValue();
            System.out.println("Department: " + department + ", Count: " + count);
        }

    }
}

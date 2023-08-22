package assignment12;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class AvgPercentageInDepartment {
    public static void avgPercentage(List<Student> students){
        Map<String, Double> avgPercentageByDept = students.stream()
                .collect(Collectors.groupingBy(Student::getDepartment, Collectors.averagingDouble(Student::getPercentage)));

        for (Map.Entry<String, Double> entry : avgPercentageByDept.entrySet()) {
            String department = entry.getKey();
            Double avgPercentage = entry.getValue();
            System.out.println("Department: " + department + " - Average Percentage: " + avgPercentage);
        }

    }
}

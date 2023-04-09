package assignment12;

import java.util.List;

public class getStudentWithHighestPercentage {
    public static Student getStudentWithHighestPercentage(List<Student> studentList) {
        Student highestStudent = null;
        double highestPercentage = 0.0;
        for (Student student : studentList) {
            double percentage = student.getPercentage();
            if (percentage > highestPercentage) {
                highestPercentage = percentage;
                highestStudent = student;
            }
        }
        return highestStudent;
    }

}

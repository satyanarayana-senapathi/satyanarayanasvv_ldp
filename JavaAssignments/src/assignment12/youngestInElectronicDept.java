package assignment12;

import java.util.Comparator;
import java.util.List;

public class youngestInElectronicDept {
    public static Student youngestInElectronicDept(List<Student> students) {
        return students.stream()
                .filter(s -> s.getDepartment().equals("Electronic"))
                .filter(s -> s.getGender().equals("Male"))
                .min(Comparator.comparingInt(s->s.getAge()))
                .orElse(null);
    }
}

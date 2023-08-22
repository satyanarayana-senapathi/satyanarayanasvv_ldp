package assignment4;

import java.util.*;

public class KycForm {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            String[] input = sc.nextLine().split(" ");
            String signup = input[0];
            String current = input[1];
            String[] signupArr = signup.split("-");
            String[] currentArr = current.split("-");
            int year = Integer.parseInt(signupArr[2]);
            int month = Integer.parseInt(signupArr[1]);
            int day = Integer.parseInt(signupArr[0]);
            Calendar cal = Calendar.getInstance();
            cal.set(Calendar.YEAR, year);
            cal.set(Calendar.MONTH, month - 1);
            cal.set(Calendar.DAY_OF_MONTH, day);
            Date anniversaryDate = cal.getTime();
            cal.setTimeInMillis(System.currentTimeMillis());
            cal.set(Calendar.YEAR, Integer.parseInt(currentArr[2]));
            cal.set(Calendar.MONTH, Integer.parseInt(currentArr[1]) - 1);
            cal.set(Calendar.DAY_OF_MONTH, Integer.parseInt(currentArr[0]));
            Date currentDate = cal.getTime();
            if (currentDate.before(anniversaryDate)) {
                System.out.println("No range");
            } else {
                int years = cal.get(Calendar.YEAR) - year;
                cal.setTimeInMillis(anniversaryDate.getTime());
                cal.add(Calendar.YEAR, years);
                cal.add(Calendar.DATE, -30);
                Date anniversaryMinus30 = cal.getTime();
                cal.add(Calendar.DATE, 60);
                Date anniversaryPlus30 = cal.getTime();
                if (currentDate.after(anniversaryPlus30)) {
                    System.out.println(formatDate(anniversaryMinus30) + " " + formatDate(anniversaryPlus30));
                } else {
                    System.out.println(formatDate(anniversaryMinus30) + " " + formatDate(currentDate));
                }
            }
        }
    }

    public static String formatDate(Date date) {
        String day = String.format("%02d", date.getDate());
        String month = String.format("%02d", date.getMonth() + 1);
        String year = String.format("%04d", date.getYear() + 1900);
        return day + "-" + month + "-" + year;
    }
}
//sample
//ip:
// 5
//        16-07-1998 27-06-2017
//        04-02-2016 04-04-2017
//        04-05-2017 04-04-2017
//        04-04-2015 04-04-2016
//        04-04-2015 15-03-2016
//op:
//        16-06-2017 27-06-2017
//        05-01-2017 06-03-2017
//        No range
//        05-03-2016 04-04-2016
//        05-03-2016 15-03-2016
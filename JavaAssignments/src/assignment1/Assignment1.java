package assignment1;

import java.io.File;
import java.util.Scanner;
public class Assignment1 {
    private void fileFinder(){
        // address of files or folder where to search
        File file = new File("C:\\Program Files");
        String inputPath ;
        Scanner sc = new Scanner(System.in);
        while(true){
            int flag =0;
            System.out.println("ENTER THE NAME OF FILE OR FOLDER");
            inputPath =sc.nextLine();
            //list of file is stored in string
            String[] files = file.list();
            //continous check each file or folder

            for (String folder : files){
                //System.out.println(folder);
                //check the name of file present or not and store in boolean str1
                Boolean isAvailable = inputPath.equals(folder);
                // isAvailable is true than print the following
                if (isAvailable){
                    flag = 1;
                    System.out.println("File Found : "+folder);
                    //print the address of the file
                    System.out.println("Path : "+ file.getAbsolutePath());
                }
            }
            if(flag==0){
                System.out.println("File not find : Re-enter the name of the file.");
            }
        }
    }
    public static void main(String[] args){
        Assignment1 obj =new Assignment1();
        obj.fileFinder();
    }
}
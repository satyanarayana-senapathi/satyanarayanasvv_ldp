 import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.*;
public class Test {
    public static void main(String[] args)throws Exception{
        HashMap<Character,Integer> map=new HashMap<>();
        File inputFileName=new File(args[0]);
        BufferedReader fl=new BufferedReader(new FileReader(inputFileName));
        String str="";
        while ((str = fl.readLine()) != null) {//O(n *len) n= nof lines ,len=len of the String
            System.out.println(str);
            for (int i = 0; i < str.length(); i++) {
                Character ch = str.charAt(i);
                if (ch != ' ') {
                    if (map.containsKey(ch)) {
                        map.put(ch, map.get(ch) + 1);
                    } else {
                        map.put(ch, 1);
                    }
                }
            }
        }
        for (Map.Entry<Character,Integer> entry : map.entrySet()) //(O(n)) n=size of hashmap
            System.out.println("Character= " + entry.getKey() +
                    ", Count = " + entry.getValue());
    }
}
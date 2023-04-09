package assignment3;

import java.io.*;
import java.util.Scanner;
import java.net.*;
import java.util.GregorianCalendar;
public class Ping {
    public void pingByIp(String Address)
            throws UnknownHostException, IOException
    {
        long finish = 0;
        long start = new GregorianCalendar().getTimeInMillis();
        InetAddress geek = InetAddress.getByName(Address);
        if (geek.isReachable(5000)) {
            finish = new GregorianCalendar().getTimeInMillis();
            System.out.println("Host is reachable "+"in "+(finish-start)/2+"ms(median)");
        }
        else {
            System.out.println("host is unreachable");
        }
    }
    public static void main(String[] args)throws UnknownHostException, IOException {
        Scanner input = new Scanner(System.in);
        String ipAddress= input.nextLine();
        Ping obj=new Ping();
        obj.pingByIp(ipAddress);
        //127.0.0.1
    }
}

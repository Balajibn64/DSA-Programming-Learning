
import java.util.Scanner;


class LCM {
    // // brute force method
    // static int findLCM(int a, int b) {
    //     int res = Math.max(a, b);
    //     int count = 1;
    //     while (true) {
    //         System.out.println(count++);
    //         if (res % a == 0 && res % b == 0) {
    //             break;
    //         }
    //         res++;
    //     }
    //     return res;
    // }

        // eculid's algorithm method
        static int findLCM(int a , int b){
            return a*b / (findGCD(a ,b));
        } 

        static int findGCD(int a,int b){
            int count = 1;
            while(a!=0 && b!=0){
                System.out.println(count++);
                if(a>b){
                    a = a%b;
                }
                else{
                    b = b%a;
                }
            }
            if(a!=0){
                return a;
            }else{
                return b;
            }
        }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First Number");
        int a = sc.nextInt();
        System.out.println("Enter Second Number");
        int b = sc.nextInt();
        int lcm = findLCM(a, b);
        System.out.println(lcm);
    }
}

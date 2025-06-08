
import java.util.Scanner;

class HcfGcd {

    // static int hcf(int a, int b) {
    //     int min = 0;
    //     if (a > b) {
    //         min = b;
    //     } else {
    //         min = a;
    //     }
    //     for (int i = min; i >= 1; i--) {
    //         if (a % i == 0 && b % i == 0) {
    //             return i;
    //         }
    //     }
    //     return 1;
    // }

    // static int euclidsHCF(int a, int b) {
    //     while (a != b) {
    //         if (a > b) {
    //             a = a - b;
    //         } else {
    //             b = b - a;
    //         }
    //     }
    //     return a;
    // }

        static int gabrielsHCF(int a ,int b) {
            while( a!=0 && b!=0) {
                if(a>b) {
                    a = a%b;
                }else{
                    b = b%a;
                }
            }
            if(a!=0){
                return a;
            }else{
                return b;
            }
            
        }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        // int hcf = hcf(a, b);
        // int hcf = euclidsHCF(a, b);
        int hcf = gabrielsHCF(a, b);
        System.out.println("HCF of " + a + " and " + b + " is: " + hcf);
    }
}

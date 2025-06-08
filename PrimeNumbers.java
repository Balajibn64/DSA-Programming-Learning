import java.util.Scanner;

class PrimeNumbers {

    // Normal method to check if a number is prime
    // Time Complexity: O(n)
    static Boolean isPrime(int n) {
        // A number less than 2 cannot be prime
        if (n < 2) return false;

        // Check divisors from 2 to n/2
        for (int i = 2; i <= n / 2; i++) {
            // If n is divisible by i, it is not prime
            if (n % i == 0) {
                return false;
            }
        }
        // If no divisors are found, n is prime
        return true;
    }

    // Optimized method to check if a number is prime
    // Time Complexity: O(sqrt(n))
    static Boolean checkPrime(int n) {
        // A number less than 2 cannot be prime
        if (n < 2) return false;

        // Check divisors from 2 to sqrt(n)
        for (int i = 2; i * i <= n; i++) { // Fixed typo: i * 1 -> i * i
            // If n is divisible by i, it is not prime
            if (n % i == 0) {
                return false;
            }
        }
        // If no divisors are found, n is prime
        return true;
    }

    // Highly optimized method to check if a number is prime
    // Uses divisors of the form 6k ± 1 for efficiency
    // Time Complexity: O(sqrt(n))
    // This method is more efficient for larger numbers
    static Boolean optimzedIsPrime(int n) {
        // Special case: 1 is not prime
        if (n == 1) {
            return false;
        }

        // Special cases: 2 and 3 are prime numbers
        if (n == 2 || n == 3) {
            return true;
        }

        // If n is divisible by 2 or 3, it is not prime
        if (n % 2 == 0 || n % 3 == 0) {
            return false;
        }

        // Check divisors of the form 6k ± 1
        for (int i = 5; i * i <= n; i = i + 6) {
            // If n is divisible by i or i + 2, it is not prime
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        // If no divisors are found, n is prime
        return true;
    }

    public static void main(String args[]) {
        // Create a Scanner object to read input from the user
        Scanner scan = new Scanner(System.in);

        // Prompt the user to enter a number
        System.out.print("Enter a Number : ");

        // Read the input number
        int n = scan.nextInt();

        // Check if the number is prime using the optimized method
        System.out.println(optimzedIsPrime(n) ? "Prime" : "Not Prime");

        // Close the Scanner to prevent resource leaks
        scan.close();
    }
}


class TrailingZeros {

    // static int countTrailingZeros(int n) {
    //     int count = 0;
    //     int powerOfFive = 5;
    //     while (n>=powerOfFive) {
    //         count += n/powerOfFive;
    //         powerOfFive *= 5;
    //     }
    //     return count;
    // }

    static int countTrailingZeros(int n) {
        int count = 0;
        for (int i = 5; n / i >= 1; i *= 5) {
            count += n / i;
        }
        return count;
    }


    // Function to count trailing zeros in n!
    public static void main(String[] args) {
        int n = 100; // Example input
        System.out.println("Number of trailing zeros in " + n + "! is: " + countTrailingZeros(n));
    }
}
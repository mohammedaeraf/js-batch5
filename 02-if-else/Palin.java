class Palin {

    public static void main(String[] args) {
        int n = 676;

        int nCopy = n;

    int reverse = 0, remainder = 0;

    while (n > 0) {
        remainder = n % 10; // remainder = 4
        reverse = reverse * 10 + remainder; // reverse = 654;
        n = n / 10; // n = 0;
    }

    System.out.println("Reverse = " + reverse);

    if(nCopy == reverse) {
        System.out.println("It is a Palindrome");
    }
    else {
        System.out.println("It is not a Palindrome");
    }
    }
}
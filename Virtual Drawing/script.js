import java.util.Scanner;

public class Calculator {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    
    System.out.print("Enter first number: ");
    double num1 = scan.nextDouble();
    
    System.out.print("Enter second number: ");
    double num2 = scan.nextDouble();
    
    System.out.print("Enter an operator (+, -, *, /): ");
    char operator = scan.next().charAt(0);
    
    double result;
    
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        System.out.println("Error! Invalid operator.");
        return;
    }
    
    System.out.println("The result is: " + result);
  }
}

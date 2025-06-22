public class SingletonPatternTest {

    public static void main(String[] args) {
        System.out.println("--- Testing Singleton Pattern Implementation ---");

        System.out.println("Creating first instance of Logger...");
        Logger logger1 = Logger.getInstance();
        logger1.log("Logger instance 1 has logged this message.");

        System.out.println("\nCreating second instance of Logger...");
        Logger logger2 = Logger.getInstance();
        logger2.log("Logger instance 2 has logged this message.");

        System.out.println("\nCreating third instance of Logger...");
        Logger logger3 = Logger.getInstance();
        logger3.log("Logger instance 3 has logged this message.");

        System.out.println("\n--- Checking Instance Identity ---");
        System.out.println("HashCode of logger1: " + logger1.hashCode());
        System.out.println("HashCode of logger2: " + logger2.hashCode());
        System.out.println("HashCode of logger3: " + logger3.hashCode());

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("\nResult: All logger instances refer to the same object.");
        } else {
            System.out.println("\nResult: Logger instances are different — Singleton failed.");
        }

        System.out.println("\n--- Performing Logging via Different References ---");
        logger1.log("Logging via logger1 reference.");
        logger2.log("Logging via logger2 reference.");

        ServiceA serviceA = new ServiceA();
        serviceA.doSomething();

        ServiceB serviceB = new ServiceB();
        serviceB.doSomethingElse();

        System.out.println("\n--- Singleton Pattern Test Finished ---");
    }
}

class ServiceA {
    private Logger logger = Logger.getInstance();

    public void doSomething() {
        logger.log("ServiceA has started processing.");
    }
}

class ServiceB {
    private Logger logger = Logger.getInstance();

    public void doSomethingElse() {
        logger.log("ServiceB is executing an alternative task.");
    }
}

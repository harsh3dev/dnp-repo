package document.products;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel document...");
    }

    @Override
    public void save() {
        System.out.println("Saving Excel document...");
    }

    @Override
    public void close() {
        System.out.println("Closing Excel document...");
    }

    @Override
    public String getType() {
        return "Excel";
    }
}
// App.java
public class App {
    public static void main(String[] args) {
        Item[] inventory = {
            new Item(101, "Laptop", "Electronics"),
            new Item(102, "Camera", "Electronics"),
            new Item(103, "Shoes", "Footwear"),
            new Item(104, "Watch", "Accessories"),
            new Item(105, "Notebook", "Stationery")
        };

        // Linear Search Test
        System.out.println("🔍 Searching using Linear Search:");
        Item result1 = SearchUtility.findUsingLinearSearch(inventory, "Watch");
        System.out.println(result1 != null ? result1 : "Item not found.");

        // Prepare for Binary Search
        SearchUtility.sortItemsByName(inventory);

        // Binary Search Test
        System.out.println("\n📈 Searching using Binary Search (Sorted):");
        Item result2 = SearchUtility.findUsingBinarySearch(inventory, "Watch");
        System.out.println(result2 != null ? result2 : "Item not found.");
    }
}

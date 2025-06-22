// SearchUtility.java
import java.util.Arrays;
import java.util.Comparator;

public class SearchUtility {

    // Linear Search: Traverse the list to find a matching item
    public static Item findUsingLinearSearch(Item[] items, String targetName) {
        for (Item item : items) {
            if (item.getName().equalsIgnoreCase(targetName)) {
                return item;
            }
        }
        return null;
    }

    // Binary Search: Only works on a sorted list
    public static Item findUsingBinarySearch(Item[] items, String targetName) {
        int start = 0, end = items.length - 1;

        while (start <= end) {
            int middle = (start + end) / 2;
            int comparison = items[middle].getName().compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return items[middle];
            } else if (comparison < 0) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }

        return null;
    }

    // Sort items alphabetically by name (for binary search)
    public static void sortItemsByName(Item[] items) {
        Arrays.sort(items, Comparator.comparing(item -> item.getName().toLowerCase()));
    }
}

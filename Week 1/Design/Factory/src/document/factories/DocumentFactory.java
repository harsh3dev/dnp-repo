package document.factories;

import javax.swing.text.Document;

public abstract class DocumentFactory {

    public abstract Document createDocument();

    public void manageDocument() {
        Document doc = createDocument();
        System.out.println("--- Managing new " + doc.getType() + " document ---");
        doc.open();
        doc.save();
        doc.close();
        System.out.println("--- Finished managing " + doc.getType() + " document ---\n");
    }
}
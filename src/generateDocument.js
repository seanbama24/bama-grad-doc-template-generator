import { saveAs } from "file-saver"
import { Document, Packer, Paragraph, TextRun } from "docx";

export default function generateDocument() {
    console.log("we da best")
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        children: [
                            new TextRun("Hello World"),
                            new TextRun({
                                text: "Foo Bar",
                                bold: true,
                            }),
                            new TextRun({
                                text: "\tGithub is the best",
                                bold: true,
                            }),
                        ],
                    }),
                ],
            },
        ],
    });

    saveDocumentAsFile(doc, "example_filename.docx");
}

function saveDocumentAsFile(doc, filename) {
    const mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    Packer.toBlob(doc).then(blob => {
        const docblob = blob.slice(0, blob.size, mimeType);
        saveAs(docblob, filename);
    });
}
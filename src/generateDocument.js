import { saveAs } from "file-saver"
import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } from "docx";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function generateDocument() {
    const doc = new Document({
        sections: [
            {
                properties: {
                },
                children: [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "[INSERT TITLE HERE, INVERTED PYRAMID FORM,",
                                break: 4,
                                size: 24
                            }),
                            new TextRun({
                                text: "DOUBLE-SPACING IN BETWEEN LINES]",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "by",
                                break: 4,
                                size: 24
                            }),
                            new TextRun({
                                text: "[AUTHOR NAME, FIRST M. LAST, OMIT TITLES AND DEGREES]",
                                break: 4,
                                size: 24
                            }),
                            new TextRun({
                                text: "[NAME OF COMMITTEE CHAIR, FIRST M. LAST, WITH TITLE]",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "[NAME OF CO-CHAIR (IF APPOINTED), FIRST M. LAST, WITH TITLE]",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "[OTHER COMMITTEE MEMBERS, FIRST M. LAST]",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "(OMIT TITLES AND DEGREES)",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "A DISSERTATION (OR THESIS)",
                                break: 4,
                                size: 24
                            }),
                            new TextRun({
                                text: "Submitted in partial fulfillment of the requirements",
                                break: 4,
                                size: 24
                            }),
                            new TextRun({
                                text: "for the degree of [Doctor of Philosophy, Doctor of Education, Master of Arts, Master of Science]",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "in the Department of [official Department Name]",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "in the Graduate School of",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "The University of Alabama",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "TUSCALOOSA, ALABAMA",
                                break: 4,
                                size: 24
                            }),
                            new TextRun({
                                text: "[YEAR OF PUBLICATION]",
                                break: 4,
                                size: 24
                            }),
                        ],
                        alignment: AlignmentType.CENTER,
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
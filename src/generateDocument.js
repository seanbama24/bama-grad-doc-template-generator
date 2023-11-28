import { saveAs } from "file-saver"
import { Document, Packer, Paragraph, TextRun, AlignmentType, Footer, PageNumber, NumberFormat, VerticalAlign, HeadingLevel, TableOfContents, StyleLevel, UnderlineType } from "docx";

export default function generateDocument(form) {
    let contentParagraphs = [
        // j. Chapter 1, first page. Arabic numeral page number – restarts with 1 always.
        // k. Subsequent pages. Arabic numeral page number next in sequence.
        // l. References. Arabic numeral page number next in sequence.
        // m. Appendices. Arabic numeral page number next in sequence.

        //INTRODUCTION
        new Paragraph({
            pageBreakBefore: true,
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
            spacing: {
                line: 240,
                after: 240
            },
            children: [
                new TextRun({
                    text: "INTRODUCTION",
                    color: "#000000",
                    size: 24,
                    break: 5
                }),
            ]
        }),
        new Paragraph({
            spacing: {
                line: 480
            },
            children: [
                new TextRun({
                    text: "Write your introduction here",
                    size: 24
                }),
            ]
        }),
    ]

    //Add sample chapter headings to content
    if(form.includesChapterHeadings) {
        form.chapterHeadings.forEach((heading) => {

            contentParagraphs.push(
                new Paragraph({
                    pageBreakBefore: true,
                    alignment: AlignmentType.CENTER,
                    heading: HeadingLevel.HEADING_1,
                    spacing: {
                        line: 240,
                        after: 240
                    },
                    children: [
                        new TextRun({
                            text: heading.toUpperCase(),
                            color: "#000000",
                            size: 24,
                            break: 5
                        }),
                    ]
                }),
            )

            contentParagraphs.push(
                new Paragraph({
                    spacing: {
                        line: 480
                    },
                    children: [
                        new TextRun({
                            text: "Write your content here",
                            size: 24
                        }),
                    ]
                }),
            )
        })
    }

    //Add references and appendicies to content
    contentParagraphs.push(
        new Paragraph({
            pageBreakBefore: true,
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
            spacing: {
                line: 240,
                after: 240
            },
            children: [
                new TextRun({
                    text: "REFERENCES",
                    color: "#000000",
                    size: 24,
                    break: 5
                }),
            ]
        }),
    )

    contentParagraphs.push(
        new Paragraph({
            spacing: {
                line: 240,
                after: 240
            },
            indent: {
                start: 720,
                hanging: 720
            },
            children: [
                new TextRun({
                    text: "Enter each reference here, following protocol for disclosure set out in your style guide. This format set up for alpha order by last name, initials, year of publication, title of publication, city of publication. Hanging indent layout.",
                    size: 24
                }),
            ]
        }),
    )

    contentParagraphs.push(
        new Paragraph({
            pageBreakBefore: true,
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
            spacing: {
                line: 240,
                after: 240
            },
            children: [
                new TextRun({
                    text: "APPENDIX I",
                    color: "#000000",
                    size: 24,
                    break: 5
                }),
            ]
        }),
    )

    contentParagraphs.push(
        new Paragraph({
            spacing: {
                line: 480
            },
            children: [
                new TextRun({
                    text: "\tInsert first appendix here. Format with APPENDIX, then number, then title. Start new page for each appendix. Include IRB approval letter here, with blank or redacted signatures.",
                    size: 24
                }),
            ]
        }),
    )

    contentParagraphs.push(
        new Paragraph({
            pageBreakBefore: true,
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
            spacing: {
                line: 240,
                after: 240
            },
            children: [
                new TextRun({
                    text: "APPENDIX II",
                    color: "#000000",
                    size: 24,
                    break: 5
                }),
            ]
        }),
    )

    contentParagraphs.push(
        new Paragraph({
            spacing: {
                line: 480
            },
            children: [
                new TextRun({
                    text: "Insert additional appendices here. Insert page break to add additional pages.",
                    size: 24
                }),
            ]
        }),
    )


    const doc = new Document({
        features: {
            updateFields: true,
        },
        styles: {
            default: {
                document: {
                    run: {
                        size: "12pt",
                    },
                    paragraph: {
                        spacing: {
                            line: 480
                        },
                    }
                },
            },
            // default: {
            //     heading1: {
            //         run: {
            //             font: "Calibri",
            //             size: 52,
            //             bold: true,
            //             color: "000000",
            //             underline: {
            //                 type: UnderlineType.SINGLE,
            //                 color: "000000",
            //             },
            //         },
            //         paragraph: {
            //             alignment: AlignmentType.CENTER,
            //             spacing: { line: 340 },
            //         },
            //     },
            // },
        },
        sections: [
            //Title page
            {
                properties: {
                    page: {
                        margin: {
                            top: 2878
                        },
                    },
                },
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: form.titleLine1,
                                size: 24
                            }),
                            new TextRun({
                                text: "DOUBLE-SPACING IN BETWEEN LINES]",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "DOUBLE-SPACING IN BETWEEN LINES]",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "by",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: "[AUTHOR NAME, FIRST M. LAST, OMIT TITLES AND DEGREES]",
                                break: 1,
                                size: 24
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: {
                            line: 240
                        },
                        children: [
                                new TextRun({
                                text: "[NAME OF COMMITTEE CHAIR, FIRST M. LAST, WITH TITLE]",
                                size: 24
                            }),
                            new TextRun({
                                text: "[NAME OF CO-CHAIR (IF APPOINTED), FIRST M. LAST, WITH TITLE]",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "[OTHER COMMITTEE MEMBERS, FIRST M. LAST]",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "(OMIT TITLES AND DEGREES)",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "A DISSERTATION (OR THESIS)",
                                break: 3,
                                size: 24
                            }),
                            new TextRun({
                                text: "Submitted in partial fulfillment of the requirements",
                                break: 4,
                                size: 24
                            }),
                            new TextRun({
                                text: "for the degree of [Doctor of Philosophy]",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "in the Department of [official Department Name]",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "in the Graduate School of",
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "The University of Alabama",
                                break: 1,
                                size: 24
                            }),
                        ]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: "TUSCALOOSA, ALABAMA",
                                break: 3,
                                size: 24
                            }),
                            new TextRun({
                                text: "[YEAR OF PUBLICATION]",
                                break: 1,
                                size: 24
                            }),
                        ],
                    }),
                ],
            },
            

            //Copyright page
            {
                properties: {
                    verticalAlign: VerticalAlign.BOTTOM
                },
                children: [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Copyright Beverly Dianne Eads 2022",
                                size: 24
                            }),
                            new TextRun({
                                text: "ALL RIGHTS RESERVED",
                                size: 24
                            }),
                        ],
                        alignment: AlignmentType.CENTER
                    }),
                ],
            },


            //Preliminary Pages (Abstract + optional sections)
            {
                //Page number setup
                properties: {
                    page: {
                        pageNumbers: {
                            start: 2,
                            formatType: NumberFormat.LOWER_ROMAN,
                        },
                    },
                },

                //Footer text
                footers: {
                    default: new Footer({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        children: [PageNumber.CURRENT],
                                        size: 24
                                    }),
                                ],
                            }),
                        ],
                    }),
                },

                children: [
                    // c. Abstract. Always page ii.
                    // d. Dedication (optional). Page iii if present.
                    // e. List of Abbreviations. Roman numeral page number next in sequence.
                    // f. Acknowledgments. Roman numeral page number next in sequence.
                    // g. Contents. Roman numeral page number next in sequence.
                    // h. List of Tables. Roman numeral page number next in sequence.
                    // i. List of Figures. Roman numeral page number next in sequence.

                    //C - Abstract
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "ABSTRACT",
                                color: "#000000",
                                size: 24,
                                break: 5
                            }),
                        ]
                    }),
                    new Paragraph({
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: form.abstractText,
                                size: 24
                            }),
                        ]
                    }),

                    //D - Dedication
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "DEDICATION",
                                color: "#000000",
                                size: 24,
                                break: 5
                            }),
                        ]
                    }),
                    new Paragraph({
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: "Write your dedication here",
                                size: 24
                            }),
                        ]
                    }),

                    //E - List of Abbreviations
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "LIST OF ABBREVIATIONS AND SYMBOLS",
                                color: "#000000",
                                size: 24,
                                break: 5
                            }),
                        ]
                    }),
                    new Paragraph({
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: "TODO - List of abbreviations",
                                size: 24
                            }),
                        ]
                    }),

                    //F Acknowledgements
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "ACKNOWLEDGEMENTS",
                                color: "#000000",
                                size: 24,
                                break: 5
                            }),
                        ]
                    }),
                    new Paragraph({
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: "Write your acknowledgements here",
                                size: 24
                            }),
                        ]
                    }),

                    //G Contents
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "CONTENTS",
                                break: 5
                            }),
                        ]
                    }),
                    new TableOfContents("Contents", {
                        hyperlink: true,
                        headingStyleRange: "1-5",
                        stylesWithLevels: [new StyleLevel("MySpectacularStyle", 1)],
                    }),

                    //H - List of tables
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "LIST OF TABLES",
                                color: "#000000",
                                size: 24,
                                break: 5
                            }),
                        ]
                    }),
                    new Paragraph({
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: "TODO - list of tables",
                                size: 24
                            }),
                        ]
                    }),

                    //I list of figures
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "LIST OF FIGURES",
                                color: "#000000",
                                size: 24,
                                break: 5
                            }),
                        ]
                    }),
                    new Paragraph({
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: "TODO - list of figures",
                                size: 24
                            }),
                        ]
                    }),

                    //J list of illustrations
                    new Paragraph({
                        pageBreakBefore: true,
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                        spacing: {
                            line: 240,
                            after: 240
                        },
                        children: [
                            new TextRun({
                                text: "LIST OF ILLUSTRATIONS",
                                color: "#000000",
                                size: 24,
                                break: 5
                            }),
                        ]
                    }),
                    new Paragraph({
                        spacing: {
                            line: 480
                        },
                        children: [
                            new TextRun({
                                text: "TODO - list of illustrations",
                                size: 24
                            }),
                        ]
                    }),
                ],
            },



            //Content pages + references and appendices
            {
                //Page number setup
                properties: {
                    page: {
                        pageNumbers: {
                            start: 1,
                            formatType: NumberFormat.DECIMAL,
                        },
                    },
                },

                //Footer text
                footers: {
                    default: new Footer({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        children: [PageNumber.CURRENT]
                                    }),
                                ],
                            }),
                        ],
                    }),
                },

                children: contentParagraphs,
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
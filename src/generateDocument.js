import { saveAs } from "file-saver"
import { degreeList } from "./fieldValues";
import { Document, Packer, Paragraph, TextRun, AlignmentType, Footer, PageNumber, NumberFormat, VerticalAlign, HeadingLevel, TableOfContents, StyleLevel, ExternalHyperlink } from "docx";

function buildCommittee(form) {
    console.log(form)
    let result = [
            new TextRun({
            text: form.committeeChair.toUpperCase() + ", COMMITTEE CHAIR",
            size: 24
        }),
    ]

    if(form.includesCoChair) {
        result.push(
            new TextRun({
                text: form.committeeCoChair.toUpperCase() + ", CO-CHAIR",
                break: 1,
                size: 24
            })
        )
    }

    form.committeeMembers.forEach((member) => {
        result.push(
            new TextRun({
                text: member.toUpperCase(),
                break: 1,
                size: 24
            }),
        )
    })

    let dept
    degreeList.forEach((entry) => {
        if(entry.value === form.degree) {
            dept = entry.College
        }
    })
 
    result.push(
        new TextRun({
            text: "A " + form.docType.toUpperCase(),
            break: 4,
            size: 24
        }),
        new TextRun({
            text: "Submitted in partial fulfillment of the requirements",
            break: 4,
            size: 24
        }),
        new TextRun({
            text: "for the degree of " + form.degree,
            break: 1,
            size: 24
        }),
        new TextRun({
            text: "in the Department of " + dept,
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
    )

    return result;
}

function buildPreliminaries(form) {
    let result = [
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
            indent: {
                firstLine: 720,
            },
            children: [
                new TextRun({
                    text: form.abstractText,
                    size: 24
                }),
            ]
        }),
    ]

    if(form.includeDedication) {
        result.push(
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
                indent: {
                    firstLine: 720,
                },
                children: [
                    new TextRun({
                        text: "Write your dedication here",
                        size: 24
                    }),
                ]
            }),
        )
    }

    if(form.includeAbbreviationsAndSymbols) {
        result.push(
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
        )
    }

    result.push(
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
            indent: {
                firstLine: 720,
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
    )

    if(form.includeTables) {
        result.push(
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
                        text: "You will have to manually insert a table of figures here, ",
                        size: 24
                    }),
                    new ExternalHyperlink({
                        children: [
                            new TextRun({
                                text: "click here to get started.",
                                style: "Hyperlink",
                            }),
                        ],
                        link: "https://support.microsoft.com/en-au/office/insert-a-table-of-figures-c5ea59c5-487c-4fb2-bd48-e34dd57f0ec1",
                    }),
                ]
            }),
        )
    }

    if(form.includeFigures) {
        result.push(
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
                        text: "You will have to manually insert a table of figures here, ",
                        size: 24
                    }),
                    new ExternalHyperlink({
                        children: [
                            new TextRun({
                                text: "click here to get started.",
                                style: "Hyperlink",
                            }),
                        ],
                        link: "https://support.microsoft.com/en-au/office/insert-a-table-of-figures-c5ea59c5-487c-4fb2-bd48-e34dd57f0ec1",
                    }),
                ]
            }),
        )
    }

    if(form.includeIllustrations) {
        result.push(
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
                        text: "You will have to manually insert a table of figures here, ",
                        size: 24
                    }),
                    new ExternalHyperlink({
                        children: [
                            new TextRun({
                                text: "click here to get started.",
                                style: "Hyperlink",
                            }),
                        ],
                        link: "https://support.microsoft.com/en-au/office/insert-a-table-of-figures-c5ea59c5-487c-4fb2-bd48-e34dd57f0ec1",
                    }),
                ]
            }),
        )
    }

    return result;
}

function buildContent(form) {
    let contentParagraphs = [
        // j. Chapter 1, first page. Arabic numeral page number – restarts with 1 always.
        // k. Subsequent pages. Arabic numeral page number next in sequence.
        // l. References. Arabic numeral page number next in sequence.
        // m. Appendices. Arabic numeral page number next in sequence.
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
                    indent: {
                        firstLine: 720,
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
            indent: {
                firstLine: 720,
            },
            children: [
                new TextRun({
                    text: "Insert first appendix here. Format with APPENDIX, then number, then title. Start new page for each appendix. Include IRB approval letter here, with blank or redacted signatures.",
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
            indent: {
                firstLine: 720,
            },
            children: [
                new TextRun({
                    text: "Insert additional appendices here. Insert page break to add additional pages.",
                    size: 24
                }),
            ]
        }),
    )

    return contentParagraphs
}

export default function generateDocument(form) {
    
    const doc = new Document({
        features: {
            updateFields: true,
        },
        styles: {
            default: {
                document: {
                    run: {
                        size: "12pt",
                        font: form.font
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
                                text: form.titleLine1.toUpperCase(),
                                size: 24
                            }),
                            new TextRun({
                                text: form.titleLine2.toUpperCase(),
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: form.titleLine3.toUpperCase(),
                                break: 1,
                                size: 24
                            }),
                            new TextRun({
                                text: "by",
                                break: 2,
                                size: 24
                            }),
                            new TextRun({
                                text: form.name.toUpperCase(),
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
                        children: buildCommittee(form)
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
                                text: (form.gradYear.getYear() + 1900).toString(),
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
                        spacing: {
                            line: 240
                        },
                        children: [
                            new TextRun({
                                text: "Copyright " + form.name + " " + (form.gradYear.getYear() + 1900).toString(),
                                size: 24
                            }),
                            new TextRun({
                                text: "ALL RIGHTS RESERVED",
                                break: 1,
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

                children: buildPreliminaries(form)
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

                children: buildContent(form),
            },
        ],
    });

    saveDocumentAsFile(doc, form.docType + ".docx");
}

function saveDocumentAsFile(doc, filename) {
    const mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    Packer.toBlob(doc).then(blob => {
        const docblob = blob.slice(0, blob.size, mimeType);
        saveAs(docblob, filename);
    });
}
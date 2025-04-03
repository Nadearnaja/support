function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById("1MQLJTxnHWUCQrsjbSH3UTY2BnGGkC0zXiZXJVFNZSNE").getSheetByName("ชีต1");
    const data = JSON.parse(e.postData.contents);

    const docId = generateDocId(sheet);
    sheet.appendRow([
      data.date,
      data.department,
      data.description,
      data.method,
      data.amount,
      docId
    ]);

    return ContentService.createTextOutput(docId)
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader("Access-Control-Allow-Origin", "*");

  } catch (err) {
    return ContentService.createTextOutput("ERROR: " + err)
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}

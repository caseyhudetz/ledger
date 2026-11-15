/**
 * East Lakeview Ledger subscription endpoint.
 * Bind this to the "East Lakeview Ledger Subscribers" Google Sheet:
 * Extensions > Apps Script.
 *
 * Deploy > New deployment > Web app
 * Execute as: Me
 * Who has access: Anyone
 */
function doPost(e) {
  const params = (e && e.parameter) || {};
  const email = String(params.email || "").trim().toLowerCase();
  const website = String(params.website || "");

  // Honeypot and basic validation
  if (website || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return ContentService.createTextOutput("Invalid subscription");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Subscribers");
    if (!sheet) throw new Error("Subscribers tab is missing");

    const last = sheet.getLastRow();
    const existing = last > 1
      ? sheet.getRange(2, 2, last - 1, 1).getDisplayValues()
          .some(row => row[0].toLowerCase() === email)
      : false;

    if (!existing) {
      // Prefix protects the spreadsheet from interpreting user input as a formula.
      sheet.appendRow([new Date(), "'" + email]);
    }

    return ContentService.createTextOutput("OK");
  } finally {
    lock.releaseLock();
  }
}

/**
 * East Lakeview Ledger newsletter subscription endpoint.
 * Bound to "East Lakeview Ledger Subscribers" (Subscribers tab).
 * This runs as the script owner, not the public subscriber.
 *
 * Required explicit OAuth scopes (see newsletter/appsscript.json):
 * - spreadsheets.currentonly
 * - script.send_mail
 */
const LEDGER_NOTIFICATION_EMAIL = "eastlakeviewledger@gmail.com";
const LEDGER_SHEET_URL = "https://docs.google.com/spreadsheets/d/1Zgl3da7AiGiixiabew3vOmHJBgZVH-eCbsosM2396qU/edit";

function doPost(e) {
  const params = (e && e.parameter) || {};
  const email = String(params.email || "").trim().toLowerCase();
  const website = String(params.website || "");

  // Honeypot, valid email shape and length checks.
  if (website || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return ContentService.createTextOutput("Invalid subscription");
  }

  let isNew = false;
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Subscribers");
    if (!sheet) throw new Error("Subscribers tab is missing");

    const lastRow = sheet.getLastRow();
    const exists = lastRow > 1
      ? sheet.getRange(2, 2, lastRow - 1, 1).getDisplayValues()
          .some(row => row[0].trim().replace(/^\x27/, "").toLowerCase() === email)
      : false;

    if (!exists) {
      // Leading apostrophe stops spreadsheet formulas in visitor input.
      sheet.appendRow([new Date(), "'" + email]);
      isNew = true;
    }
  } finally {
    lock.releaseLock();
  }

  // Only notify when a genuinely new subscriber was saved.
  // A mail quota/authorization error must not roll back the signup.
  if (isNew) {
    try {
      MailApp.sendEmail({
        to: LEDGER_NOTIFICATION_EMAIL,
        subject: "New East Lakeview Ledger signup",
        body:
          "A new reader signed up for the Ledger.\n\n" +
          "Email: " + email + "\n\n" +
          "Subscriber list: " + LEDGER_SHEET_URL
      });
    } catch (err) {
      console.error("Subscriber saved, but notification email failed: " + err);
    }
  }

  return ContentService.createTextOutput("OK");
}

/** Run once from the Apps Script editor to authorize the narrow scopes. */
function authorizeNewsletterNotifications() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Subscribers");
  if (!sheet) throw new Error("Subscribers tab is missing");
  MailApp.getRemainingDailyQuota();
  console.log("Newsletter notification permissions are available.");
}

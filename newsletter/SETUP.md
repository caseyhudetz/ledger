# Ledger newsletter notifications

The public `site/` form submits to a Google Apps Script web app. The web app must be updated **in Google Apps Script**, not only in this GitHub repository.

1. Open the [East Lakeview Ledger Subscribers Sheet](https://docs.google.com/spreadsheets/d/1Zgl3da7AiGiixiabew3vOmHJBgZVH-eCbsosM2396qU/edit).
2. Open **Extensions → Apps Script**.
3. Replace `Code.gs` with the contents of `newsletter/Code.gs`.
4. In **Project settings**, enable **Show appsscript.json manifest file in editor** if necessary. Replace `appsscript.json` with `newsletter/appsscript.json` from GitHub.
5. In the function dropdown choose `authorizeNewsletterNotifications`, press **Run** and approve permission to access only the bound spreadsheet and send email. No full Gmail read permission is needed.
6. Choose **Deploy → Manage deployments → Edit** on the *existing* web app, select **New version** and deploy. Keep **Execute as Me** and **Who has access: Anyone**. Editing the existing deployment preserves the URL already used by the site.
7. Submit one unique test address via the live site and confirm it appears in the Subscribers Sheet and sends one alert to `eastlakeviewledger@gmail.com`. Repeat the same email and confirm no second alert is sent.

Only **new** addresses trigger an alert. Failed notifications are logged without undoing the saved subscription. The public endpoint can attract spam and Google imposes mail quotas, so monitor usage.

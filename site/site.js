const email = "eastlakeviewledger@gmail.com";
let messageTimer;

async function copyEmail(event) {
  const copyMessage = event.currentTarget.parentElement.querySelector(".copy-message");

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  window.clearTimeout(messageTimer);
  document.querySelectorAll(".copy-message").forEach((message) => {
    message.classList.remove("is-visible");
    message.textContent = "";
  });
  copyMessage.textContent = "Email copied to clipboard";
  copyMessage.classList.add("is-visible");
  messageTimer = window.setTimeout(() => {
    copyMessage.classList.remove("is-visible");
    copyMessage.textContent = "";
  }, 1800);
}

document.querySelectorAll(".copy-email").forEach((button) => {
  button.addEventListener("click", copyEmail);
});


// Submit directly to the Google Apps Script endpoint through an invisible form target.
// Google Apps Script does not provide a readable cross-origin response, so avoid
// falsely asserting that an email was successfully stored.
document.querySelectorAll(".subscribe-form").forEach((form) => {
  const frame = form.parentElement.querySelector(".signup-frame");
  const status = form.parentElement.querySelector(".signup-status");
  const button = form.querySelector('button[type="submit"]');
  let submitted = false;

  form.addEventListener("submit", (event) => {
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }
    submitted = true;
    button.disabled = true;
    status.textContent = "Submitting…";
  });

  frame.addEventListener("load", () => {
    if (!submitted) return;
    submitted = false;
    button.disabled = false;
    status.textContent = "Submission sent. Thank you!";
    form.reset();
  });
});

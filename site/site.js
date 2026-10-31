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

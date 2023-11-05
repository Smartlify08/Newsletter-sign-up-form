// Select init and success pages

const init_page = document.querySelector(".card#init");
const success_page = document.querySelector(".card#success-page");
const subscribe_btn = document.querySelector("#subscribe-btn");
const dismiss_btn = document.querySelector("#dismiss-btn");
const form = document.querySelector(".card-form");
const email_input = document.querySelector("#email");
const err_message = document.createElement("p");
console.log(form.children[0].children[0]);

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

subscribe_btn.addEventListener("click", (e) => {
  e.preventDefault();

  err_message.textContent = "Valid email is required";
  err_message.className = "text-danger  err-message";

  if (regex.test(email_input.value)) {
    init_page.style.display = "none";
    success_page.style.display = "flex";
    setTimeout(() => {
      success_page.style.opacity = "1";
    }, 300);
    init_page.style.opacity = "0";
  } else {
    console.log("invalid");
    form.append(err_message);
    email_input.classList.add("text-danger");
    email_input.style.border = "1px solid #ff5476";
    email_input.style.background = "#FFE8E6";
    return;
  }
});

dismiss_btn.addEventListener("click", (e) => {
  e.preventDefault();
  success_page.style.display = "none";
  init_page.style.display = "flex";
  setTimeout(() => {
    init_page.style.opacity = "1";
  }, 100);
  email_input.value = "";
  form.removeChild(err_message);
  email_input.classList.remove("text-danger");
  email_input.style.border = "1px solid var(--color-grey)";
  email_input.style.background = "#fff";

  console.log("valid");
});

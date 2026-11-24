const services = [
  {
    title: "পরামর্শ ও তথ্য সেবা",
    desc: "প্রয়োজনীয় তথ্য ও দিকনির্দেশনা সহজেই পেয়ে যান।"
  },
  {
    title: "সময়সূচি ও বুকিং",
    desc: "আগে থেকেই নির্ধারিত সময় অনুযায়ী সেবা গ্রহণের সুযোগ।"
  },
  {
    title: "সহায়তা ও অনুসরণ",
    desc: "সেবা পরবর্তী যেকোনো প্রয়োজনে সরাসরি যোগাযোগের সুবিধা।"
  }
];

const serviceList = document.getElementById("service-list");
services.forEach((item) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
  serviceList.appendChild(div);
});

const form = document.getElementById("inquiry-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  statusEl.textContent = `ধন্যবাদ ${name}, আপনার বার্তাটি সংরক্ষিত হয়েছে।`;
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

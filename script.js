// Default clock in English
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date();
  const opts = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  };
  el.textContent = now.toLocaleString('en-GB', opts);
}
setInterval(updateClock, 1000);
updateClock();

// Booking form submission
function handleSubmit() {
  const start = new Date(document.getElementById("from").value);
  const end = new Date(document.getElementById("to").value);
  const now = new Date();
  
  if (end <= start) {
    alert("'Booking To' must be after 'Booking From'.");
    return false;
  }
  
  const diff = (start - now) / (1000*60*60);
  if (diff < 3) {
    alert("⚠️ Book at least 3 hours before the requested time.");
    return false;
  }
  
  setTimeout(() => {
    document.getElementById("bookingForm").reset();
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 5000);
  }, 800);
  
  return true;
}

// Language translations
const translations = {
  en: {
    pageTitle: "Unimap Student Lounge Booking - IRC",
    instructionsTitle: "Important Instructions:",
    instruction1: "1. Booking must be made at least 3 hours before the requested time.",
    instruction2: "2️. To collect the keys, please contact:",
    thRole: "Role",
    thName: "Name",
    thRoom: "Room",
    thContact: "Contact",
    formTitle: "Booking Form",
    labelName: "Name:",
    labelMatric: "Matric Number:",
    labelPhone: "Phone Number:",
    labelFrom: "Booking From (Day & Time):",
    labelTo: "Booking To (Day & Time):",
    submitButton: "Submit Booking",
    successMessage: "✅ Your booking has been submitted successfully!"
  },
  ms: {
    pageTitle: "Tempahan Ruang Santai Pelajar UniMAP - IRC",
    instructionsTitle: "Arahan Penting:",
    instruction1: "1. Tempahan mesti dibuat sekurang-kurangnya 3 jam sebelum masa yang dikehendaki.",
    instruction2: "2️. Untuk mengambil kunci, sila hubungi:",
    thRole: "Peranan",
    thName: "Nama",
    thRoom: "Bilik",
    thContact: "Hubungan",
    formTitle: "Borang Tempahan",
    labelName: "Nama:",
    labelMatric: "Nombor Matrik:",
    labelPhone: "Nombor Telefon:",
    labelFrom: "Tempahan Dari (Hari & Masa):",
    labelTo: "Tempahan Hingga (Hari & Masa):",
    submitButton: "Hantar Tempahan",
    successMessage: "✅ Tempahan anda berjaya dihantar!"
  }
};

// Current language
let currentLang = 'en';

// Toggle language
function toggleLanguage() {
  currentLang = document.getElementById('langToggle').checked ? 'ms' : 'en';
  setLanguage(currentLang);
}

// Set language function
function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById("page-title").textContent = t.pageTitle;
  document.getElementById("instructions-title").textContent = t.instructionsTitle;
  document.getElementById("instruction-1").textContent = t.instruction1;
  document.getElementById("instruction-2").textContent = t.instruction2;
  document.getElementById("th-role").textContent = t.thRole;
  document.getElementById("th-name").textContent = t.thName;
  document.getElementById("th-room").textContent = t.thRoom;
  document.getElementById("th-contact").textContent = t.thContact;
  document.getElementById("form-title").textContent = t.formTitle;
  document.getElementById("label-name").textContent = t.labelName;
  document.getElementById("label-matric").textContent = t.labelMatric;
  document.getElementById("label-phone").textContent = t.labelPhone;
  document.getElementById("label-from").textContent = t.labelFrom;
  document.getElementById("label-to").textContent = t.labelTo;
  document.getElementById("submit-button").textContent = t.submitButton;
  document.getElementById("successMessage").textContent = t.successMessage;

  const opts = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  };
  document.getElementById("clock").textContent = new Date().toLocaleString(lang === 'en' ? 'en-GB' : 'ms-MY', opts);
}

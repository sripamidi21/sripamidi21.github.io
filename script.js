document.getElementById("year").textContent = new Date().getFullYear();

// Rotating key-impact slides in the teal card
const slides = document.querySelectorAll(".slide");
const pips = document.querySelectorAll(".dots-nav i");
let current = 0;
function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("active", n === current));
    pips.forEach((p, n) => p.classList.toggle("on", n === current));
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => show(current + 1), 3500);
}
pips.forEach((p, n) => p.addEventListener("click", () => show(n)));
document.querySelector(".dots-nav").style.cursor = "pointer";
document.querySelector(".dots-nav").removeAttribute("aria-hidden");

// "•••" button copies the page link
document.getElementById("shareBtn").addEventListener("click", (e) => {
    navigator.clipboard?.writeText(location.href);
    const btn = e.currentTarget;
    btn.textContent = "✓";
    setTimeout(() => (btn.textContent = "•••"), 1200);
});

// Highlight active tab while scrolling
const tabs = document.querySelectorAll(".tabs a");
const sections = [...tabs].map((a) => document.querySelector(a.getAttribute("href")));
const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tabs.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
}, { rootMargin: "-30% 0px -60% 0px" });
sections.forEach((s) => s && spy.observe(s));

// "Call" buttons: the number is not in the page HTML, it is decoded only when clicked
document.querySelectorAll("[data-call]").forEach((btn) => {
    btn.addEventListener("click", () => {
        location.href = "tel:" + atob("KzkxODI0Nzc5OTc4NA==");
    });
});

// "Copy email" for visitors without a mail app configured
const copyBtn = document.getElementById("copyEmail");
const label = copyBtn.querySelector("span");
copyBtn.addEventListener("click", async () => {
    const email = atob("c3JpLnBhbWlkaTIxQGdtYWlsLmNvbQ==");
    try {
        await navigator.clipboard.writeText(email);
        label.textContent = "Copied ✓";
    } catch {
        label.textContent = email;
    }
    setTimeout(() => (label.textContent = "Copy email"), 2000);
});

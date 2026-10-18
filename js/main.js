document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  document.querySelectorAll(".nav-dropdown").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".nav-group");
      const isOpen = group.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent = "Thank you. This demo form is not connected to the company email yet. Before launch, connect it to the designated company email or an approved form service.";
      status.classList.add("is-visible");
    });
  }

  const revealItems = document.querySelectorAll(".solution-card, .plain-card, .industry-tile, .detail-row, .industry-detail");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });
  }
});
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form — submits to Netlify Forms via fetch, shows inline status.
  // Only works once this site is deployed on Netlify (Netlify detects the
  // form at deploy time). Opening index.html locally will show an error
  // on submit — that's expected until it's live. Noted!
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var body = new URLSearchParams();
      data.forEach(function (value, key) {
        body.append(key, value);
      });

      status.textContent = "Sending…";

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })
        .then(function (res) {
          if (res.ok) {
            status.textContent = "Message sent — I'll get back to you soon.";
            form.reset();
          } else {
            status.textContent =
              "Something went wrong. Please email me directly instead.";
          }
        })
        .catch(function () {
          status.textContent =
            "This form only works once the site is live on Netlify. Please email me directly for now.";
        });
    });
  }
})();

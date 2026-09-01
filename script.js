// Mike's Slice — shared site behavior: dropdown nav + demo order form.

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var panel = document.querySelector(".menu-panel");

  if (toggle && panel) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!panel.contains(e.target) && !toggle.contains(e.target)) {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Order form — demo confirmation only. Once this site is deployed on
  // Netlify, remove this preventDefault block: the form's data-netlify
  // attribute lets Netlify capture submissions for real (see the HTML
  // comment above the <form> in contact.html for setup notes).
  var form = document.getElementById("order-form");
  var confirmBox = document.getElementById("form-confirm");

  if (form && confirmBox) {
    form.addEventListener("submit", function (e) {
      if (form.dataset.demoMode === "true") {
        e.preventDefault();
        var name = form.querySelector("#name").value.trim() || "there";
        confirmBox.textContent =
          "Thanks, " +
          name.split(" ")[0] +
          "! (Demo mode — no order was actually sent. On the live site this box confirms your pickup order was received.)";
        confirmBox.classList.add("show");
        confirmBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }
});

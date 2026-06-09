/* Kavya Sri Makkapati — portfolio interactions */
(function () {
  "use strict";

  // ---- Smart photos: try .jpg / .jpeg / .png / .webp, then fall back ----
  // Drop your photo in /assets named profile.* or about.* — any of these
  // extensions works. No code change needed.
  (function loadPhotos() {
    var EXTS = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "WEBP"];
    document.querySelectorAll("img.smart-img").forEach(function (img) {
      var base = img.getAttribute("data-base");      // e.g. "assets/profile"
      var fallback = img.getAttribute("data-fallback"); // "mono" | "frame"
      var i = 0;
      function tryNext() {
        if (i >= EXTS.length) { showFallback(); return; }
        img.src = base + "." + EXTS[i++] + "?v=1";
      }
      function showFallback() {
        if (fallback === "mono") {
          var span = document.createElement("span");
          span.className = "mono";
          span.textContent = "KM";
          img.replaceWith(span);
        } else {
          var div = document.createElement("div");
          div.className = "ph";
          div.innerHTML = '<span class="mono">KM</span>add your photo<br>(assets/about.jpg)';
          img.replaceWith(div);
        }
      }
      img.addEventListener("error", tryNext);
      img.addEventListener("load", function () {
        // ignore the 0-size broken-image load that some browsers fire
        if (img.naturalWidth === 0) tryNext();
      });
      tryNext();
    });
  })();

  // ---- Mobile nav toggle ----
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // ---- Nav shadow on scroll ----
  if (nav) {
    window.addEventListener("scroll", function () {
      nav.style.boxShadow = window.scrollY > 8
        ? "0 8px 24px -18px rgba(16,31,62,0.4)"
        : "none";
    }, { passive: true });
  }
})();

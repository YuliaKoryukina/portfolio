document.addEventListener("DOMContentLoaded", function () {
  const userFlowTabs = document.querySelectorAll(".role-tab");
  const userFlowSlides = document.querySelectorAll(".flow-slide");
  const userFlowDots = document.querySelectorAll("#flow_stories .dot");
  const userFlowNextArrow = document.querySelector("#flow_stories .next-arrow");
  const userFlowPrevArrow = document.querySelector("#flow_stories .prev-arrow");

  let currentUserFlowSlide = 0;

  function showUserFlowSlide(index) {
    if (!userFlowSlides.length) return;

    userFlowSlides.forEach((slide) => slide.classList.remove("active"));
    userFlowSlides[index].classList.add("active");
    currentUserFlowSlide = index;

    const roles = ["student", "director", "admin"];
    userFlowTabs.forEach((tab) => {
      tab.classList.remove("active");
      if (tab.getAttribute("data-role") === roles[index]) {
        tab.classList.add("active");
      }
    });

    updateUserFlowDots();
  }

  function updateUserFlowDots() {
    userFlowDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentUserFlowSlide);
    });
  }

  if (userFlowTabs.length) {
    userFlowTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        userFlowTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        const role = this.getAttribute("data-role");
        userFlowSlides.forEach((slide) => slide.classList.remove("active"));
        document.getElementById(role + "-flow").classList.add("active");

        const roleIndex = ["student", "director", "admin"].indexOf(role);
        currentUserFlowSlide = roleIndex;
        updateUserFlowDots();
      });
    });
  }

  if (userFlowNextArrow) {
    userFlowNextArrow.addEventListener("click", function () {
      let nextSlide = currentUserFlowSlide + 1;
      if (nextSlide >= userFlowSlides.length) nextSlide = 0;
      showUserFlowSlide(nextSlide);
    });
  }

  if (userFlowPrevArrow) {
    userFlowPrevArrow.addEventListener("click", function () {
      let prevSlide = currentUserFlowSlide - 1;
      if (prevSlide < 0) prevSlide = userFlowSlides.length - 1;
      showUserFlowSlide(prevSlide);
    });
  }

  if (userFlowDots.length) {
    userFlowDots.forEach((dot) => {
      dot.addEventListener("click", function () {
        const slideIndex = parseInt(this.getAttribute("data-slide"));
        showUserFlowSlide(slideIndex);
      });
    });
  }

  const prototypeSlides = document.querySelectorAll(".prototype-slide");
  const prototypeDots = document.querySelectorAll(".slider-dot");
  const prototypeNextArrow = document.querySelector(
    ".prototypes-slider .next-arrow"
  );
  const prototypePrevArrow = document.querySelector(
    ".prototypes-slider .prev-arrow"
  );

  let currentPrototypeSlide = 0;

  function showPrototypeSlide(index) {
    if (!prototypeSlides.length) return;

    prototypeSlides.forEach((slide) => slide.classList.remove("active"));
    prototypeSlides[index].classList.add("active");
    currentPrototypeSlide = index;
    updatePrototypeDots();
  }

  function updatePrototypeDots() {
    prototypeDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentPrototypeSlide);
    });
  }

  showPrototypeSlide(0);

  if (prototypeNextArrow) {
    prototypeNextArrow.addEventListener("click", function () {
      let nextSlide = currentPrototypeSlide + 1;
      if (nextSlide >= prototypeSlides.length) nextSlide = 0;
      showPrototypeSlide(nextSlide);
    });
  }

  if (prototypePrevArrow) {
    prototypePrevArrow.addEventListener("click", function () {
      let prevSlide = currentPrototypeSlide - 1;
      if (prevSlide < 0) prevSlide = prototypeSlides.length - 1;
      showPrototypeSlide(prevSlide);
    });
  }

  if (prototypeDots.length) {
    prototypeDots.forEach((dot) => {
      dot.addEventListener("click", function () {
        const slideIndex = parseInt(this.getAttribute("data-slide"));
        showPrototypeSlide(slideIndex);
      });
    });
  }

  const designSlides = document.querySelectorAll(".design-slide");
  const designDots = document.querySelectorAll("#Design .slider-dot");
  const designNextArrow = document.querySelector("#Design .next-arrow");
  const designPrevArrow = document.querySelector("#Design .prev-arrow");

  let currentDesignSlide = 0;

  function showDesignSlide(index) {
    if (!designSlides.length) return;

    designSlides.forEach((slide) => slide.classList.remove("active"));
    designSlides[index].classList.add("active");
    currentDesignSlide = index;
    updateDesignDots();
  }

  function updateDesignDots() {
    designDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentDesignSlide);
    });
  }

  if (designSlides.length) {
    showDesignSlide(0);
  }

  if (designNextArrow) {
    designNextArrow.addEventListener("click", function () {
      let nextSlide = currentDesignSlide + 1;
      if (nextSlide >= designSlides.length) nextSlide = 0;
      showDesignSlide(nextSlide);
    });
  }

  if (designPrevArrow) {
    designPrevArrow.addEventListener("click", function () {
      let prevSlide = currentDesignSlide - 1;
      if (prevSlide < 0) prevSlide = designSlides.length - 1;
      showDesignSlide(prevSlide);
    });
  }

  if (designDots.length) {
    designDots.forEach((dot) => {
      dot.addEventListener("click", function () {
        const slideIndex = parseInt(this.getAttribute("data-slide"));
        showDesignSlide(slideIndex);
      });
    });
  }

  // ТОЛЬКО для увеличения картинок прототипов (design-image убрано)
  document.querySelectorAll(".prototype-image").forEach((image) => {
    image.style.cursor = "zoom-in";
    image.addEventListener("click", function () {
      const img = this.querySelector("img");
      const caption = this.nextElementSibling.textContent;
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImage");
      const modalCaption = document.getElementById("modalCaption");

      if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalCaption.textContent = caption;
      }
    });
  });

  document.querySelector(".close-modal").addEventListener("click", function () {
    document.getElementById("imageModal").style.display = "none";
  });

  document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target === this || e.target.classList.contains("modal-content")) {
      this.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.getElementById("imageModal").style.display = "none";
    }
  });

  console.log("Все слайдеры инициализированы");
});

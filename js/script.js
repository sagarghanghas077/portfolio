document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".bg-animation span").forEach((orb, index) => {
    const speed = (index + 1) * 0.02;
    orb.style.transform = `translate(
      ${e.clientX * speed}px,
      ${e.clientY * speed}px
    )`;
  });
});




const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach(project => {
      if (filter === "all" || project.dataset.category === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});





const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");

    modalTitle.innerText = card.querySelector("h3").innerText;
    modalDesc.innerText = card.querySelector("p").innerText;

    modalTech.innerHTML = "";
    card.querySelectorAll(".tech-stack span").forEach(tech => {
      modalTech.innerHTML += `<span>${tech.innerText}</span>`;
    });

    modal.classList.add("active");
  });
});

document.querySelector(".close-modal").onclick = () => {
  modal.classList.remove("active");
};

modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("active");
};





// CONTACT FORM HANDLING
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusText.style.color = "#a5b4fc";
    statusText.innerText = "Sending message...";

    emailjs.sendForm(
      "service_upw8qkv",
      "template_j5ria37",
      this
    )
    .then(() => {
      statusText.style.color = "#22c55e";
      statusText.innerText = "✅ Message sent successfully!";
      form.reset();
    })
    .catch(() => {
      statusText.style.color = "#ef4444";
      statusText.innerText = "❌ Something went wrong. Please try again.";
    });
  });
}





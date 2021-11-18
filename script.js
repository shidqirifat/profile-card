const close = document.querySelector(".close"),
  arrow = document.querySelector(".arrow"),
  profile = document.querySelector(".profile-container"),
  skill = document.querySelector(".skills-container");

arrow.addEventListener("click", () => {
  skill.classList.add("active");
  profile.classList.add("non-active");
});

close.addEventListener("click", () => {
  skill.classList.remove("active");
  profile.classList.remove("non-active");
});
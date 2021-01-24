let testimonials = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
		excited about the future. ”`,
    image: `./images/image-tanya.jpg`,
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
		The depth the instructors go into is incredible. I now feel so confident about 
		starting up as a professional developer. ”`,
    image: `./images/image-john.jpg`,
  },
];

const testimonialName = document.querySelector(".testimonial-name");
const testimonialRole = document.querySelector(".testimonial-role");
const testimonialText = document.querySelector(".testimonial-text");
const testimonialImg = document.querySelector(".testimonial-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const btns = document.querySelectorAll(".btn");
let index = 0;

prevBtn.addEventListener("click", () => {
  if (index - 1 < 0) {
    index = testimonials.length - 1;
  } else {
    index--;
  }
  testimonialName.textContent = testimonials[index].name;
  testimonialRole.textContent = testimonials[index].role;
  testimonialText.textContent = testimonials[index].text;
  testimonialImg.src = testimonials[index].image;
});

nextBtn.addEventListener("click", () => {
  if (index + 1 > testimonials.length - 1) {
    index = 0;
  } else {
    index++;
  }
  testimonialName.textContent = testimonials[index].name;
  testimonialRole.textContent = testimonials[index].role;
  testimonialText.textContent = testimonials[index].text;
  testimonialImg.src = testimonials[index].image;
});

console.log("Script started");

const skills = [
    { name: "Python", icon: "fab fa-python" },
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Express.js", icon: "fab fa-node-js" },
    { name: "Research Skills", icon: "fas fa-search" }
];
class PortfolioApp {
    constructor() {
        console.log("PortfolioApp constructor called");
        this.skillsGrid = document.getElementById('skills-grid');
        this.sections = document.querySelectorAll('section');
        this.form = document.querySelector('form');
        this.mainHeading = document.querySelector('h1');
    }

    init() {
        console.log("PortfolioApp init called");
        this.showSkills();
        this.setupSmoothScrolling();
        this.setupFormSubmission();
        this.setupTypewriterEffect();
    }

    showSkills() {
        skills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');
            skillCard.innerHTML = `
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
            `;
            this.skillsGrid.appendChild(skillCard);
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        console.log('Form data:', data);
        this.showFormSubmissionMessage(`Thank you for your message! I'll get back to you soon.`);
    }

    showFormSubmissionMessage(message) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add('form-submission-message');
        this.form.appendChild(messageElement);
        setTimeout(() => messageElement.remove(), 5000);
    }

    setupTypewriterEffect() {
        const headingText = this.mainHeading.textContent;
        this.mainHeading.textContent = '';
        this.typeWriter(this.mainHeading, headingText);
    }

    typeWriter(element, text, speed = 100) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");
    const app = new PortfolioApp();
    app.init();
});

console.log("Script ended");
$(function () {
    $('body').append('<span class="cs_cursor_lg d"></span>');
    $('body').append('<span class="cs_cursor_sm"></span>');
    $('a, button').on('mouseenter', function () {
      $('.cs_cursor_lg').addClass('opacity-0');
      $('.cs_cursor_sm').addClass('opacity-0');
    });
    $('a, button').on('mouseleave', function () {
      $('.cs_cursor_lg').removeClass('opacity-0');
      $('.cs_cursor_sm').removeClass('opacity-0');
    });
  });
  (function ($) {
    'use strict';
  function cursorMovingAnimation(event) {
    try {
      const timing = gsap.timeline({
        defaults: {
          x: event.clientX,
          y: event.clientY,
        },
      });

      timing
        .to('.cs_cursor_lg', {
          ease: 'power2.out',
        })
        .to(
          '.cs_cursor_sm',
          {
            ease: 'power2.out',
          },
          '-=0.4',
        );
    } catch (err) {
      console.log(err);
    }
  }
  document.addEventListener('mousemove', cursorMovingAnimation);
})(jQuery);
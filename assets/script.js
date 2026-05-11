const revealItems = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('active')
  })
}, { threshold: 0.14 })
revealItems.forEach((item) => observer.observe(item))

const glow = document.querySelector('.cursor-glow')
window.addEventListener('mousemove', (e) => {
  if (!glow) return
  glow.style.transform = `translate(${e.clientX - 130}px, ${e.clientY - 130}px)`
})

document.querySelectorAll('.course-card, .gallery-card, .testimonial, .module').forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255,104,168,.16), transparent 34%)`
  })
  card.addEventListener('mouseleave', () => {
    card.style.backgroundImage = ''
  })
})

const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    navLinks.classList.toggle('active')
  })

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active')
      navLinks.classList.remove('active')
    })
  })
}

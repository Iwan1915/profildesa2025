// Navigation functionality
function navigateToPage(page) {
  console.log(`Navigating to: ${page}`)

  // Add loading effect
  document.body.style.opacity = "0.8"

  // Navigate after short delay for smooth transition
  setTimeout(() => {
    window.location.href = page
  }, 200)
}

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(44, 85, 48, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)"
    header.style.backdropFilter = "none"
  }
})

// Form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Show success message
      alert("Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.")

      // Reset form
      this.reset()

      console.log("Form submitted:", data)
    })
  }

  // Add animation to cards on page load
  const cards = document.querySelectorAll(".umkm-card, .kesenian-item, .overview-card")
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    card.style.animation = "fadeInUp 0.6s ease forwards"
  })
})

// Add smooth page transitions
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.3s ease"
    document.body.style.opacity = "1"
  }, 100)
})

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links")
  navLinks.classList.toggle("mobile-active")
}

// Add click tracking for analytics
function trackNavigation(page, source) {
  console.log(`Navigation tracked: ${page} from ${source}`)
  // Here you can add analytics tracking code
}

// Enhanced navigation with tracking
const originalNavigateToPage = navigateToPage
navigateToPage = (page) => {
  trackNavigation(page, "navigation")
  originalNavigateToPage(page)
}

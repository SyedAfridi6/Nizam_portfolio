// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")

    // Change icon based on menu state
    if (navMenu.classList.contains("active")) {
      menuToggle.innerHTML = '<i class="fas fa-times"></i>'
    } else {
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })

  // Close menu when clicking on a nav link (mobile)
  const navLinks = document.querySelectorAll(".nav-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
    })
  })

  // Active navigation based on scroll position
  const sections = document.querySelectorAll("section")
  const navItems = document.querySelectorAll(".nav-menu a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active")
      }
    })

    // Show/hide back to top button
    const backToTop = document.querySelector(".back-to-top")
    if (window.pageYOffset > 300) {
      backToTop.classList.add("active")
    } else {
      backToTop.classList.remove("active")
    }

    // Header background on scroll
    const header = document.getElementById("header")
    if (window.pageYOffset > 50) {
      header.style.backgroundColor = "rgba(5, 5, 5, 0.95)"
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.backgroundColor = "rgba(5, 5, 5, 0.9)"
      header.style.boxShadow = "none"
    }
  })

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-progress")
  const skillSection = document.querySelector("#skills")

  const animateSkills = () => {
    const sectionPos = skillSection.getBoundingClientRect().top
    const screenPos = window.innerHeight / 1.3

    if (sectionPos < screenPos) {
      skillBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0"
        setTimeout(() => {
          bar.style.width = width
        }, 300)
      })

      // Animate skill circles
      const skillCircles = document.querySelectorAll(".skill-circle")
      skillCircles.forEach((circle) => {
        const percent = circle.getAttribute("data-percent")
        const rotation = 360 - 3.6 * percent

        circle.querySelector(".skill-circle-value").textContent = percent + "%"

        setTimeout(() => {
          circle.style.setProperty("--rotation", rotation + "deg")
          circle.style.transform = `rotate(${rotation}deg)`
        }, 300)
      })

      // Remove event listener after animation
      window.removeEventListener("scroll", animateSkills)
    }
  }

  window.addEventListener("scroll", animateSkills)

  // Form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // In a real application, you would send this data to a server
      console.log("Form submitted:", { name, email, subject, message })

      // Show success message (in a real app, this would happen after successful submission)
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })
})


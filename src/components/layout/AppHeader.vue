<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="logo">
        <h2><span class="text-primary">M</span>PR</h2>
      </div>
      
      <nav class="nav" :class="{ active: isMenuOpen }">
        <a href="#home" @click="scrollToSection('home')" class="nav-link">Početna</a>
        <a href="#about" @click="scrollToSection('about')" class="nav-link">O nama</a>
        <a href="#services" @click="scrollToSection('services')" class="nav-link">Usluge</a>
        <a href="#projects" @click="scrollToSection('projects')" class="nav-link">Projekti</a>
        <a href="#contact" @click="scrollToSection('contact')" class="nav-link cta-link">Kontakt</a>
      </nav>
      
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <i class="pi" :class="isMenuOpen ? 'pi-times' : 'pi-bars'"></i>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    // Offset za visinu headera
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    isMenuOpen.value = false
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.4s ease;
  /* Početno stanje: Potpuno transparentan (vidi se Hero slika) */
  background: transparent; 
}

/* Stanje kad se skroluje: Stakleni efekat */
.header.scrolled {
  padding: 1rem 0;
  background: rgba(15, 17, 20, 0.85); /* Tamna, ali prozirna */
  backdrop-filter: blur(12px); /* Blur pozadine */
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h2 {
  font-size: 1.8rem;
  color: white;
  font-weight: 800;
  letter-spacing: -1px;
}

.text-primary {
  color: var(--primary-color);
  text-shadow: 0 0 15px rgba(237, 25, 65, 0.6);
}

.nav {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: all 0.3s;
  font-size: 1rem;
  position: relative;
}

/* Hover efekat: Svetli belo i dobija crvenu tačku ispod */
.nav-link:hover {
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px var(--primary-color);
}

.nav-link:hover::after {
  width: 20px; /* Mala crta ispod, ne cela širina */
}

/* Kontakt dugme u meniju */
.cta-link {
  background: rgba(237, 25, 65, 0.1);
  border: 1px solid var(--primary-color);
  color: var(--primary-color) !important;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s !important;
}

.cta-link::after { display: none; }

.cta-link:hover {
  background: var(--primary-color);
  color: white !important;
  box-shadow: 0 0 20px rgba(237, 25, 65, 0.4);
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

/* --- MOBILE MENU --- */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh; /* Ceo ekran */
    background: #0f1114; /* Crna pozadina */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: -1; /* Ispod header bara */
  }
  
  .nav.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  /* Linkovi na mobilnom */
  .nav-link {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    width: 100%;
    text-align: center;
  }

  .nav-link:hover {
    color: var(--primary-color); /* Na mobilnom hover ide u crveno */
    background: linear-gradient(90deg, transparent, rgba(237, 25, 65, 0.05), transparent);
  }

  .nav-link::after { display: none; }

  .cta-link {
    margin-top: 1rem;
    width: auto;
    font-size: 1.2rem;
  }
}
</style>

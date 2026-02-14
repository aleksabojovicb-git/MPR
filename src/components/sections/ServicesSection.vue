<template>
  <section id="services" class="services">
    <!-- Neutral zona na vrhu - prima završnu boju AboutUs -->
    <div class="neutral-zone-top"></div>
    
    <div class="top-glow"></div>
    
    <div class="container">
      <div class="header-wrapper">
        <h2 class="section-title">Naše Usluge</h2>
        <p class="subtitle">Sve što vam je potrebno za uspeh na jednom mestu</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card reveal">
          <div class="icon-box">
            <i class="pi pi-palette icon"></i>
          </div>
          <h3>Design & Branding</h3>
          <p>Kreiramo vizuelni identitet koji se pamti. Od logotipa do kompletnog brending sistema.</p>
        </div>
        
        <div class="service-card reveal">
          <div class="icon-box">
            <i class="pi pi-megaphone icon"></i>
          </div>
          <h3>Digital Marketing</h3>
          <p>Strategije koje donose rezultate. Google Ads, Facebook kampanje i SEO optimizacija.</p>
        </div>
        
        <!-- <div class="service-card reveal">
          <div class="icon-box">
            <i class="pi pi-share-alt icon"></i>
          </div>
          <h3>Social Media</h3>
          <p>Upravljanje profilima, kreiranje sadržaja i rast zajednice na Instagramu i LinkedInu.</p>
        </div> -->
        
        <div class="service-card reveal">
          <div class="icon-box">
            <i class="pi pi-video icon"></i>
          </div>
          <h3>Video Production</h3>
          <p>Profesionalno snimanje, montaža i snimci dronom za reklame i promotivne spotove.</p>
        </div>
        
        <div class="service-card highlight-card reveal">
          <div class="icon-box">
            <i class="pi pi-star icon"></i>
          </div>
          <h3>Consulting</h3>
          <p>Savjetovanje za razvoj brenda i digitalnu transformaciju vašeg poslovanja.</p>
        </div>
      </div>
    </div>
    
    <div class="bottom-glow"></div>
    
    <!-- Neutral zona na dnu - priprema za Projects -->
    <div class="neutral-zone-bottom"></div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let observer

onMounted(() => {
  const cards = document.querySelectorAll('#services .reveal')
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  })
  
  cards.forEach(card => observer.observe(card))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.services {
  padding: 8rem 0;
  position: relative;
  /* Gradient: počinje odmah ispod neutralne zone, završava iznad donje neutral zone */
  background: linear-gradient(to bottom, #0d0e11 0%, #1a0508 50%, #0d0e11 100%);
  z-index: 8; /* Manji od AboutUs (10), veći od Projects (9) nije bitno, ali drži red */
  overflow: hidden;
}

/* Neutralna zona NA VRHU - prima boju iz AboutUs (#0d0e11) */
.neutral-zone-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #0d0e11; /* Ista kao kraj AboutUs */
  z-index: 2; /* Ispod sadržaja (container je z-index: 5) */
  pointer-events: none;
}

/* Neutralna zona NA DNU - daje boju Projects sekciji (#0d0e11) */
.neutral-zone-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #0d0e11; /* Ista kao početak Projects */
  z-index: 2;
  pointer-events: none;
}

.top-glow,
.bottom-glow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(237, 25, 65, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

.top-glow { top: -200px; }
.bottom-glow { bottom: -200px; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 5;
}

.header-wrapper {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 5;
}

.section-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--primary-color, #ed1941);
  margin: 15px auto 0;
  border-radius: 2px;
}

.subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  font-weight: 400;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* MODERNIZOVANE KARTICE */
.service-card {
  padding: 2.25rem 2rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              border-color 0.3s ease,
              background 0.3s ease,
              box-shadow 0.3s ease;
  will-change: transform;
}

/* Gradient border efekat (glassmorphism stil) */
.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(237, 25, 65, 0.5),
    rgba(255, 255, 255, 0.08),
    rgba(237, 25, 65, 0.15)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.6;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  transform: translateY(-12px);
  background: rgba(255, 255, 255, 0.055);
  border-color: rgba(237, 25, 65, 0.2);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(237, 25, 65, 0.15);
}

.service-card:hover::before {
  opacity: 0.9;
}

.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(237, 25, 65, 0.25),
    rgba(237, 25, 65, 0.08)
  );
  border: 1px solid rgba(237, 25, 65, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              background 0.3s ease,
              box-shadow 0.3s ease;
}

.service-card:hover .icon-box {
  transform: translateY(-3px) scale(1.05);
  background: radial-gradient(
    circle at 30% 30%,
    rgba(237, 25, 65, 0.4),
    rgba(237, 25, 65, 0.15)
  );
  box-shadow: 0 12px 28px rgba(237, 25, 65, 0.25);
}

.icon {
  font-size: 1.75rem;
  color: #ed1941;
  transition: color 0.3s ease, transform 0.3s ease;
}

.service-card:hover .icon {
  color: #ff2f5a;
  transform: scale(1.1);
}

.service-card h3 {
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: white;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.service-card p {
  color: rgba(203, 213, 225, 0.92);
  line-height: 1.7;
  font-size: 1rem;
}

/* Highlight kartica (Consulting) */
.highlight-card {
  background: rgba(255, 255, 255, 0.045);
  border-color: rgba(237, 25, 65, 0.15);
}

.highlight-card::before {
  background: linear-gradient(
    135deg,
    rgba(237, 25, 65, 0.7),
    rgba(255, 255, 255, 0.1),
    rgba(237, 25, 65, 0.3)
  );
}

/* SCROLL ANIMACIJE */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
.reveal:nth-child(4) { transition-delay: 300ms; }
.reveal:nth-child(5) { transition-delay: 400ms; }

@media (prefers-reduced-motion: reduce) {
  .service-card, .reveal, .icon-box, .icon { transition: none !important; }
  .reveal { opacity: 1; transform: none; }
  .service-card:hover { transform: none; }
}

@media (max-width: 768px) {
  .services { padding: 5rem 0; }
  .section-title { font-size: 2rem; }
  .services-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  .service-card { padding: 2rem 1.75rem; }
  .top-glow, .bottom-glow { width: 400px; height: 400px; }
}

@media (max-width: 480px) {
  .services { padding: 4rem 0; }
  .section-title { font-size: 1.75rem; }
  .subtitle { font-size: 1rem; }
  .service-card { padding: 1.75rem 1.5rem; }
  .header-wrapper { margin-bottom: 3.5rem; }
}
</style>

<template>
  <section id="about" class="about">
    <div class="top-glow"></div>

    <div class="container">
      <div class="header-wrapper">
        <h2 class="section-title reveal">O nama</h2>
        <p class="subtitle reveal">Ko smo i kako pomažemo brendovima da rastu</p>
      </div>

      <div class="text-wrapper">
        <p class="description reveal">
          Mi smo <span class="highlight">kreativna agencija</span> specijalizovana za digitalni marketing, dizajn i upravljanje
          društvenim mrežama. Naš tim profesionalaca pomaže brendovima da ostvare online prisustvo koje ostavlja utisak.
        </p>

        <p class="description reveal">
          Sa godinama iskustva i desetinama zadovoljnih klijenata, spremni smo da pretvorimo vaše ideje u stvarnost.
          Ne nudimo samo usluge, već <span class="highlight">partnerstvo</span> u vašem rastu.
        </p>
      </div>

      <div class="stats-grid">
        <div class="stat-item reveal">
          <span class="stat-number">50+</span>
          <span class="stat-label">Klijenata</span>
        </div>

        <div class="stat-item reveal">
          <span class="stat-number">100+</span>
          <span class="stat-label">Projekata</span>
        </div>

        <div class="stat-item reveal">
          <span class="stat-number">5</span>
          <span class="stat-label">Godina</span>
        </div>
      </div>
    </div>

    <div class="bottom-glow"></div>
    <div class="neutral-zone"></div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

let observer;

onMounted(() => {
  const items = document.querySelectorAll("#about .reveal");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  items.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
/* Isto kao Services (jedno mjesto za kontrolu preklopa) */
.about {
  --overlap: 150px;

  padding: 8rem 0;
  position: relative;
  background: linear-gradient(to bottom, #1a0508 0%, #0d0e11 100%);
  z-index: 10;
  overflow: hidden;

  /* Preklapanje preko Hero */
  margin-top: calc(-1 * var(--overlap));
}

/* Primarni način (kad je mask podržan) */
@supports ((-webkit-mask-image: linear-gradient(#000, #000)) or (mask-image: linear-gradient(#000, #000))) {
  .about {
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black var(--overlap),
      black 100%
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black var(--overlap),
      black 100%
    );
  }

  .about::after {
    display: none;
  }
}

/* Fallback (ako mask ne radi u nekom browseru): overlay gradient na vrhu */
.about::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--overlap);
  background: linear-gradient(to bottom, rgba(13, 14, 17, 0) 0%, #1a0508 100%);
  pointer-events: none;
  z-index: 2;
}

/* Glow slojevi identični Services */
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

/* Neutral zona na dnu kao kod Services */
.neutral-zone {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #0d0e11;
  z-index: 2;
  pointer-events: none;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 5;
}

.header-wrapper {
  text-align: center;
  margin-bottom: 4.5rem;
  position: relative;
  z-index: 5;
}

.section-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.section-title::after {
  content: "";
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

.text-wrapper {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

.description {
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(203, 213, 225, 0.92);
  margin-bottom: 1.25rem;
}

.highlight {
  color: white;
  font-weight: 600;
  border-bottom: 1px solid rgba(237, 25, 65, 0.5);
}

/* Stats kao “mini glass kartice” u istom stilu kao Services card */
.stats-grid {
  margin: 3.25rem auto 0;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 1.25rem;
  position: relative;
  z-index: 5;
}

.stat-item {
  padding: 1.75rem 1.5rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: relative;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.3s ease,
              background 0.3s ease,
              border-color 0.3s ease;
}

.stat-item::before {
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

.stat-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(237, 25, 65, 0.18);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.45),
              0 0 40px rgba(237, 25, 65, 0.12);
}

.stat-item:hover::before {
  opacity: 0.9;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.stat-label {
  font-size: 0.9rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Reveal animacije identične */
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

/* Delay: naslov, subtitle, 2 paragrafa, pa 3 stats */
.header-wrapper .reveal:nth-child(1) { transition-delay: 0ms; }
.header-wrapper .reveal:nth-child(2) { transition-delay: 100ms; }
.text-wrapper .reveal:nth-child(1) { transition-delay: 150ms; }
.text-wrapper .reveal:nth-child(2) { transition-delay: 250ms; }
.stats-grid .reveal:nth-child(1) { transition-delay: 300ms; }
.stats-grid .reveal:nth-child(2) { transition-delay: 400ms; }
.stats-grid .reveal:nth-child(3) { transition-delay: 500ms; }

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .stat-item {
    transition: none !important;
  }
  .reveal { opacity: 1; transform: none; }
  .stat-item:hover { transform: none; }
}

@media (max-width: 768px) {
  .about { padding: 5rem 0; }
  .section-title { font-size: 2rem; }
  .top-glow, .bottom-glow { width: 400px; height: 400px; }
  .stats-grid { grid-template-columns: 1fr; gap: 1rem; }
}

@media (max-width: 480px) {
  .about { padding: 4rem 0; }
  .section-title { font-size: 1.75rem; }
  .subtitle { font-size: 1rem; }
  .header-wrapper { margin-bottom: 3.5rem; }
}
</style>

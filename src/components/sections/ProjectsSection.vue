<template>
  <section id="projects" class="projects">
    <!-- Konektor koji nastavlja gradient iz Services -->
    <!-- <div class="section-connector"></div> -->
    <!-- <div class="neutral-zone-top"></div> -->
    <!-- Dekorativni sjaj (nastavak Services bottom-glow) -->
    <div class="top-glow"></div>
    
    <div class="container">
      <div class="header-content reveal">
        <h2 class="section-title">Naši Projekti</h2>
        <p class="subtitle">Pogledajte neke od naših najnovijih radova i studija slučaja</p>
      </div>
      
      <div class="carousel-wrapper reveal">
        <Carousel 
          :value="projects" 
          :numVisible="3" 
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          :circular="true"
          :autoplayInterval="5000"
          :showIndicators="true"
        >
          <template #item="slotProps">
            <div class="carousel-item">
              <ProjectCard :project="slotProps.data" />
            </div>
          </template>
        </Carousel>
      </div>
    </div>
    
    <div class="bottom-glow"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Carousel from 'primevue/carousel'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects.js'

const responsiveOptions = ref([
  {
    breakpoint: '1200px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '992px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1, 
    numScroll: 1
  },
  {
    breakpoint: '550px', 
    numVisible: 1, 
    numScroll: 1
  }
])

let observer

onMounted(() => {
  const elements = document.querySelectorAll('.projects .reveal')
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  })
  
  elements.forEach(el => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>


<style scoped>
.projects {
  padding: 8rem 0;
  position: relative;
  z-index: 7; /* Ispod Services (8), iznad Contact (6) */
  overflow: hidden; /* Obavezno zbog glow efekata koji vire */
    background: linear-gradient(to bottom, #0d0e11 0%, #0d0e11 60%, #1a0508 100%);

}

/* Glow efekti */

.top-glow {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  
  background: radial-gradient(circle, rgba(237, 25, 65, 0.02) 0%, transparent 70%);
  
  pointer-events: none;
  z-index: 1;
}
.bottom-glow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  bottom: -300px;
  background: radial-gradient(circle, rgba(235, 1, 44, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

.top-glow {
  top: -300px;
}

.bottom-glow {
  bottom: -300px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 5;
}

/* Header content */
.header-content {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 30; 
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
  max-width: 600px;
  margin: 1rem auto 0;
  padding: 0 1rem;
  line-height: 1.6;
}

.carousel-wrapper {
  position: relative;
  z-index: 10;
}

.carousel-item {
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
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
.reveal:nth-child(2) { transition-delay: 150ms; }

/* PRIME VUE CAROUSEL STYLES - Bez izmena */
:deep(.p-carousel-prev), :deep(.p-carousel-next) {
  width: 3.5rem; height: 3.5rem; border-radius: 50%;
  background: rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  color: white; border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin: 0 1rem; position: relative; overflow: hidden;
}

:deep(.p-carousel-prev::before), :deep(.p-carousel-next::before) {
  content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
  background: linear-gradient(135deg, rgba(237, 25, 65, 0.5), rgba(255, 255, 255, 0.08), rgba(237, 25, 65, 0.15));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  opacity: 0.6; pointer-events: none; transition: opacity 0.3s ease;
}

:deep(.p-carousel-prev:hover), :deep(.p-carousel-next:hover) {
  background: rgba(237, 25, 65, 0.2); border-color: rgba(237, 25, 65, 0.3);
  color: white; transform: scale(1.15); box-shadow: 0 12px 40px rgba(237, 25, 65, 0.3);
}

:deep(.p-carousel-prev:hover::before), :deep(.p-carousel-next:hover::before) { opacity: 1; }
:deep(.p-carousel-prev:disabled), :deep(.p-carousel-next:disabled) { opacity: 0.3; cursor: not-allowed; }

:deep(.p-carousel-indicators) { padding-top: 2.5rem; gap: 0.5rem; }
:deep(.p-carousel-indicator button) {
  background-color: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.05);
  width: 32px; height: 5px; border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}
:deep(.p-carousel-indicator.p-highlight button) {
  background: linear-gradient(90deg, rgba(237, 25, 65, 0.8), rgba(237, 25, 65, 1));
  border-color: rgba(237, 25, 65, 0.4); width: 48px;
  box-shadow: 0 4px 12px rgba(237, 25, 65, 0.25);
}
:deep(.p-carousel-indicator button:hover) { background-color: rgba(255, 255, 255, 0.15); transform: scale(1.1); }

:deep(.p-carousel-content), :deep(.p-carousel-container),
:deep(.p-carousel-items-content), :deep(.p-carousel-items-container),
:deep(.p-carousel-item) { display: flex; align-items: stretch; }
:deep(.p-carousel-item) { height: auto; }

@media (prefers-reduced-motion: reduce) {
  .reveal, :deep(.p-carousel-prev), :deep(.p-carousel-next), :deep(.p-carousel-indicator button) { transition: none !important; }
  .reveal { opacity: 1; transform: none; }
  :deep(.p-carousel-prev:hover), :deep(.p-carousel-next:hover) { transform: none; }
}

@media (max-width: 992px) {
  .projects { padding: 6rem 0; }
  .section-title { font-size: 2.25rem; }
  .top-glow, .bottom-glow { width: 500px; height: 500px; }
}

@media (max-width: 768px) {
  .projects { padding: 5rem 0; }
  .section-title { font-size: 2rem; }
  .subtitle { font-size: 1rem; }
  .container { padding: 0 1rem; }
  .carousel-item { padding: 0.25rem; }
  .header-content { margin-bottom: 3.5rem; }
  :deep(.p-carousel-prev), :deep(.p-carousel-next) { width: 2.75rem; height: 2.75rem; margin: 0 0.5rem; }
  .top-glow, .bottom-glow { width: 350px; height: 350px; }
}

@media (max-width: 480px) {
  .projects { padding: 4rem 0; }
  .container { padding: 0 0.5rem; }
  .carousel-item { padding: 0.25rem 0; }
  .section-title { font-size: 1.75rem; }
  :deep(.p-carousel-prev), :deep(.p-carousel-next) { display: none; }
  :deep(.p-carousel-indicators) { padding-top: 2rem; }
}
</style>



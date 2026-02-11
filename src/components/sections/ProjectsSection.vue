<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="header-content">
        <h2 class="section-title">Naši Projekti</h2>
        <p class="subtitle">Pogledajte neke od naših najnovijih radova i studija slučaja</p>
      </div>
      
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
  </section>
</template>

<script setup>
import { ref } from 'vue'
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
  }
])
</script>

<style scoped>
.projects {
  padding: 6rem 0;
  background-color: #1a1c20;
  margin-top: -2px;
  position: relative;
    background: linear-gradient(to bottom, #0f1114 0%, #1a0508 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header-content {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--primary-color);
  margin: 15px auto 0;
  border-radius: 2px;
}

.subtitle {
  color: #cbd5e1;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 1rem auto 0;
}

.carousel-item {
  padding: 1rem;
  height: 100%; /* Bitno! */
  display: flex; /* Bitno! */
  flex-direction: column;
}

/* --- PrimeVue Carousel Custom Styling za Tamnu Temu --- */

/* Strelice (Prev/Next) */
:deep(.p-carousel-prev),
:deep(.p-carousel-next) {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05); /* Stakleni efekat */
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  margin: 0 1rem;
}

:deep(.p-carousel-prev:hover),
:deep(.p-carousel-next:hover) {
  background: var(--primary-color); /* Crvena na hover */
  border-color: var(--primary-color);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(237, 25, 65, 0.4);
}

/* Indikatori (Tačkice ispod) */
:deep(.p-carousel-indicators) {
  padding-top: 2rem;
}

:deep(.p-carousel-indicator button) {
  background-color: rgba(255, 255, 255, 0.2);
  width: 30px;
  height: 4px;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.p-carousel-indicator.p-highlight button) {
  background-color: var(--primary-color);
  width: 40px;
}


/* Osiguraj da PrimeVue container dozvoljava visinu */
:deep(.p-carousel-content),
:deep(.p-carousel-container),
:deep(.p-carousel-items-content),
:deep(.p-carousel-items-container),
:deep(.p-carousel-item) {
  display: flex;
  align-items: stretch; /* OVO JE KLJUČNO: Razvuci sve iteme na istu visinu */
}

:deep(.p-carousel-item) {
  height: auto; /* Pusti flex da odradi svoje */
}

/* Responsive */
@media (max-width: 768px) {
  .projects {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .carousel-item {
    padding: 0.5rem;
  }
  
  /* Sakrij strelice na mobilnom da ne smetaju, ostavi swipe */
  :deep(.p-carousel-prev),
  :deep(.p-carousel-next) {
    display: none;
  }
}
</style>

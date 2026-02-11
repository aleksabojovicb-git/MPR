<template>
  <div class="project-card">
    <div class="image-wrapper">
      <!-- Slika koja se zumira na hover -->
      <img :src="project.cover" :alt="project.title" class="project-image">
      
      <!-- Overlay sa dugmetom koji se pojavi na hover -->
      <div class="card-overlay">
        <a :href="`/projekti/${project.slug}`" class="view-btn">
          Vidi Detalje
        </a>
      </div>
    </div>
    
    <div class="card-content">
      <div class="meta">
        <span class="category">{{ project.category }}</span>
      </div>
      
      <h3 class="title">{{ project.title }}</h3>
      <p class="excerpt">{{ project.excerpt }}</p>
      
      <!-- Footer kartice sa strelicom -->
      <!-- <div class="card-footer">
        <a :href="`/projekti/${project.slug}`" class="read-more">
          Pročitaj više <i class="pi pi-arrow-right icon-arrow"></i>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-card {
  /* Tamna pozadina kartice */
  background: #23272e; 
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%; /* Da sve kartice budu iste visine */
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(237, 25, 65, 0.3); /* Crveni okvir na hover */
}

.image-wrapper {
  position: relative;
  width: 100%;
  /* Forsira 16:9 format slike */
  aspect-ratio: 16 / 9; 
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Iseca višak slike */
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05); /* Zoom in efekat */
}

/* Overlay koji se pojavi preko slike */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: black;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transform: translateY(20px);
  transition: transform 0.3s;
}

.project-card:hover .view-btn {
  transform: translateY(0);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Popunjava preostali prostor */
}

.category {
  font-size: 0.8rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

.title {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.excerpt {
  font-size: 0.95rem;
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  /* Ograniči tekst na 3 reda ako je predug */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}



.read-more {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s, color 0.3s;
}

.read-more:hover {
  color: var(--primary-color);
  gap: 0.8rem; /* Strelica se pomera desno */
}

.icon-arrow {
  font-size: 0.8rem;
}
</style>

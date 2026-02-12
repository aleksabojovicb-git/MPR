<template>
  <div class="project-card">
    <a :href="`/projekti/${project.slug}`" class="card-link">
      <div class="image-wrapper">
        <img :src="project.cover" :alt="project.title" class="project-image">
        
        <!-- Desktop Overlay (pojavljuje se na hover) -->
        <div class="card-overlay desktop-only">
          <span class="view-btn">Vidi Detalje</span>
        </div>

        <!-- Mobile Badge (uvek vidljiv na telefonu) -->
        <div class="mobile-hint mobile-only">
          <i class="pi pi-arrow-up-right"></i>
        </div>
      </div>
      
      <div class="card-content">
        <div class="meta">
          <span class="category">{{ project.category }}</span>
          <!-- Datum ili neki drugi info ako treba -->
        </div>
        
        <h3 class="title">{{ project.title }}</h3>
        <p class="excerpt">{{ project.excerpt }}</p>
        
        <!-- Mobile Footer CTA (samo na mobilnom da bude baš jasno) -->
        <div class="mobile-footer mobile-only">
          <span class="read-more-text">Saznaj više</span>
          <i class="pi pi-arrow-right"></i>
        </div>
      </div>
    </a>
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
/* Ceo link omotač da cela kartica bude klikabilna */
.card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card {
  /* Modernija, dublja pozadina umesto obične sive */
  background: linear-gradient(145deg, #1e2024 0%, #17191d 100%);
  border-radius: 20px; /* Malo veći radius */
  overflow: hidden;
  /* Suptilan border koji svetli gore levo */
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

/* Hover efekat za desktop */
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(237, 25, 65, 0.4);
  /* Svetliji glow na hover */
  background: linear-gradient(145deg, #23252b 0%, #1a1c20 100%);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  /* Odvajanje slike od ivica kartice (opciono, izgleda modernije kao 'frame') */
  /* margin: 0.5rem; */
  /* border-radius: 16px; */
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

/* --- DESKTOP OVERLAY --- */
.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 17, 20, 0.6); /* Tamniji overlay */
  backdrop-filter: blur(4px); /* Blur efekat */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: #0f1114;
  padding: 0.75rem 1.75rem;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.95rem;
  transform: translateY(20px);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.project-card:hover .view-btn {
  transform: translateY(0);
}

/* --- SADRŽAJ KARTICE --- */
.card-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.meta {
  margin-bottom: 0.75rem;
}

.category {
  font-size: 0.75rem;
  color: var(--primary-color, #ed1941);
  background: rgba(237, 25, 65, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  display: inline-block;
  border: 1px solid rgba(237, 25, 65, 0.2);
}

.title {
  font-size: 1.35rem;
  color: #fff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  font-weight: 700;
}

.excerpt {
  font-size: 0.95rem;
  color: #94a3b8; /* Svetlija siva za bolji kontrast */
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* --- MOBILE SPECIFIC STYLES --- */
.mobile-only {
  display: none;
}

/* Ikona u uglu slike na mobilnom */
.mobile-hint {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.9rem;
  z-index: 2;
}

.mobile-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primary-color, #ed1941);
  font-weight: 600;
  font-size: 0.9rem;
}

/* --- MEDIA QUERIES --- */
@media (max-width: 768px) {
  /* Sakrij desktop elemente na mobilnom */
  .desktop-only {
    display: none !important;
  }
  
  /* Prikaži mobilne elemente */
  .mobile-only {
    display: flex;
  }
  
  /* ŠIRA KARTICA NA MOBILNOM */
  .project-card {
    /* PrimeVue Carousel item ima padding, pa kartica može biti 100% tog itema */
    /* Ali vizuelno deluje veće ako smanjimo padding unutar kartice */
    border-radius: 16px;
    background: #1a1c20; /* Malo svetlija na mob da se odvoji od pozadine */
  }
  
  .card-content {
    padding: 1.25rem; /* Malo manje paddinga da stane više teksta */
  }
  
  .title {
    font-size: 1.25rem;
  }
  
  .excerpt {
    -webkit-line-clamp: 2; /* Manje teksta na mob */
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
}
</style>

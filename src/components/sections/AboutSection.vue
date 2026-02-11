<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <h2 class="section-title">O nama</h2>
        
        <div class="text-wrapper">
          <p class="description">
            Mi smo <span class="highlight">kreativna agencija</span> specijalizovana za digitalni marketing, dizajn i upravljanje društvenim mrežama. 
            Naš tim profesionalaca pomaže brendovima da ostvare online prisustvo koje ostavlja utisak.
          </p>
          <p class="description">
            Sa godinama iskustva i desetinama zadovoljnih klijenata, spremni smo da pretvorimo vaše ideje u stvarnost.
            Ne nudimo samo usluge, već <span class="highlight">partnerstvo</span> u vašem rastu.
          </p>
        </div>

        <!-- Opcionalno: Stats counteri da razbiju tekst -->
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Klijenata</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100+</span>
            <span class="stat-label">Projekata</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5</span>
            <span class="stat-label">Godina</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  overflow-x: hidden;
  padding: 6rem 0 8rem 0; /* Dodatni padding dole za blend */
  position: relative;
  /* Počinje od Hero crne (#212429), završava u #15171a (boja Services) */
  background: linear-gradient(to bottom, var(--dark-color) 0%, #15171a 100%);
  z-index: 1;
}

/* Dekorativni crveni sjaj u pozadini (opcionalno) */
.about::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(237, 25, 65, 0.1) 0%, rgba(0,0,0,0) 70%);
  pointer-events: none;
}



.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

.about-content {
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}

/* Elegantna linija ispod naslova */
.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--primary-color);
  margin: 15px auto 0;
  border-radius: 2px;
}

.text-wrapper {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #cbd5e1; /* Svetlo siva, čitljivija na tamnom */
  margin-bottom: 1.5rem;
}

.highlight {
  color: white;
  font-weight: 600;
  border-bottom: 1px solid rgba(237, 25, 65, 0.5); /* Diskretno podvučeno crvenom */
}

/* Stats Grid */
.stats-grid {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
   position: relative;
  z-index: 50; 
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
   position: relative;
  z-index: 51;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  /* Ako je pretamno crveno, probaj svetliju boju ili belu */
  color: white; /* Probaj sa BELOM bojom da vidiš da li se ističe */
  /* color: var(--primary-color); <--- Ili vrati ovo ako želiš crveno */
  line-height: 1;
  margin-bottom: 0.5rem;
  /* Tekst senka za bolju čitljivost na tamnom */
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.stat-label {
  font-size: 0.9rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    flex-direction: column; /* Na mobilnom jedno ispod drugog */
    gap: 2rem;
  }
}
</style>

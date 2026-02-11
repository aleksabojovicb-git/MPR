<template>
  <section id="services" class="services">
    <!-- OVO JE NOVO: Konektor koji pokriva liniju -->
    <div class="section-connector"></div>

    <!-- Dekorativni sjaj -->
    <div class="top-glow"></div>
    
    <div class="container">
      <div class="header-wrapper">
        <h2 class="section-title">Naše Usluge</h2>
        <p class="subtitle">Sve što vam je potrebno za uspeh na jednom mestu</p>
      </div>
      
      <div class="services-grid">
        <!-- ... tvoje kartice ostaju iste ... -->
        <div class="service-card">
          <div class="icon-box">
            <i class="pi pi-palette icon"></i>
          </div>
          <h3>Dizajn & Branding</h3>
          <p>Kreiramo vizuelni identitet koji se pamti. Od logotipa do kompletnog brending sistema.</p>
        </div>
        
        <div class="service-card">
          <div class="icon-box">
            <i class="pi pi-megaphone icon"></i>
          </div>
          <h3>Digital Marketing</h3>
          <p>Strategije koje donose rezultate. Google Ads, Facebook kampanje i SEO optimizacija.</p>
        </div>
        
        <div class="service-card">
          <div class="icon-box">
            <i class="pi pi-share-alt icon"></i>
          </div>
          <h3>Društvene Mreže</h3>
          <p>Upravljanje profilima, kreiranje sadržaja i rast zajednice na Instagramu i LinkedInu.</p>
        </div>
        
        <div class="service-card">
          <div class="icon-box">
            <i class="pi pi-video icon"></i>
          </div>
          <h3>Video Produkcija</h3>
          <p>Profesionalno snimanje, montaža i snimci dronom za reklame i promotivne spotove.</p>
        </div>
        
        <div class="service-card">
          <div class="icon-box">
            <i class="pi pi-print icon"></i>
          </div>
          <h3>Dizajn za Štampu</h3>
          <p>Priprema za štampu flajera, brošura, vizit karti i velikih formata.</p>
        </div>

        <div class="service-card highlight-card">
          <div class="icon-box">
            <i class="pi pi-star icon"></i>
          </div>
          <h3>Konsalting</h3>
          <p>Savetovanje za razvoj brenda i digitalnu transformaciju vašeg poslovanja.</p>
        </div>
      </div>
    </div>
    
    <div class="bottom-glow"></div>
  </section>
</template>

<style scoped>

.services {
  padding: 8rem 0;
  position: relative;
  /* background-color: #15171a;  */
  background: linear-gradient(to bottom, #1a0508  0%, #0f1114 100%);
  /* Fizički preklop */
  /* margin-top: -1px;  */
  /* Jaka senka na vrhu koja pokriva spoj */
  /* box-shadow: 0 -50px 100px 50px #15171a;  */
  z-index: 10;
}

/* --- REŠENJE ZA LINIJU --- */
.section-connector {
  position: absolute;
  top: -150px;
  left: 0;
  width: 100%;
  height: 151px; 
  /* Gradijent od About boje (#1a1c20 ili #15171a) ka Services boji (#15171a) */
  background: linear-gradient(to bottom, transparent 0%, #15171a 100%);
  z-index: 20; /* Iznad svega */
  pointer-events: none;
}



.bottom-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  /* background: linear-gradient(to bottom, transparent 0%, #1a1c20 100%); */
  z-index: 1;
  pointer-events: none;
}

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
  z-index: 30; /* Iznad konektora */
}

/* ... ostatak CSS-a za kartice i naslove je isti kao pre ... */
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
  color: #94a3b8;
  font-size: 1.1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2.5rem 2rem;
  border-radius: 16px;
  background: rgba(30, 34, 40, 0.6); 
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.service-card:hover {
  transform: translateY(-8px);
  background: rgba(35, 39, 46, 0.8);
  border-color: rgba(237, 25, 65, 0.3);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.icon-box {
  width: 60px;
  height: 60px;
  background: rgba(237, 25, 65, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s;
}

.service-card:hover .icon-box {
  background: var(--primary-color);
  box-shadow: 0 5px 15px rgba(237, 25, 65, 0.3);
}

.icon {
  font-size: 1.8rem;
  color: var(--primary-color);
  transition: color 0.3s;
}

.service-card:hover .icon {
  color: white;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: 700;
}

.service-card p {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .services {
    padding: 5rem 0;
  }
  .section-title {
    font-size: 2rem;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .service-card {
    align-items: center;
    text-align: center;
  }
}
</style>

<template>
  <section id="home" class="hero">
    <!-- Pozadinska slika -->
    <div class="hero-bg-wrapper">
      <div class="hero-bg"></div>
    </div>
    
    <!-- Overlay -->
    <div class="hero-overlay"></div>
    
    <!-- Maska na dnu za prelaz -->
    <div class="hero-bottom-fade"></div>
    
    <div class="container content">
      <span class="eyebrow">Montenegro Public Relations</span>
      
      <!-- NOVI SLOGAN -->
      <h1 class="title">
        Strategije koje se pamte, <br>
        <span class="highlight">Rezultati koji traju.</span>
      </h1>
      
      <!-- SKRAĆEN PODNASLOV -->
      <p class="subtitle">
        Spajamo kreativan dizajn i digitalni marketing koji pravi razliku.
      </p>
      
      <div class="cta-group">
        <a href="#contact" class="cta-button primary">
          Kontaktirajte nas <i class="pi pi-arrow-right"></i>
        </a>
        <a href="#projects" class="cta-button outline">
          Pogledajte radove
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a0508; 
  color: white;
  text-align: center;
  padding-top: 80px;
  overflow: hidden;
}

/* --- POZADINA I SLIKA --- */
.hero-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* Maska koja topi sliku na dnu */
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}

.hero-bg {
  width: 100%;
  height: 100%;
  /* NOVA SLIKA: Creative Workspace (crvenkasti tonovi) */
  background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  /* Isključen fixed na mobilnom radi boljeg skrola */
  background-attachment: scroll; 
}

@media (min-width: 769px) {
  .hero-bg {
    background-attachment: fixed; /* Parallax samo na desktopu */
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 17, 20, 0.7); /* Malo svetliji overlay da se vidi slika */
  z-index: 1;
}

/* FADE PRELAZ NA DNU */
.hero-bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, transparent 0%, #1a0508 100%);
  z-index: 2;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 3;
  max-width: 900px;
  padding: 0 1.5rem;
}

/* --- TYPOGRAPHY --- */
.eyebrow {
  display: inline-block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ed1941; /* Hardkodovana boja */
  margin-bottom: 1.5rem;
  font-weight: 700;
  opacity: 0;
  animation: fadeInDown 1s ease forwards;
}

.title {
  font-size: 4.5rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  opacity: 0;
  animation: fadeInUp 1s ease 0.3s forwards;
}

/* POPRAVLJEN HIGHLIGHT (Sada bi morao da se vidi) */
.highlight {
  /* Koristimo fill-color umesto color: transparent za bolju podršku */
  background: linear-gradient(90deg, #ffffff, #ed1941);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block; /* Pomaže da se gradijent lepo iscrta */
  
  /* Fallback ako gradijent ne radi - videće se crvena boja */
  color: #ed1941; 
}

.subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #cbd5e1;
  /* Uži tekst za bolju čitljivost */
  max-width: 550px; 
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeInUp 1s ease 0.6s forwards;
}

/* --- DUGMAD --- */
.cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  opacity: 0;
  animation: fadeInUp 1s ease 0.9s forwards;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  min-width: 160px;
}

.cta-button.primary {
  background: #ed1941;
  color: white;
  box-shadow: 0 10px 30px rgba(237, 25, 65, 0.3);
}

.cta-button.primary:hover {
  background: #c41235;
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(237, 25, 65, 0.4);
}

.cta-button.outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.cta-button.outline:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* ANIMACIJE */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- MOBILE --- */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem; /* Manji naslov */
  }
  
  .subtitle {
    font-size: 1rem;
    padding: 0 1rem; /* Razmak od ivica */
    max-width: 100%; /* Pusti da se širi do paddinga */
  }
  
  .cta-group {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
  
  .cta-button {
    width: 100%;
  }
}
</style>

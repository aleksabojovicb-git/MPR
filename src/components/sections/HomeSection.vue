<template>
  <section id="home" class="hero">
    <!-- SAMO OVO TREBA ZA SLIKU (Bez wrappera) -->
    <div class="hero-bg"></div>
    
    <!-- Overlay -->
    <div class="hero-overlay"></div>
    
    <!-- Maska na dnu (Ako koristimo ::after u CSS-u, ovaj div ti zapravo NE TREBA, 
         ali ne smeta ako ostane jer ::after radi posao) -->
    
    <div class="container content">
      <span class="eyebrow">Montenegro Public Relations</span>
      
      <h1 class="title">
        Strategije koje se pamte, <br>
        <span class="highlight">Rezultati koji traju.</span>
      </h1>
      
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
  /* padding-bottom je bitan da napravi prostor da Services "udje" */
  padding-bottom: 150px; 
  z-index: 1; /* Hero je ispod */
}

/* 1. SLIKA POZADINE (Apsolutno pozicionirana) */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Tvoja nova slika */
  background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

/* 2. OVERLAY (Standardno tamnjenje) */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 17, 20, 0.6); 
  z-index: 1;
}



/* Content iznad svega */
.content {
  position: relative;
  z-index: 3;
  max-width: 900px;
  padding: 0 1.5rem;
}

/* --- OSTATAK KODA ZA TEKST I DUGMAD (ISTO KAO PRE) --- */
.eyebrow {
  display: inline-block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ed1941;
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

.highlight {
  background: linear-gradient(90deg, #ffffff, #ed1941);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  color: #ed1941; 
}

.subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #cbd5e1;
  max-width: 550px; 
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeInUp 1s ease 0.6s forwards;
}

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

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .title { font-size: 2.5rem; }
  .subtitle { font-size: 1rem; padding: 0 1rem; max-width: 100%; }
  .cta-group { flex-direction: column; width: 100%; max-width: 280px; margin: 0 auto; }
  .cta-button { width: 100%; }
}
</style>

<template>
  <section id="home" class="hero">
    <!-- Overlay za zatamnjenje slike -->
    <div class="hero-overlay"></div>
    
    <div class="container content">
      <span class="eyebrow">Montenegro Public Relations</span>
      <h1 class="title">
        Vaša vizija, <br>
        <span class="highlight">Naša Realnost.</span>
      </h1>
      <p class="subtitle">
          Spajamo kreativan dizajn, strateški marketing i PR komunikaciju koja pravi razliku na tržištu.
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
  min-height: 100vh; /* Puni ekran */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-color);
  
  /* Pozadinska slika - apstraktna tech/moderna */
  background-image: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax efekat */
  
  color: white;
  text-align: center;
  padding-top: 80px; /* Kompenzacija za fiksni header */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Tamni gradijent preko slike da tekst bude čitljiv */
  background: linear-gradient(
    135deg, 
    rgba(26, 28, 32, 0.95) 0%, 
    rgba(26, 28, 32, 0.8) 100%
  );
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2; /* Iznad overlay-a */
  max-width: 900px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--primary-color);
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
  color: transparent;
  background: linear-gradient(90deg, #fff, var(--primary-color));
  -webkit-background-clip: text;
  background-clip: text;
}

.subtitle {
  font-size: 1.35rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #cbd5e1;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeInUp 1s ease 0.6s forwards;
}

.cta-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  opacity: 0;
  animation: fadeInUp 1s ease 0.9s forwards;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.cta-button.primary {
  background: var(--primary-color);
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
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.cta-button.outline:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-3px);
}

/* Animacije */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Mobile */
@media (max-width: 768px) {
  .title {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .cta-group {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>

<template>
  <footer class="footer">
    <!-- Konektor za glatki prelaz iz Contact sekcije -->
    <div class="footer-connector"></div>
    
    <!-- Dekorativni sjaj -->
    <div class="footer-glow"></div>

    <div class="container relative-z">
      <div class="footer-content">
        <!-- Logo i Opis -->
        <div class="footer-brand">
          <h2 class="footer-logo"><span class="text-primary"></span>MPR</h2>
          <p class="brand-desc">
            Vaš partner za digitalni rast, dizajn, marketing i PR strategije koje donose rezultate.
          </p>
        </div>

        <!-- Brzi Linkovi -->
        <div class="footer-links">
          <h3>Brzi Linkovi</h3>
          <ul>
            <li><a href="#home">Početna</a></li>
            <li><a href="#services">Usluge</a></li>
            <li><a href="#projects">Projekti</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="footer-social">
          <h3>Pratite Nas</h3>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="pi pi-instagram"></i></a>
            <a href="#" class="social-icon"><i class="pi pi-facebook"></i></a>
            <a href="#" class="social-icon"><i class="pi pi-linkedin"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 Powered by DGL</p>
        <p>&copy; Duvaj ga Lako, ide i moje ime</p> <!--Ukloni ovu zajebanciju -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  /* Gradijent: Crna (Contact) -> Tamno Crvena (Footer) */
  background: linear-gradient(to bottom, #0f1114 0%, #1a0508 100%);
  color: #cbd5e1;
  padding: 6rem 0 2rem;
  position: relative;
  overflow: hidden;
  margin-top: -2px; /* Spajanje */
}

/* Konektor za prelaz */
.footer-connector {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, #0f1114 0%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

/* Crveni sjaj u pozadini */
.footer-glow {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(237, 25, 65, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative; /* Iznad sjaja */
}

.relative-z {
  position: relative;
  z-index: 2;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-brand h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.text-primary {
  color: var(--primary-color);
  text-shadow: 0 0 20px rgba(237, 25, 65, 0.5); /* Sjaj slova */
}

.brand-desc {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 350px;
  color: #a0aec0;
}

.footer-links h3,
.footer-social h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  /* Crvena linija ispod naslova */
  display: inline-block;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 5px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 1rem;
}

.footer-links a {
  text-decoration: none;
  color: #cbd5e1;
  transition: all 0.3s;
  font-size: 1.05rem;
}

.footer-links a:hover {
  color: var(--primary-color);
  padding-left: 8px; /* Veći pomak */
  text-shadow: 0 0 10px rgba(237, 25, 65, 0.3);
}

.social-icons {
  display: flex;
  gap: 1.2rem;
}

.social-icon {
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.2rem;
}

.social-icon:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-5px) rotate(360deg); /* Zabavna rotacija */
  box-shadow: 0 5px 15px rgba(237, 25, 65, 0.4);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.95rem;
  color: #718096;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .brand-desc {
    margin: 0 auto;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .footer-links h3,
  .footer-social h3 {
    border-bottom: none; /* Bez linije na centru mobilnog */
    text-decoration: underline;
    text-decoration-color: var(--primary-color);
    text-underline-offset: 5px;
  }
}
</style>

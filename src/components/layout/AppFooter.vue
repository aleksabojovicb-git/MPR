<template>
  <footer class="footer">
    <!-- Konektor za glatki prelaz -->
    <div class="footer-connector"></div>
    
    <!-- Dekorativni sjaj (crveni) -->
    <div class="footer-glow"></div>

    <div class="container relative-z">
      <div class="footer-content">
        
        <!-- Lijevo: Logo i Slogan -->
        <div class="footer-brand">
          <h2 class="footer-logo">MPR<span class="dot">.</span></h2>
          <p class="brand-desc">
            Vaš partner za digitalnu transformaciju. <br>
            Kreiramo strategije koje se pamte.
          </p>
        </div>

        <!-- Desno: Social Media (Glassmorphism) -->
        <div class="footer-social">
          <div class="social-icons">
            <a href="#" class="social-icon" aria-label="Instagram">
              <i class="pi pi-instagram"></i>
              <div class="tooltip">Instagram</div>
            </a>
            <a href="#" class="social-icon" aria-label="Facebook">
              <i class="pi pi-facebook"></i>
              <div class="tooltip">Facebook</div>
            </a>
            <a href="#" class="social-icon" aria-label="LinkedIn">
              <i class="pi pi-linkedin"></i>
              <div class="tooltip">LinkedIn</div>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="copyright-wrapper">
          <p>&copy; 2026 MPR Digital. Sva prava zadržana.</p>
          <span class="separator">|</span>
          <p class="dev-credit">Powered by <span class="highlight">DGL</span></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  /* Gradijent iz crne (Contact dno) u tamno crvenu/crnu */
  background: linear-gradient(to bottom, #0f1114 0%, #120405 100%);
  color: #cbd5e1;
  padding: 5rem 0 2rem;
  position: relative;
  overflow: hidden;
  margin-top: -2px;
}

/* Konektor za prelaz */
.footer-connector {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom, #0f1114 0%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

/* Crveni sjaj u pozadini */
.footer-glow {
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(237, 25, 65, 0.12) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* --- LEVA STRANA: LOGO --- */
.footer-logo {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1;
}

.footer-logo .dot {
  color: var(--primary-color, #ed1941);
}

.brand-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #94a3b8;
  max-width: 400px;
}

/* --- DESNA STRANA: SOCIAL ICONS --- */
.social-icons {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  /* Glassmorphism */
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-size: 1.25rem;
}

.social-icon:hover {
  background: var(--primary-color, #ed1941);
  border-color: var(--primary-color, #ed1941);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(237, 25, 65, 0.3);
  color: white;
}

/* Tooltip za ikone */
.tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.social-icon:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* --- FOOTER BOTTOM --- */
.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #64748b;
  font-size: 0.95rem;
}

.separator {
  color: #334155;
}

.highlight {
  color: var(--primary-color, #ed1941);
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  
  .brand-desc {
    margin: 0 auto;
  }
  
  .copyright-wrapper {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .separator {
    display: none;
  }
}
</style>

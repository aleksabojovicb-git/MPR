<template>
  <section id="contact" class="contact">
    <div class="background-glow"></div>
    <div class="container">
      <h2 class="section-title">Kontaktirajte Nas</h2>
      
      <div class="contact-content">
        <!-- Lijeva strana: Info -->
        <div class="contact-info">
          <p class="contact-intro">
            Spremni za sledeći korak? Javite nam se za besplatnu konsultaciju i pretvorite ideju u realnost.
          </p>
          
          <div class="info-grid">
            <a href="mailto:info@agencija.com" class="info-card">
              <div class="icon-box">
                <i class="pi pi-envelope"></i>
              </div>
              <div class="info-details">
                <span class="label">Email</span>
                <span class="value">info@agencija.com</span>
              </div>
            </a>
            
            <a href="tel:+38269123456" class="info-card">
              <div class="icon-box">
                <i class="pi pi-phone"></i>
              </div>
              <div class="info-details">
                <span class="label">Telefon</span>
                <span class="value">+382 69 123 456</span>
              </div>
            </a>
            
            <div class="info-card">
              <div class="icon-box">
                <i class="pi pi-map-marker"></i>
              </div>
              <div class="info-details">
                <span class="label">Lokacija</span>
                <span class="value">Podgorica, Crna Gora</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Desna strana: Forma (Glassmorphism) -->
        <form class="contact-form glass-panel" @submit.prevent="handleSubmit">
          <div class="form-header">
            <h3>Pošaljite nam poruku</h3>
            <p>Odgovaramo u roku od 24h</p>
          </div>

          <div class="form-group floating-label">
            <input type="text" id="name" placeholder=" " required class="form-input">
            <label for="name">Ime i Prezime</label>
            <div class="focus-border"></div>
          </div>
          
          <div class="form-group floating-label">
            <input type="email" id="email" placeholder=" " required class="form-input">
            <label for="email">Email Adresa</label>
            <div class="focus-border"></div>
          </div>
          
          <div class="form-group floating-label">
            <textarea id="message" placeholder=" " rows="4" required class="form-input textarea"></textarea>
            <label for="message">Vaša poruka</label>
            <div class="focus-border"></div>
          </div>
          
          <button type="submit" class="submit-btn">
            <span>Pošalji Upit</span>
            <i class="pi pi-send icon-send"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  // Simulacija slanja
  const btn = document.querySelector('.submit-btn');
  btn.innerHTML = '<i class="pi pi-check"></i> Poslato!';
  btn.style.background = '#10b981'; // Zelena boja
  setTimeout(() => {
    btn.innerHTML = '<span>Pošalji Upit</span> <i class="pi pi-send icon-send"></i>';
    btn.style.background = '';
  }, 3000);
}
</script>

<style scoped>
.contact {
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(to bottom, #1a0508 0%, #0f1114 100%);
  margin-top: -2px;
  overflow: hidden;
}

/* Pozadinski glow efekat iza forme */
.background-glow {
  position: absolute;
  top: 50%;
  right: 10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(237, 25, 65, 0.15) 0%, transparent 70%);
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 5;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: white;
  position: relative;
  display: inline-block;
  width: 100%;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--primary-color, #ed1941);
  margin: 15px auto 0;
  border-radius: 2px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 5rem;
  align-items: center; /* Centrirano vertikalno */
}

/* --- LEVA STRANA: INFO --- */
.contact-intro {
  font-size: 1.15rem;
  color: #cbd5e1;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.info-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(237, 25, 65, 0.3);
  transform: translateX(10px); /* Pomeranje desno na hover */
}

.icon-box {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(237, 25, 65, 0.2), rgba(237, 25, 65, 0.05));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ed1941;
  font-size: 1.25rem;
  border: 1px solid rgba(237, 25, 65, 0.2);
}

.info-details {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.8rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.value {
  color: white;
  font-weight: 600;
  font-size: 1.05rem;
}

/* --- DESNA STRANA: FORMA (GLASS) --- */
.contact-form {
  position: relative;
  padding: 3rem;
  border-radius: 24px;
  /* Glassmorphism efekat */
  background: rgba(30, 32, 38, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* "Shine" efekat na vrhu forme */
.contact-form::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.form-header h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

/* Floating Input Stilovi */
.form-input {
  width: 100%;
  padding: 1rem 0; /* Samo donji border */
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  font-size: 1rem;
  color: white;
  transition: all 0.3s ease;
  border-radius: 0; /* Reset radiusa */
}

.form-input:focus {
  outline: none;
  border-color: #ed1941;
}

/* Floating Label Logika */
.form-group label {
  position: absolute;
  top: 1rem;
  left: 0;
  color: #94a3b8;
  pointer-events: none;
  transition: 0.3s ease all;
  font-size: 1rem;
}

/* Kada je input fokusiran ili ima tekst (placeholder hack) */
.form-input:focus ~ label,
.form-input:not(:placeholder-shown) ~ label {
  top: -0.5rem;
  font-size: 0.8rem;
  color: #ed1941;
  font-weight: 600;
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #ed1941, #c41235);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(237, 25, 65, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(237, 25, 65, 0.4);
}

.icon-send {
  font-size: 1rem;
  transition: transform 0.3s;
}

.submit-btn:hover .icon-send {
  transform: translateX(4px) rotate(-15deg);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .contact {
    padding: 5rem 0;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-info {
    order: 2; /* Info ide ISPOD forme na mobilnom */
  }
  
  .contact-form {
    padding: 2rem;
    order: 1; /* Forma je PRVA */
  }
  
  .background-glow {
    right: 50%;
    transform: translate(50%, -50%);
    width: 100%;
  }
}
</style>

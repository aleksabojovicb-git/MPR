<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Kontaktirajte Nas</h2>
      
      <div class="contact-content">
        <!-- Lijeva strana: Info -->
        <div class="contact-info">
          <p class="contact-intro">
            Imate projekat na umu? Javite nam se za besplatnu konsultaciju.
          </p>
          
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="pi pi-envelope"></i>
            </div>
            <div class="info-text">
              <span class="label">Email</span>
              <a href="mailto:info@agencija.com" class="value">info@agencija.com</a>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="pi pi-phone"></i>
            </div>
            <div class="info-text">
              <span class="label">Telefon</span>
              <a href="tel:+38269123456" class="value">+382 69 123 456</a>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="pi pi-map-marker"></i>
            </div>
            <div class="info-text">
              <span class="label">Lokacija</span>
              <span class="value">Podgorica, Crna Gora</span>
            </div>
          </div>
        </div>
        
        <!-- Desna strana: Forma -->
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Ime i Prezime</label>
            <input type="text" placeholder="Vaše ime" required class="form-input">
          </div>
          
          <div class="form-group">
            <label>Email Adresa</label>
            <input type="email" placeholder="vas@email.com" required class="form-input">
          </div>
          
          <div class="form-group">
            <label>Poruka</label>
            <textarea placeholder="Vaše pitanje..." rows="5" required class="form-input textarea"></textarea>
          </div>
          
          <button type="submit" class="submit-btn">
            Pošalji Upit <i class="pi pi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert('Hvala! Vaša poruka je poslata.')
}
</script>

<style scoped>
.contact {
  padding: 8rem 0;
  position: relative;
  /* Gradijent: Crna (#1a1c20 iz Projects) -> Skoro crna (#0f1114 iz Footera) */
  /* background: linear-gradient(to bottom, #1a1c20 0%, #0f1114 100%); */
   background: linear-gradient(to bottom, #1a0508  0%, #0f1114 100%);
  margin-top: -2px; /* Spajanje */
}
.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  box-shadow: 0 0 30px rgba(237, 25, 65, 0.4);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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
  background: var(--primary-color);
  margin: 15px auto 0;
  border-radius: 2px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: flex-start;
}

/* Info Sekcija */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.contact-intro {
  font-size: 1.2rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  transition: background 0.3s;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.03);
}

.icon-wrapper {
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(237, 25, 65, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.4rem;
  flex-shrink: 0;
  border: 1px solid rgba(237, 25, 65, 0.2);
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.label {
  font-size: 0.85rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.value {
  font-size: 1.1rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.value:hover {
  color: var(--primary-color);
}

/* Forma */
.contact-form {
  background: #23272e; /* Tamno siva kartica */
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #cbd5e1;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 1rem 1.25rem;
  background: #1a1c20; /* Još tamnija unutar forme */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input::placeholder {
  color: #475569;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  background: #15171a;
  box-shadow: 0 0 0 4px rgba(237, 25, 65, 0.1);
}

.textarea {
  resize: vertical;
  min-height: 140px;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.3s;
  margin-top: 1rem;
}

.submit-btn:hover {
  background: #c41235; /* Tamnija crvena */
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(237, 25, 65, 0.2);
}

/* Mobile Responsive */
@media (max-width: 900px) {
  .contact {
    padding: 4rem 0;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .contact-info {
    order: 2; /* Forma prva na mobilnom, info ispod */
    text-align: center;
    align-items: center;
  }

  .info-item {
    flex-direction: column;
    text-align: center;
    width: 100%;
    background: #23272e;
  }
  
  .info-text {
    align-items: center;
  }
  
  .contact-form {
    padding: 2rem;
    order: 1;
  }
}
</style>

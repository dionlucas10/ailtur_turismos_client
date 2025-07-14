async function carregarOutrasViagens() {
  try {
    const resp = await fetch('https://ailtur-turismos-server.onrender.com/api/viagens');
    const viagens = await resp.json();
    const wrapper = document.getElementById('outras-viagens-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    if (Array.isArray(viagens) && viagens.length > 0) {
      viagens.forEach(v => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
          <div class="card-popup-container">
            <img src="https://ailtur-turismos-server.onrender.com/upload/${v.imagem}" alt="Viagem">
            <div class="popup-reserva">
              <span>Gostou desta viagem?</span>
              <a class="btn-whatsapp" href="https://api.whatsapp.com/send/?phone=5598981906414&text&type=phone_number&app_absent=0" target="_blank">
                <i class="bi bi-whatsapp"></i> Reservar
              </a>
            </div>
          </div>
        `;
        wrapper.appendChild(slide);
      });
    } else {
      wrapper.innerHTML = '<div class="swiper-slide"><p>Nenhuma viagem cadastrada.</p></div>';
    }
    // Atualiza o Swiper (caso já esteja inicializado)
    if (window.swiper2) {
      window.swiper2.update();
    }
  } catch (err) {
    console.error('Erro ao carregar viagens:', err);
  }
}

document.addEventListener('DOMContentLoaded', carregarOutrasViagens); 
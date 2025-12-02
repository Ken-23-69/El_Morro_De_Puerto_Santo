    
    //intitucion galeria// Datos de las 11 instituciones
const institutions = [
  {
    name: "Liceo; C.E. Leonor García",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Harvard es una universidad privada de investigación ubicada en Cambridge, Massachusetts. Fundada en 1636, es la institución de educación superior más antigua de los Estados Unidos y una de las más prestigiosas del mundo. Harvard ha educado a ocho presidentes estadounidenses y más de 150 premios Nobel.",
    founded: "1636",
    students: "731",
    location: "La Salina P/A, Vía Nacional, El Morro",
    category: "Instituto de Educación Secundaria"
  },
  {
    name: "Francisco (Chico) Marcano",
    image: "assets/img/work/Ambulatorio.webp",
    description: "El MIT es una universidad privada de investigación ubicada en Cambridge, Massachusetts. Es conocida mundialmente por su excelencia en ciencias, tecnología, ingeniería y matemáticas. Ha sido pionera en el desarrollo de tecnologías revolucionarias y ha producido numerosos emprendedores exitosos.",
    founded: "1861",
    students: "11,858",
    location: "El Olivito, CALLE",
    category: "Instituto de Salud"
  },
  {
    name: "Insopesca",
    image: "assets/img/work/insopesca2.webp",
    description: "Stanford es una universidad privada de investigación ubicada en California. Es reconocida por su proximidad a Silicon Valley y su fuerte enfoque en la innovación y el emprendimiento. Ha sido cuna de muchas empresas tecnológicas importantes y cuenta con uno de los fondos de dotación más grandes del mundo.",
    founded: "1885",
    students: "17,249",
    location: "Vía Nacional, El Morro de Puerto Santo",
    category: "Instituto de Pesca"
  },
  {
    name: "El Tucán",
    image: "assets/img/work/ElTucan.webp",
    description: "Oxford es la universidad más antigua del mundo de habla inglesa, ubicada en Inglaterra. Con una rica historia que se remonta al siglo XII, Oxford ha sido el hogar de brillantes mentes y ha contribuido significativamente al avance del conocimiento en todas las disciplinas académicas.",
    founded: "1096",
    students: "24,515",
    location: "Entrada Principal, El Morro de Puerto Santo",
    category: "Frigorífico, Instituto Privado"
  },
  {
    name: "Instituto de Espacios Acuaticos (INEA)",
    image: "assets/img/work/Inea.webp",
    description: "Cambridge es una universidad pública de investigación ubicada en Inglaterra. Fundada en 1209, es la segunda universidad más antigua del mundo de habla inglesa. Ha producido más premios Nobel que cualquier otra institución y es reconocida por su excelencia académica en todas las disciplinas.",
    founded: "1209",
    students: "25,000",
    location: "Vía Nacional, El Morro de Puerto Santo",
    category: "Instituto de Pesca"
  },
  {
    name: "Prefectura El Morro",
    image: "assets/img/work/Prefectura El Morro.webp",
    description: "Yale es una universidad privada de investigación ubicada en Connecticut. Es conocida por su sistema de colegios residenciales únicos y su fuerte tradición en artes liberales. Ha educado a cinco presidentes estadounidenses y numerosos líderes mundiales en diversos campos.",
    founded: "1701",
    students: "13,433",
    location: "Calle Cementerio/La Ceiba",
    category: "Instituto de Seguridad Pública"
  },
  {
    name: "U.E. Dr. Alberto Carnevalli",
    image: "assets/img/work/Anexo Dr. Alberto Carnevalli.webp",
    description: "Princeton es una universidad privada de investigación ubicada en Nueva Jersey. Es reconocida por su hermoso campus, su riguroso programa académico y su fuerte enfoque en la educación de pregrado. Tiene una de las dotaciones per cápita más altas del mundo.",
    founded: "1746",
    students: "886",
    location: " VHF",
    category: "Instituto de Educación"
  },
  {
    name: "U.E. Dr. Alberto Carnevalli (Anexo)",
    image: "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Columbia es una universidad privada de investigación ubicada en Nueva York. Es miembro de la Ivy League y hogar de la Escuela de Periodismo de Columbia, que otorga los prestigiosos premios Pulitzer. Su ubicación en Manhattan ofrece oportunidades únicas para estudiantes e investigadores.",
    founded: "1754",
    students: "33,413",
    location: "Nueva York, NY",
    category: "Universidad"
  },
  {
    name: "U.E. Simón Rodríguez",
    image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "La Universidad de Chicago es una universidad privada de investigación conocida por su riguroso ambiente académico y su enfoque en el pensamiento crítico. Ha sido pionera en muchas disciplinas académicas y ha producido numerosos premios Nobel, especialmente en economía.",
    founded: "1890",
    students: "17,834",
    location: "Chicago, IL",
    category: "Instituto de Educación"
  },
  {
    name: "C.E.I. Luis Beltrán Prieto Figueroa",
    image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "UPenn es una universidad privada de investigación ubicada en Filadelfia. Es miembro de la Ivy League y hogar de la prestigiosa Wharton School of Business. La universidad es conocida por su fuerte enfoque en la aplicación práctica del conocimiento académico.",
    founded: "1740",
    students: "28,201",
    location: "Filadelfia, PA",
    category: "Instituto de Educación"
  },
  {
    name: "",
    image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Caltech es una universidad privada de investigación especializada en ciencia e ingeniería. A pesar de su pequeño tamaño, ha producido un número desproporcionadamente alto de premios Nobel y es líder mundial en investigación científica y tecnológica.",
    founded: "1891",
    students: "2,397",
    location: "Pasadena, CA",
    category: "Instituto Tecnológico"
  }
];

// Variables globales
let currentIndex = 0;

// Elementos del DOM
const featuredImage = document.getElementById('featuredImage');
const imageCounter = document.getElementById('imageCounter');
const institutionCategory = document.getElementById('institutionCategory');
const institutionName = document.getElementById('institutionName');
const institutionLocation = document.getElementById('institutionLocation');
const institutionFounded = document.getElementById('institutionFounded');
const institutionStudents = document.getElementById('institutionStudents');
const thumbnailNav = document.getElementById('thumbnailNav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const viewDetailsBtn = document.getElementById('viewDetailsBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// Elementos del modal
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalDescription = document.getElementById('modalDescription');
const modalFounded = document.getElementById('modalFounded');
const modalStudents = document.getElementById('modalStudents');

// Inicializar la galería
function initGallery() {
  createThumbnails();
  updateGallery();
  bindEvents();
}

// Crear miniaturas
function createThumbnails() {
  thumbnailNav.innerHTML = '';
  institutions.forEach((institution, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    thumbnail.innerHTML = `
      <img src="${institution.image}" alt="${institution.name}" />
      <div class="thumbnail-overlay">
        <span class="thumbnail-name">${institution.name}</span>
      </div>
    `;
    thumbnail.addEventListener('click', () => goToSlide(index));
    thumbnailNav.appendChild(thumbnail);
  });
}

// Actualizar la galería
function updateGallery() {
  const institution = institutions[currentIndex];
  
  // Actualizar imagen principal
  featuredImage.src = institution.image;
  featuredImage.alt = institution.name;
  
  // Actualizar contador
  imageCounter.textContent = `${currentIndex + 1} / ${institutions.length}`;
  
  // Actualizar información
  institutionCategory.textContent = institution.category;
  institutionName.textContent = institution.name;
  institutionLocation.querySelector('span').textContent = institution.location;
  institutionFounded.textContent = institution.founded;
  institutionStudents.textContent = institution.students;
  
  // Actualizar miniaturas activas
  const thumbnails = thumbnailNav.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle('active', index === currentIndex);
  });
}

// Ir a una diapositiva específica
function goToSlide(index) {
  if (index >= 0 && index < institutions.length) {
    currentIndex = index;
    updateGallery();
  }
}

// Siguiente diapositiva
function nextSlide() {
  currentIndex = (currentIndex + 1) % institutions.length;
  updateGallery();
}

// Diapositiva anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + institutions.length) % institutions.length;
  updateGallery();
}

// Abrir modal
function openModal() {
  const institution = institutions[currentIndex];
  
  modalImage.src = institution.image;
  modalImage.alt = institution.name;
  modalCategory.textContent = institution.category;
  modalTitle.textContent = institution.name;
  modalLocation.querySelector('span').textContent = institution.location;
  modalDescription.textContent = institution.description;
  modalFounded.textContent = institution.founded;
  modalStudents.textContent = institution.students;
  
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Vincular eventos
function bindEvents() {
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  viewDetailsBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  
  // Cerrar modal al hacer clic fuera
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Enter' && document.activeElement === viewDetailsBtn) {
      openModal();
    }
  });
  
  // Soporte táctil para móviles
  let startX = 0;
  let endX = 0;
  
  featuredImage.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  featuredImage.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initGallery);

















//contenido fluir

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los divs principales
  const containers = document.querySelectorAll('.container-fluid.text-center');

  containers.forEach(container => {
    // Oculta el contenedor principal
    container.style.opacity = 0;
    container.style.transition = "opacity 1s";

    // Oculta los elementos animados internos
    const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
    animatedItems.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = "translateY(40px)";
      item.style.transition = "opacity 0.8s, transform 0.5s";
    });
  });

  // Observer para mostrar el contenedor y luego los elementos animados escalonados
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        container.style.opacity = 1;

        // Animación escalonada para los elementos internos
        const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
        animatedItems.forEach((item, idx) => {
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
          }, idx * 450); // 250ms de diferencia entre cada uno
        });

        observer.unobserve(container); // Solo una vez
      }
    });
  }, {
    threshold: 0.2
  });

  containers.forEach(container => {
    observer.observe(container);
  });
});
// ...código existente...



// filepath: c:\Users\usuario\Documents\My Proyecto\index.html
document.addEventListener("DOMContentLoaded", function() {
    const btnFlora = document.getElementById('btnFlora');
    const btnFauna = document.getElementById('btnFauna');
    const btnClima = document.getElementById('btnClima');
    const floraContent = document.getElementById('floraContent');
    const faunaContent = document.getElementById('faunaContent');
    const climaContent = document.getElementById('climaContent');

    btnFlora.addEventListener('click', function() {
        floraContent.style.display = 'block';
        faunaContent.style.display = 'none';
        climaContent.style.display = 'none';
        btnFlora.classList.add('active');
        btnFauna.classList.remove('active');
        btnClima.classList.remove('active');
    });

    btnFauna.addEventListener('click', function() {
        faunaContent.style.display = 'block';
        floraContent.style.display = 'none';
        climaContent.style.display = 'none';
        btnFauna.classList.add('active');
        btnFlora.classList.remove('active');
        btnClima.classList.remove('active');
    });

    btnClima.addEventListener('click', function() {
        climaContent.style.display = 'block';
        floraContent.style.display = 'none';
        faunaContent.style.display = 'none';
        btnClima.classList.add('active');
        btnFlora.classList.remove('active');
        btnFauna.classList.remove('active');
    });
});


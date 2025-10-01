import './style.css'

const animals = [
  {
    id: 1,
    name: 'African Elephant',
    type: 'Mammal',
    emoji: '🐘',
    description: 'The largest land animal on Earth, known for their intelligence, strong family bonds, and exceptional memory.',
    habitat: 'Savanna',
    lifespan: '60-70 years'
  },
  {
    id: 2,
    name: 'Bengal Tiger',
    type: 'Mammal',
    emoji: '🐅',
    description: 'A powerful predator with distinctive orange coat and black stripes, native to the forests of India and Bangladesh.',
    habitat: 'Forest',
    lifespan: '15-20 years'
  },
  {
    id: 3,
    name: 'Great White Shark',
    type: 'Fish',
    emoji: '🦈',
    description: 'An apex ocean predator with powerful jaws and keen senses, capable of detecting prey from great distances.',
    habitat: 'Ocean',
    lifespan: '40-70 years'
  },
  {
    id: 4,
    name: 'Bald Eagle',
    type: 'Bird',
    emoji: '🦅',
    description: 'A majestic bird of prey and symbol of freedom, known for their impressive wingspan and sharp vision.',
    habitat: 'Mountains',
    lifespan: '20-30 years'
  },
  {
    id: 5,
    name: 'Red Panda',
    type: 'Mammal',
    emoji: '🐼',
    description: 'An adorable tree-dwelling mammal with reddish-brown fur, native to the eastern Himalayas.',
    habitat: 'Forest',
    lifespan: '8-12 years'
  },
  {
    id: 6,
    name: 'Monarch Butterfly',
    type: 'Insect',
    emoji: '🦋',
    description: 'Known for their incredible migration journey spanning thousands of miles across North America.',
    habitat: 'Meadows',
    lifespan: '2-6 weeks'
  },
  {
    id: 7,
    name: 'Giraffe',
    type: 'Mammal',
    emoji: '🦒',
    description: 'The tallest living terrestrial animal, with a long neck that helps them reach high vegetation.',
    habitat: 'Savanna',
    lifespan: '20-25 years'
  },
  {
    id: 8,
    name: 'Sea Turtle',
    type: 'Reptile',
    emoji: '🐢',
    description: 'Ancient marine reptiles that have roamed the oceans for over 100 million years.',
    habitat: 'Ocean',
    lifespan: '50-100 years'
  },
  {
    id: 9,
    name: 'Gray Wolf',
    type: 'Mammal',
    emoji: '🐺',
    description: 'Highly social predators living in packs, known for their complex communication and hunting strategies.',
    habitat: 'Forest',
    lifespan: '6-8 years'
  }
];

let currentFilter = 'All';

function renderAnimals(filter = 'All') {
  const filteredAnimals = filter === 'All'
    ? animals
    : animals.filter(animal => animal.type === filter);

  return filteredAnimals.map(animal => `
    <div class="animal-card">
      <div class="animal-image">${animal.emoji}</div>
      <div class="animal-content">
        <h3>${animal.name}</h3>
        <span class="animal-type">${animal.type}</span>
        <p>${animal.description}</p>
        <div class="animal-stats">
          <div class="stat">
            <div class="stat-label">Habitat</div>
            <div class="stat-value">${animal.habitat}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Lifespan</div>
            <div class="stat-value">${animal.lifespan}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initApp() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    <header>
      <h1>Wildlife Explorer</h1>
      <p>Discover the wonders of the animal kingdom</p>
    </header>

    <div class="filter-bar">
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="All">All Animals</button>
        <button class="filter-btn" data-filter="Mammal">Mammals</button>
        <button class="filter-btn" data-filter="Bird">Birds</button>
        <button class="filter-btn" data-filter="Fish">Fish</button>
        <button class="filter-btn" data-filter="Reptile">Reptiles</button>
        <button class="filter-btn" data-filter="Insect">Insects</button>
      </div>
    </div>

    <div class="animal-grid">
      ${renderAnimals()}
    </div>

    <footer>
      <p>Protecting wildlife for future generations</p>
    </footer>
  `;

  const filterButtons = app.querySelectorAll('.filter-btn');
  const animalGrid = app.querySelector('.animal-grid');

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      currentFilter = filter;

      filterButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      animalGrid.style.opacity = '0';
      animalGrid.style.transform = 'scale(0.95)';
      animalGrid.style.transition = 'all 0.3s ease';

      setTimeout(() => {
        animalGrid.innerHTML = renderAnimals(filter);
        animalGrid.style.opacity = '1';
        animalGrid.style.transform = 'scale(1)';
      }, 300);
    });
  });
}

initApp();

const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme handling
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

const generateLottoNumbers = () => {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

const displayLottoNumbers = (numbers) => {
  lottoNumbersContainer.innerHTML = '';
  numbers.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('lotto-number');
    numberElement.textContent = number;
    lottoNumbersContainer.appendChild(numberElement);
  });
};

generateBtn.addEventListener('click', () => {
  const numbers = generateLottoNumbers();
  displayLottoNumbers(numbers);
});

// Initial generation
const initialNumbers = generateLottoNumbers();
displayLottoNumbers(initialNumbers);
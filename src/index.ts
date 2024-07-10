import main from './pages/main/main.hbs';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const result = main({ title: 'help' });

  root.innerHTML = result;
});

import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')!;

  container.classList.add('container');

  const nav = `
	<nav class="nav">
  <ul class="list nav__list">
    <li class="list__elem">
      <a class="link list__link" href="/pages/login/">Форма входа</a>
    </li>
    <li class="list__elem">
      <a class="link list__link" href="/pages/sign-in/">Форма регистрации</a>
    </li>
    <li class="list__elem">
      <a class="link list__link" href="/pages/error/500/">Ошибка 500</a>
    </li>
    <li class="list__elem">
      <a class="link list__link" href="/pages/error/404/">Ошибка 404</a>
    </li>
    <li class="list__elem">
      <a class="link list__link" href="/pages/profile/"
        >Профиль (в разработке)</a
      >
    </li>
    <li class="list__elem">
      <a class="link list__link" href="/pages/chat/">Чат (в разработке)</a>
    </li>
  </ul>
</nav>
	`;

  container.insertAdjacentHTML('afterbegin', nav);
});

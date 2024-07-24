import Handlebars from 'handlebars/runtime';

import button from '@partials/button.hbs';
import arrow from '@assets/icons/rounded-arrow/rounded-arrow.hbs';
import buttonWithArrow from '@partials/button-with-arrow.hbs';

import styles from './styles.module.scss';
import './index.scss';

Handlebars.registerPartial({ arrow, button });

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')!;

  container.classList.add(styles['container']);

  container.innerHTML = container.innerHTML.concat(
    buttonWithArrow({
      class: `${styles['button']} ${styles['button_with_arrow']}`,
      type: 'button',
    }),
  );
});

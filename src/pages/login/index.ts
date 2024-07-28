import Handlebars from 'handlebars/runtime';

import formTemplate from '@partials/form.hbs';
import input from '@partials/form-input.hbs';
import button from '@partials/button.hbs';

import data from './data';

import hashClasses from '@/utils/hash-classes';

import styles from './styles.module.scss';

Handlebars.registerPartial({ 'form-input': input, button });

const moduledData = hashClasses({ ...data }, styles);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')!;

  container.classList.add(styles['container']);

  const result = formTemplate(moduledData);

  container.insertAdjacentHTML('afterbegin', result);
});

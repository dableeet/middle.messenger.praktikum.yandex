import Handlebars from 'handlebars/runtime';

import formTemplate from '@partials/form.hbs';
import input from '@partials/form-input.hbs';
import button from '@partials/button.hbs';

import data from './data';

import hashClasses from '@/utils/hash-classes';

import styles from './styles.module.scss';

Handlebars.registerPartial('form-input', input);
Handlebars.registerPartial('button', button);

const moduledData = hashClasses(data, styles);

// console.log(moduledData);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container')!;

  const hashedClassName = Array.from(container.classList)
    .map((className) => styles[className])
    .join(' ');

  container.className = hashedClassName;

  const result = formTemplate(moduledData);

  container.innerHTML = result;
});

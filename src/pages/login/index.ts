import Handlebars from 'handlebars/runtime';

import formTemplate from '@partials/form.hbs';
import input from '@partials/form-input.hbs';
import button from '@partials/button.hbs';

import data from './data';

Handlebars.registerPartial('form-input', input);
Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container')!;

  const result = formTemplate(data);

  container.innerHTML = result;
});

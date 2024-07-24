import Handlebars from 'handlebars/runtime';

import data from './data';

import hashClasses from '@/utils/hash-classes';

import profileLayout from './profile.layout.hbs';

import button from '@partials/button.hbs';
import arrow from '@assets/icons/rounded-arrow/rounded-arrow.hbs';
import list from '@partials/list.hbs';

import styles from './styles.module.scss';

Handlebars.registerPartial({ arrow, button, list });

const moduledData = hashClasses({ ...data }, styles);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')!;

  container.classList.add(styles['container']);

  container.innerHTML = profileLayout(moduledData);
});

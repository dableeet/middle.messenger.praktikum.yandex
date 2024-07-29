import Handlebars from 'handlebars/runtime';

import data from './data';

import hashClasses from '@/utils/hash-classes';

import profileLayout from './profile.layout.hbs';
import formLayout from '@partials/form.hbs';

import button from '@partials/button.hbs';
import arrow from '@assets/icons/rounded-arrow/rounded-arrow.hbs';
import list from '@partials/list.hbs';
import input from '@partials/form-input.hbs';

import styles from './styles.module.scss';
import createDomNode from '@/utils/create-dom-node';

Handlebars.registerPartial({ arrow, button, list, 'form-input': input });

const moduledData = hashClasses({ ...data }, styles);

const portal = createDomNode(
  'div',
  'portal',
  `${styles['portal']} ${styles['portal_close']}`,
);

const modal = createDomNode('div', 'modal', styles['modal']);

const closeModal = (event: MouseEvent | KeyboardEvent) => {
  if (
    (event.target instanceof HTMLDivElement && event.target.id === modal.id) ||
    (event instanceof KeyboardEvent && event.key === 'Escape')
  ) {
    portal.classList.toggle(styles['portal_close']);

    modal.firstChild && modal.removeChild(modal.firstChild);
    portal.firstChild && portal.removeChild(portal.firstChild);

    modal.removeEventListener('click', closeModal);
    document.removeEventListener('keyup', closeModal);
  } else {
    return;
  }
};

const openModal = (innerHTML: string) => {
  portal.classList.toggle(styles['portal_close']);

  modal.insertAdjacentHTML('afterbegin', innerHTML);

  portal.appendChild(modal);

  modal.addEventListener('click', closeModal);
  document.addEventListener('keyup', closeModal);
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body')?.appendChild(portal);

  const container = document.querySelector('#container')!;

  container.classList.add(styles['container']);

  const profileHTML = profileLayout(
    moduledData['profileData'] as Record<string, unknown>,
  );

  const modalsData = moduledData['modalsData'] as Record<string, unknown>;

  const updateUserDataFormHTML = formLayout(
    modalsData['updateUserDataForm'] as Record<string, unknown>,
  );

  const updateUserPasswordFormHTML = formLayout(
    modalsData['updateUserPasswordForm'] as Record<string, unknown>,
  );

  container.insertAdjacentHTML('afterbegin', profileHTML);

  container.addEventListener('click', (event) => {
    const { target } = event;

    if (target instanceof HTMLButtonElement && target.dataset.action) {
      if (target.dataset.action === 'updateUserData') {
        openModal(updateUserDataFormHTML);
      }

      if (target.dataset.action === 'updateUserPassword') {
        openModal(updateUserPasswordFormHTML);
      }
    }
  });
});

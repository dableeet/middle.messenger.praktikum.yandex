import Handlebars from 'handlebars/runtime';

import data from './data';

import hashClasses from '@/utils/hash-classes';

import profileLayout from './profile.layout.hbs';
import formLayut from '@partials/form.hbs';

import button from '@partials/button.hbs';
import arrow from '@assets/icons/rounded-arrow/rounded-arrow.hbs';
import list from '@partials/list.hbs';
import input from '@partials/form-input.hbs';

import styles from './styles.module.scss';
import createPortal from '@/utils/create-portal';

Handlebars.registerPartial({ arrow, button, list, 'form-input': input });

const moduledData = hashClasses({ ...data }, styles);

const actions = {
  openModal: (
    modalContainer: HTMLDivElement,
    modalContainerClassName: string,
    className: string,
    styles: Record<string, string>,
  ) => {
    const modal = document.createElement('div');

    const modalsData = moduledData['modalsData'] as Record<string, unknown>;

    const from = formLayut(
      modalsData['changeUserDataForm'] as Record<string, unknown>,
    );

    modal.setAttribute('class', styles[className]);

    modalContainer.classList.toggle(styles[`${modalContainerClassName}_close`]);

    modal.insertAdjacentHTML('afterbegin', from);

    modalContainer.appendChild(modal);
  },

  closeModal: () => {},
};

document.addEventListener('DOMContentLoaded', () => {
  const portal = createPortal(`${styles['portal']} ${styles['portal_close']}`);

  const container = document.querySelector('#container')!;

  container.classList.add(styles['container']);

  const result = profileLayout(
    moduledData['profileData'] as Record<string, unknown>,
  );

  container.insertAdjacentHTML('afterbegin', result);

  container.addEventListener('click', (event) => {
    const { target } = event;

    if (target instanceof HTMLButtonElement && target.dataset.action) {
      const actionName = target.dataset.action as keyof typeof actions;

      const callback = actions[actionName];

      callback(portal, 'portal', 'modal', styles);
    }
  });
});

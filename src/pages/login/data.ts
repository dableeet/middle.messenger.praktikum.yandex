export default {
  title: 'Вход',
  inputs: [
    {
      span: {
        class: 'labeled-input form__input-box',
      },
      label: {
        class: 'labeled-input__label',
      },
      class: 'labeled-input__input',
      type: 'text',
      name: 'login',
      id: 'login',
      innerText: 'Логин',
    },
    {
      span: {
        class: 'labeled-input form__input-box',
      },
      label: {
        class: 'labeled-input__label',
      },
      class: 'labeled-input__input',
      type: 'password',
      name: 'password',
      id: 'password',
      innerText: 'Пароль',
    },
  ],
  buttons: [
    {
      type: 'submit',
      innerText: 'Войти',
      class: 'button button_submit',
    },
    {
      type: 'button',
      innerText: 'Нет аккаунта?',
      class: 'button button_signup',
    },
  ],
};

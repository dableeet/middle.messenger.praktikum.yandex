export default {
  name: 'form',
  title: 'Вход',
  class: 'form form_login',
  titleClass: 'title form__title form__title_login',
  inputGroupClass: 'input-group form__input-group',
  buttonGroupClass: 'button-group form__button-group',
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
      class: 'button button_submit button-group__button_mb',
    },
    {
      type: 'button',
      innerText: 'Нет аккаунта?',
      class: 'button button_blue button_text-s',
      redirectPath: '/pages/sign-in/',
    },
  ],
};

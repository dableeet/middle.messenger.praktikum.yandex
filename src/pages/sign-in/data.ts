export default {
  title: 'Регистрация',
  class: 'form_reg',
  titleClass: 'title form__title form__title_reg',
  inputs: [
    {
      span: {
        class: 'labeled-input form__input-box',
      },
      label: {
        class: 'labeled-input__label',
      },
      class: 'labeled-input__input',
      type: 'email',
      name: 'email',
      id: 'email',
      innerText: 'Почта',
    },
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
      type: 'text',
      name: 'first_name',
      id: 'fName',
      innerText: 'Имя',
    },
    {
      span: {
        class: 'labeled-input form__input-box',
      },
      label: {
        class: 'labeled-input__label',
      },
      class: 'labeled-input__input',
      type: 'text',
      name: 'second_name',
      id: 'sName',
      innerText: 'Фамилия',
    },
    {
      span: {
        class: 'labeled-input form__input-box',
      },
      label: {
        class: 'labeled-input__label',
      },
      class: 'labeled-input__input',
      type: 'tel',
      name: 'phone',
      id: 'phone',
      innerText: 'Телефон',
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
    {
      span: {
        class: 'labeled-input form__input-box',
      },
      label: {
        class: 'labeled-input__label',
      },
      class: 'labeled-input__input',
      type: 'password',
      name: 'password-test',
      id: 'password-test',
      innerText: 'Пароль (еще раз)',
    },
  ],
  buttons: [
    {
      type: 'submit',
      innerText: 'Создать аккаунт',
      class: 'button_submit button-group__button_mb',
    },
    {
      type: 'button',
      innerText: 'Войти',
      class: 'button_no-background button_redirect',
      redirectPath: '/pages/login/',
    },
  ],
};

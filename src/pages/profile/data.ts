import avatarIcon from '@assets/icons/avatar-circle/avatar.svg';
import arrowRoundedIcon from '@assets/icons/rounded-arrow/rounded-arrow.svg';

const userData = {
  name: 'Иван',
  surname: 'Иванов',
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  chatName: 'Иван',
  phone: '+7 (909) 967 30 30',
};

export default {
  modalsData: {
    updateUserDataForm: {
      name: 'updateUserDataForm',
      class: 'form form_update',
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
          type: 'email',
          name: 'email',
          id: 'email',
          innerText: 'Почта',
          value: userData.email,
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
          value: userData.login,
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
          value: userData.name,
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
          value: userData.surname,
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
          name: 'chat_name',
          id: 'chName',
          innerText: 'Имя в чате',
          value: userData.chatName,
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
          value: userData.phone,
        },
      ],
      buttons: [
        {
          type: 'submit',
          innerText: 'Сохранить',
          class: 'button button_submit',
        },
      ],
    },
    updateUserPasswordForm: {
      name: 'updateUserPasswordForm',
      class: 'form form_update_password',
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
          type: 'password',
          name: 'oldPassword',
          id: 'oldPassword',
          innerText: 'Старый пароль',
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
          innerText: 'Новый пароль',
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
          name: 'checkPassword',
          id: 'checkPassword',
          innerText: 'Повторите новый пароль',
        },
      ],
      buttons: [
        {
          type: 'submit',
          innerText: 'Сохранить',
          class: 'button button_submit',
        },
      ],
    },
  },
  profileData: {
    class: 'profile',
    returnButton: {
      type: 'button',
      class: 'button button_with_arrow',
      image: {
        src: arrowRoundedIcon,
        alt: 'arrow',
      },
    },
    avatarButton: {
      type: 'button',
      class: 'button button_avatar profile__avatar-btn',
      image: {
        class: 'button_avatar__image',
        src: avatarIcon,
        alt: 'avatar',
      },
    },
    title: {
      class: 'profile__username',
      value: userData.name,
    },
    lists: [
      {
        class: 'list profile__user-data-list',
        items: [
          {
            class: 'list__item',
            title: {
              class: 'list__item__title',
              innerText: 'Почта',
            },
            value: { class: 'list__item__value', innerText: userData.email },
          },
          {
            class: 'list__item',
            title: {
              class: 'list__item__title',
              innerText: 'Логин',
            },
            value: { class: 'list__item__value', innerText: userData.login },
          },
          {
            class: 'list__item',
            title: {
              class: 'list__item__title',
              innerText: 'Имя',
            },
            value: { class: 'list__item__value', innerText: userData.name },
          },
          {
            class: 'list__item',
            title: {
              class: 'list__item__title',
              innerText: 'Фамилия',
            },
            value: { class: 'list__item__value', innerText: userData.surname },
          },
          {
            class: 'list__item',
            title: {
              class: 'list__item__title',
              innerText: 'Имя в чате',
            },
            value: { class: 'list__item__value', innerText: userData.chatName },
          },
          {
            class: 'list__item',
            title: {
              class: 'list__item__title',
              innerText: 'Телефон',
            },
            value: { class: 'list__item__value', innerText: userData.phone },
          },
        ],
      },
      {
        class: 'list profile__button-group',
        items: [
          {
            class: 'list__item',
            button: {
              class: 'button button_blue button_text-m',
              type: 'button',
              innerText: 'Изменить данные',
              actionType: 'updateUserData',
            },
          },
          {
            class: 'list__item',
            button: {
              class: 'button button_blue button_text-m',
              type: 'button',
              innerText: 'Изменить пароль',
              actionType: 'updateUserPassword',
            },
          },
          {
            class: 'list__item',
            button: {
              class: 'button button_red button_text-m',
              type: 'button',
              innerText: 'Выйти',
              actionType: 'logout',
            },
          },
        ],
      },
    ],
  },
};

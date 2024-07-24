const userData = {
  name: 'Иван',
  surname: 'Иванов',
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  chatName: 'Иван',
  phone: '+7 (909) 967 30 30',
};

export default {
  class: 'profile',
  returnButton: {
    type: 'button',
    class: 'button button_with_arrow',
    image: {
      src: '../../assets/icons/rounded-arrow/rounded-arrow.svg',
      alt: 'arrow',
    },
  },
  avatarButton: {
    type: 'button',
    class: 'button button_avatar profile__avatar-btn',
    image: {
      class: 'button_avatar__image',
      src: '../../assets/icons/avatar-circle/avatar.svg',
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
          },
        },
        {
          class: 'list__item',
          button: {
            class: 'button button_blue button_text-m',
            type: 'button',
            innerText: 'Изменить пароль',
          },
        },
        {
          class: 'list__item',
          button: {
            class: 'button button_red button_text-m',
            type: 'button',
            innerText: 'Выйти',
          },
        },
      ],
    },
  ],
};

export const INPUTS: { [x: string]: { [x: string]: string } } = {
    name: {
        placeholder: 'Укажите Ваше имя',
        validation: '[a-z]',
        type: 'text'
    },
    email: {
        placeholder: 'Укажите Вашу почту',
        // eslint-disable-next-line
        validation: '[a-z]\@[a-z]\.ru|com',
        type: 'email'
    },
    password: {
        placeholder: 'Укажите Ваш пароль',
        validation: '[a-z]',
        type: 'password'
    },
    birthday: {
        placeholder: 'Укажите Вашу дату рождения',
        // eslint-disable-next-line
        validation: '[0-9]\.[0-9]\.[0-9]',
        type: 'date'
    },
    gender: {
        placeholder: 'Укажите Ваш пол',
        validation: '[a-z]',
        type: 'text'
    },
    avatar: {
        placeholder: 'Загрузите аватар',
        validation: '',
        type: 'text'
    }
}
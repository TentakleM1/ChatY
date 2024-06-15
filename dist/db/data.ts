
type Data = {
    chats: Record<string, any>[],
    profile: Record<string, any>
}

export const data: Data = {
    chats: [
        {
            profile_name: 'Andray',
            img: 'картинка',
            messages: [
                {
                    author: 'you',
                    message: 'Привет',
                    date: '12:30'
                },
                {
                    author: 'Andray',
                    message: 'Хэй!) Рад тебя слышать чувааааак!',
                    date: '12:35'
                }
            ],
            newMessage: 1
        },
        {
            profile_name: 'Sofia',
            img: 'картинка',
            messages: [
                {
                    author: 'Sofia',
                    message: 'Где моя зажигалка ?',
                    date: '18:30'
                },
                {
                    author: 'you',
                    message: 'Хз, я тебе её отдавал еще на перерыве, как вернулся',
                    date: '19:30'
                }
            ],
            newMessage: 0
        },
        {
            profile_name: 'Gina',
            img: 'картинка',
            messages: [
                {
                    author: 'you',
                    message: 'Пока',
                    date: '12:30'
                },
                {
                    author: 'Gina',
                    message: 'Ну давай',
                    date: '12:35'
                }
            ],
            newMessage: 1
        }
    ],
    profile: {
        first_name: 'Олег',
        second_name: 'Рыгыль',
        login: 'oleg',
        email: 'olg@mail.ru',
        phone: '+73498354443',
        password: 'hE3ugrskd'

    }
}


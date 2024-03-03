export function validation(name: string, value: string) {
    const errors: string[] = []

    if(name === 'login') {

        if(value.length < 3 || value.length > 20) {
            errors.push('от 3 до 20 символов');
        }

        if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
            errors.push('Логин может содержать только латинские буквы, цифры, дефис и нижнее подчеркивание');

        }
                
        if (/^[0-9]+$/.test(value)) {
            errors.push('Логин не может состоять только из цифр');

        }
                
        if (/\s/.test(value)) {
            errors.push('Логин не может содержать пробелы');

        }
            
    
    }

    if(name === 'password' || name === 'repitpassword') {
 
        if (value.length < 8 || value.length > 40) {
            errors.push('Пароль должен быть от 8 до 40 символов');

        }
                
        if (!/[A-Z]/.test(value)) {
            errors.push('Пароль должен содержать хотя бы одну заглавную букву');

        }
                
        if (!/[0-9]/.test(value)) {
            errors.push('Пароль должен содержать хотя бы одну цифру');

        }
                
    }

    if(name === 'first_name' || name === 'second_name') {

        if (!/^[А-ЯЁа-яёA-Za-z-]+$/.test(value)) {
            errors.push('Имя должно содержать только буквы и дефис');

        }
                  
        if (!/^[А-ЯЁA-Z]/.test(value)) {
            errors.push('Имя должно начинаться с заглавной буквы');

        }
                  
        if (/\s/.test(value)) {
            errors.push('Имя не может содержать пробелы');

        }
                  
        if (/[0-9]/.test(value)) {
            errors.push('Имя не может содержать цифры');

        }
                       
    }

    if(name === 'email') {

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            errors.push('Введите корректный email');

        }

    }

    if(name === 'phone') {

        if(value.length > 15) {
            errors.push('Введите корректный номер телефона');

        }
                    
        if (!/^((\+7|7|8)+([0-9]){10})|(([0-9]){10})$/.test(value)) {
            errors.push('Введите корректный номер телефона');

        }

    }

    if(name === 'message') {
        if(value.length <= 0) {
            errors.push('Не должно быть пустым');
        }
    }
    
    return errors
}


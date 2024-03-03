import { auth } from './src/pages/auth/auth'
import { registration } from './src/pages/registration/registration'
import { chats } from './src/pages/chats/chats' 
import { error } from './src/pages/404/404'
import { profile } from './src/pages/profile/profile'
import { eddit } from './src/pages/eddit/eddit'

import { validation } from './src/core/validation/validation'

import { data } from './public/db/data'

document.addEventListener("DOMContentLoaded", () => {
    const root: HTMLElement = document.getElementById("app")
    root.innerHTML = ''

    const location = window.location.pathname

    const page = (path: string) => {
        if(path === '/' || path === '') {
            window.location.href = '/login'
        } else if(path === '/login') {
            return auth()
        } else if(path === '/registration') {
            return registration()
        } else if(path === '/messages') {
            return chats(data.chats, data.profile_name)
        } else if(path === '/profile') {
            return profile(data.profile)
        } else if(path === '/profile/eddit') {
            return eddit(data.profile)
        } else {
            const names = data.chats.map((name) => name.profile_name)
            const name = path.split('/')[1]
            if(names.includes(name)) {
                return chats(data.chats, name)
            }
        }  

        return error()  
    }
    root.innerHTML = page(location)

    const form = document.getElementById('form')

    if(form != null) {
        form.addEventListener('click', (e) => {
            const elem: HTMLInputElement = e.target

            elem.onfocus= () => {
                elem.style.borderBottomColor = '#3369f3'
            }

            elem.onblur = () => {
                const errors = validation(elem.name, elem.value)
                if (errors.length > 0) {
                    elem.style.borderBottomColor = 'red';
                    alert(errors.join('\n'))
                }
            }
            
        }) 
    }

    document.addEventListener('click', (e) => {
        const button: HTMLElement = e.target
        const errors = []
        const data = {}

        if(button.id === 'btn') {
            const elements = Array.from(form).filter(elem => {
                if(elem.tagName === 'INPUT') {
                    return elem
                } 
            })

            elements.forEach((elem) => {
                validation(elem.name, elem.value).forEach((error) => { errors.push(error) })
            })

            if(errors.length > 0) {
                alert(errors.join('\n'))
            } else {
                elements.forEach((elem) => {
                    data[elem.name] = elem.value
                })
               console.log(data) 
            }
            
        }

        if(button.id === 'link') {

            window.location.href = button.getAttribute('data-next-location')
        }

        if(button.id === 'send') {
            const message = document.querySelectorAll('input')[1]
            const error = validation(message.name, message.value)[0]
            if(error === undefined) {
                data[message.name] = message.value
                console.log(data)
            } else {
                errors.push(error)
            }
            
            if(errors.length > 0) {
                alert(errors.join('\n'))
            }
        }
    })
    
})



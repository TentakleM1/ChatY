import Handlebars from "handlebars"

export const profileTypeInfo = ({type, info}) => {
    return Handlebars.compile(
        `<div class="profile-type-info">
            <div class="profile-type">
                <h4>{{type}}</h4>
            </div>
            <div class="profile-info">
                <span>{{info}}</span>
            </div> 
        </div>`
    )({type, info})
}

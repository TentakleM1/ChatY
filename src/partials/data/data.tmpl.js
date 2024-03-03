import Handlebars from "handlebars"

export const data = ({data}) => {
    return Handlebars.compile(
        `<div class="data-wrap">
            <span class="data">{{data}}</span>
        </div>`
    )({data})
}

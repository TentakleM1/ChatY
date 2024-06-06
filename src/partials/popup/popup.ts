import { Block } from "../../core/block";
import Input from "../input/input";
import Button from "../button/button";
import { template } from "./popup.tmpl";


export function showPopUp(type: string) {
  const element = document.getElementById(type);
  
  element.style.cssText += 'top: 0;';

}

export function closePopup(type: string) {
    const element = event.target;
    const popup = document.getElementById(type);
    if(element.id == type) {
      popup.style.cssText += 'top: -1000px;';
    } else if(element.type === 'button') {
      popup.style.cssText += 'top: -1000px;';
    }
  }

export default class PopUp extends Block {
    constructor(props) {
      super({
        id: props.id,
        capital: props.capital,
        styles: 'popup',
        children: {
          input: new Input({
            name: 'popup',
            type: props.type,
            idForLable: props.idForLable,
            selectorInput: 'search',
            selecrtorLable: 'search-lable'
          }),
          button: new Button({
            name: 'buttonProfile',
            selectorWrap: 'wrap-editing',
            text: props.text,
            events: {
              click: props.click
            }
          })
  
        },
        events: {
          click: () => { closePopup(props.id); }
        }
      })
    }
  
    public render(): DocumentFragment {
      return this.compile(template, this.props);
    }
  }


import { Block } from "../../core/block";
import Input from "../input/input";
import Button from "../button/button";
import { template } from "./popup.tmpl";


export function showPopUp(type: string) {
  const element = document.getElementById('popup');
  
  element.style.cssText += 'top: 0;';

}

export function closePopup() {
    const element = event.target;
    const popup = document.getElementById('popup');

    if(element.id == 'popup') {
      popup.style.cssText += 'top: -1000px;';
    } else if(element.type === 'button') {
      popup.style.cssText += 'top: -1000px;';
    }
  }

export default class PopUp extends Block {
    constructor(props) {
      super({
        id: 'popup',
        capital: props.capital,
        styles: 'popup',
        children: {
          input: new Input({
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
          click: closePopup
        }
      })
    }
  
    public render(): DocumentFragment {
      return this.compile(template, this.props);
    }
  }


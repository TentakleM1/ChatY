import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import EventBus from './EventBus/eventBus'

type Object = Record<string, any>

export class Block<P extends Record<string, any> = any> {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_RENDER: "flow:render",
      FLOW_CDU: 'flow:component-did-update'
    };

    eventBus: () => EventBus;
    props: P;
    _id = nanoid(6)
    children: Record<string, Block> = {}
  
  _element: HTMLElement = this._createDocumentElement('div');
  _meta: Object = {};
  
  /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
  constructor(props: P, tagName: string = 'div') {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };
  
    this.props = this._makePropsProxy(props);

    this.children = this._setChildren()

    this.eventBus = () => eventBus;
  
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _setStyles(): string {
    return this.props.styles
  }

  private _setChildren(): Object {
    return this.props.children
  }

  private _setEvents() {
    const {events = {}} =this.props

    if(events) {
      Object.keys(events).forEach((eventName) => {

        if(eventName === 'blur') {
          this._element.querySelector('input')?.addEventListener(eventName, events[eventName])
        } else {
          this._element.addEventListener(eventName, events[eventName])
        }
        
      })
    }
  }
  
  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }
  
  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
    if(this._setStyles()) {
      this._element.className = this._setStyles()
    }

  }
  
  public init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  private _componentDidMount() {
    // this.componentDidMount();s
  }
  
  // Может переопределять пользователь, необязательно трогать
  public componentDidMount(_ldProps: Object) {}
  
  public dispatchComponentDidMoun() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
 private _componentDidUpdate(oldProps: Object, newProps: Object) {
    const response = this.componentDidUpdate(oldProps, newProps);
      if (response) {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
      }
  }
  
  // Может переопределять пользователь, необязательно трогать
  public componentDidUpdate(_oldProps: Object, _newProps: Object) {
    return true;
  }
  
  public setProps = (nextProps: Object) => {
     if (!nextProps) {
        return;
      }
  
      const oldProps = { ...this.props };
      Object.assign(this.props, nextProps);
  
      const shouldUpdate = this.componentDidUpdate(oldProps, nextProps);
      if (shouldUpdate) {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
      }
    
  };
  
  get element() {
    return this._element;
  }
    
  private _render() {
    const block: any = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element.append(block);
    
    this._setEvents()
  }
  
  // Может переопределять пользователь, необязательно трогать
  public render() {}

  public compile(template: string, context: Object): DocumentFragment {
    const contextAndStubs = { ...context };
    const arraysElementMap = new Map();

    if(this.children) {
      Object.entries(this.children).forEach(([name, child]: [string, any]) => {
        if (Array.isArray(child)) {
            const arrayElementsId = nanoid();
            contextAndStubs[name] = `<div data-id="${arrayElementsId}"></div>`;
            arraysElementMap.set(name, arrayElementsId);
            // console.log(arraysElementMap)
        } else contextAndStubs[name] = `<div data-id="${child._id}"></div>`;
    });
    }

    const temp = document.createElement('template');
    temp.innerHTML = Handlebars.compile(template)(contextAndStubs);

    if(this.children) {
      Object.entries(this.children).forEach(([name, child]: [string, Object]) => {
        const isElementArray = Array.isArray(child);
        const stub = isElementArray
            ? temp.content.querySelector(`[data-id="${arraysElementMap.get(name)}"]`)
            : temp.content.querySelector(`[data-id="${child._id}"]`);
        if (!stub) return;
        if (isElementArray) {
            const nodeArray = child.map((childItem) => {
                childItem.getContent()?.append(...Array.from(stub.childNodes));
                return childItem.getContent();
            });
            stub.replaceWith(...nodeArray);
        } else {
            child.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(child.getContent());
        }
    });
    }
    
    return temp.content;
  }
  
  public getContent(): HTMLElement {
    return this.element;
  }
  
  private _makePropsProxy(props: P): P {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    // const self = this;
    const proxyProps = new Proxy(props, {
      get(target: any, prop) {
        return target[prop]
      },
      
      set(target, prop, value) {
        target[prop] = value
        return true
      },
      
      deleteProperty() {
        throw new Error('нет доступа')
      }
    })
    return proxyProps;
  }
  
  private _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }
  
  public show() {
    this.getContent().style.display = "block";
  }
  
  public hide() {
    this.getContent().style.display = "none";
  }
  }

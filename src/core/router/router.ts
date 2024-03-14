import { Block } from '../block';

export class Router {
    constructor() {
        if(Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;

        Router.__instance = this
    }

    public use(path: string, block: Block)  {
        const route 

        this.routes.push(route);

        return this;
    }

    public start() {
        window.onpopstate = event => {
            this._onRoute(event.currentTarget.location.pathname);
          };
      
          this._onRoute(window.location.pathname);
    }

    public go(path: string) {
        this.history.pushState({}, "", path);
        this._onRoute(path);
    }

    public back() {

    }

    public forward() {

    }

}

import { Block } from '../block';
import Route from './route';

export class Router {

    routes: Block[] = []

    constructor(rootQuery: string) {
        if(Router.__instance) {
            return Router.__instance;
        }

        this.routes;
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this
    }

    public use(path: string, block: Block)  {
        const route: Route = new Route(path, block, { rootQuery: this._rootQuery });
        this.routes.push(route);

        return this;
    }

    public start() {
        window.onpopstate = event => {
            this._onRoute(event.currentTarget.location.pathname);
          };
      
          this._onRoute(window.location.pathname);
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render(route, pathname);
    }

    public go(path: string) {
        this.history.pushState({}, "", path);
        this._onRoute(path);
    }

    public back() {
        window.history.back();
    }

    public forward() {
        window.history.forward();
    }

    public getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }

}

import { Block } from "../block";
import { Route } from "./route";

class Router {
    routes: Route[] = [];

    history = window.history;

    _currentRoute: Route | null = null;

    __instance?: Router;

    _rootQuery: string = '#app';

    constructor(rootQuery?: string) {
        if(Router.__instance) {
            return Router.__instance;
        };

        this.routes = [];

        this._currentRoute = null;

        if(rootQuery) this._rootQuery = rootQuery;

        this.history = window.history;

        Router.__instance = this;
    }

    public use(path: string, block: Block) {
        // Вместо трёх точек напишем отдельную сущность — об этом речь пойдёт ниже
        const route = new Route(path, block, { rootQuery: this._rootQuery });

        this.routes.push(route);
        // Возврат this — основа паттерна "Builder" («Строитель»)
        return this;
    }

    public start() { // Запустить роутинг
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = event => {
            this._onRoute(event.currentTarget?.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    private _onRoute(path: string) {
        const route = this.getRoute(path);
        
        if (route && this._currentRoute) {
            this._currentRoute.leave();
        }

        if (route) {
            this._currentRoute = route;
            route.render();
        }
    }

    public go(path: string) {
        this.history.pushState({}, '', path);
        this._onRoute(path);

    }

    public getRoute(path: string) {
        return this.routes.find(route => route.match(path));
    }

    public back() { // переход назад по истории браузера
        this.history.back();
    }

    public forward() { // переход вперёд по истории браузера
        this.history.forward();
    }
}

export const router = new Router();

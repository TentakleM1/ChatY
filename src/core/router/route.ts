import render  from "../utils/render/render";
import isEqual from "../utils/isEqual/isEqual";

export default class Route<P extends Record<string, any> = any> {

    _pathname: string;

    _blockClass: any;

    _block: any | null;

    _props: P;

    constructor(pathname: string, view: any, props: P) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    public navigate(pathname: string) {
        if(this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    public leave() {
        if(this._block) {
            this._block.hide();
        }
    }

    public match(pathname: string): boolean {
        return isEqual(pathname, this._pathname);
    }

    public render(): void {
        if(!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            return;
        }

        render(this._props.rootQuery, this._block)
    }

}   

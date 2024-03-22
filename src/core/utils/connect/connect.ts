import { Block } from "../../block";
import store, { StoreEvents } from "../../store/Store";

  export const connect = <T extends Record<string, any>>(mapStateToProps:
    (data: any) => any) => {
    return (Component: typeof Block<T>) => {
        return class extends Component {
            constructor(props: any) {
                super({ ...props, ...mapStateToProps(store.getState()) });
                store.on(StoreEvents.Updated, () => {
                    const newProps = mapStateToProps(store.getState());
                    this.setProps(newProps);
                });
            }
        };
    };
};

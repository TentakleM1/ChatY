import { Block } from "../../block";
import store, { StoreEvents } from "../../store/Store";
import isEqual from "../isEqual/isEqual";

  export const connect = <T extends Record<string, any>>(mapStateToProps: (data: any) => any) => {

    return (Component: typeof Block<T>) => {
    
        return class extends Component {

            constructor(props: any) {

                let state = mapStateToProps(store.getState());
                super({ ...props, ...state });
                store.on(StoreEvents.Updated, () => {
                    const newProps = mapStateToProps(store.getState());
                    if(!isEqual(state, newProps)) {
                        this.setProps(newProps);
                    }
                    
                    state = newProps;

                });

            }
        };
    };
};

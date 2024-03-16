import EventBus from "../EventBus/eventBus";
import set from "../utils/merge/merge";

export enum StoreEvents {
    Updated = 'updated',
  }

export default class Store extends EventBus {
    private state: unknown = {};
  
    public getState() {
      return state;
    };
  
    public set(path: string, value: unknown) {
      set(this.state, path, value);

      this.emit(StoreEvents.Updated);
    };
  } 

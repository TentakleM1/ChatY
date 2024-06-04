import EventBus from "../EventBus/eventBus";
import set from "../utils/merge/merge";

export enum StoreEvents {
    Updated = 'updated',
  }

class Store extends EventBus {
    private state: unknown = {};
  
    public getState(): Record<string, unknown> {
      return this.state;
    }; 
  
    public set(path: string, value: unknown) {
      try {
        set(this.state, path, value);
        this.emit(StoreEvents.Updated, this.getState());
      } catch(e) {
        console.log(e);
      }
    };

    public getUser() {
      return this.getState().user ?? {};
    }

    public getMessageList(id: number) {
      const messages = this.getMessages();
      return messages[id];
    }

    public getMessages() {
      return this.getState().messages ?? {};
    }

    public getMessage() {
      return this.getState().message ?? {};
    }

  } 

export default new Store();

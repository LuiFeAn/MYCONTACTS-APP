

export default class EventManager {

    constructor() {
        this.listeners = new Map();
    }

    on(event,listener) {

       if( !this.listeners.has(event)) {
            this.listeners.set(event,[]);
       }

       this.listeners.get(event).push(listener);

    }

    emit(event,payload) {

        if( !this.listeners.has(event) ){
            return;
        }

        this.listeners.get(event).forEach( listener => {
            listener(payload);
        });

    }

    off(event,offListener) {

        const listeners = this.listeners[event];

        if( !this.listeners.get(event) ){
            return;
        }

        const filtredListeners = listeners.filter( listener => (
            listener != offListener
        ));

        this.listeners.set(event,filtredListeners);

    }

}

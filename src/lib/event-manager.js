

export default class EventManager {

    constructor() {
        this.listeners = [];
    }

    on(event,listener) {

       if( !this.listeners[event] ) {
        this.listeners[event] = [];
       }

       this.listeners[event].push(listener);

    }

    emit(event,payload) {

        if( !this.listeners[event] ){
            return;
        }

        this.listeners[event].forEach( listener => {
            listener(payload);
        });

    }

    off(event,offListener) {

        const listeners = this.listeners[event];

        if( !this.listeners[event] ){
            return;
        }

        const filtredListeners = listeners.filter( listener => (
            listener != offListener
        ));

        this.listeners[event] = filtredListeners;

    }

}

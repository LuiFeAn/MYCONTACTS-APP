import EventManager from '../lib/event-manager';

export const toastEventManager = new EventManager();

export default function toast ({ type, text, duration = 3000 }) {

    toastEventManager.emit('addtoast',{
        type,
        text,
        duration
    });

}

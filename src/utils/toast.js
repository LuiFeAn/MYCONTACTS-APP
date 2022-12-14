import EventManager from '../lib/event-manager';

export const toastEventManager = new EventManager();

export default function toast ({ type, text }) {

    toastEventManager.emit('addtoast',{
        type,
        text
    });

}

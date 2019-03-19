class EventHandler {

    constructor(sharedCanvas) {
        this._sharedCanvas = sharedCanvas;
        // this._events = new WeakMap();
        // this._events.set(this, {});
        this._events = {};
        this.addEventListener = this.addEventListener.bind(this);
        this._sharedCanvas.addEventListener = this.addEventListener;
        this.removeEventListener = this.removeEventListener.bind(this);
        this._sharedCanvas.removeEventListener = this.removeEventListener;
    }

    addEventListener(type, listener, options) {
        // let events = this._events.get(this);
        let events = this._events;
        if (!events) {
            events = {};
            // this._events.set(this, events);
            this._events = {};
        }

        if (!events[type]) {
            events[type] = [];
        }

        events[type].push(listener);
    }

    removeEventListener(type, listener) {
        // const listeners = this._events.get(this)[type];
        const listeners = this._events[type];
        if (listeners && listeners.length > 0) {
            for (let i = listeners.length; i > 0; i-- ) {
                if (listeners[i] === listener) {
                    listeners.splice(i , i);
                    break;
                }
            }
        }
    }
    
    dispatchEvents(eventData, eventTypes) {
        if (eventTypes && eventTypes.length) {
            let listeners = [];
            for (let i = 0 ; i < eventTypes.length; i++) {
                let type = eventTypes[i];
                // let funcs =  this._events.get(this)[type];
                let funcs = this._events[type];
                if (funcs && funcs.length && funcs.length > 0) {
                    for (let j = 0; j < funcs.length; j++) {
                        listeners.push(funcs[j]);
                    }
                }

            }
            if (listeners && listeners.length > 0) {
                for (let i = 0; i < listeners.length; i++ ) {
                    let listener = listeners[i];
                    // if (listener && eventData.changedTouches && eventData.changedTouches.length > 0) {
                    //     let originalEvent =  eventData.changedTouches[0];
                    //     if (originalEvent) {
                    //         originalEvent.pointerType = '';
                    //         listener(originalEvent);
                    //     }
                        
                    // }
                    if (listener) {
                        listener(eventData);
                    }
                }
            }
        }
    }

    createTouchEvent(ev, type) {
        const touchEvent = new TouchEvent(type, this._sharedCanvas);
        touchEvent.touches =
        touchEvent.targetTouches = Array.from(ev.touches)
        touchEvent.changedTouches = ev.changedTouches
        touchEvent.timeStamp = ev.timeStamp
        return touchEvent;
    }

    _onTouchStart(ev) {

        const touchEvent = this.createTouchEvent(ev, 'touchstart'); 
        this.dispatchEvents( touchEvent, ['pointerdown', 'touchstart', 'mousedown']);
    }

    _onTouchMove(ev) {

        const touchEvent = this.createTouchEvent(ev, 'touchmove');
        this.dispatchEvents( touchEvent, ['pointermove', 'touchmove', 'mousemove']);
    }

    _onTouchEnd(ev) {
        
        const touchEvent = this.createTouchEvent(ev, 'touchend');
        this.dispatchEvents(touchEvent , ['pointerup', 'touchend', 'mouseout']);

    } 
    _onTouchCancel(ev) {

        const touchEvent = this.createTouchEvent(ev, 'touchcancel');
        this.dispatchEvents( touchEvent, ['pointercancel', 'touchcancel', 'pointerleave', 'mouseover']);
    }

    addEvents() {

        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this._onTouchCancel = this._onTouchCancel.bind(this);

        wx.onTouchStart(this._onTouchStart);
        wx.onTouchMove(this._onTouchMove);
        wx.onTouchEnd(this._onTouchEnd);
        wx.onTouchCancel(this._onTouchCancel);
    }

    offEvents() {

        wx.offTouchStart(this._onTouchStart);
        wx.offTouchMove(this._onTouchMove);
        wx.offTouchEnd(this._onTouchEnd);
        wx.offTouchCancel(this._onTouchCancel);
    }

    enable(enable) {
        if (enable) {
            this.addEvents();
        } else {
            this.offEvents();
        }
    }
}

export default EventHandler;
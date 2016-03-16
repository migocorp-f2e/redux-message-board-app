import 'es6-promise';
import 'isomorphic-fetch';
import Firebase from 'firebase';

const firebaseRef = new Firebase('https://message-board-app.firebaseIO.com/lists');

export default function appMiddleware () {
    return next => action => {
        const { fetchAPI, types } = action;
        //如果沒有fetchAPI這個type,就直接去reducers處理
        if (!fetchAPI) {
            return next(action);
        }
        //藉由ES6的寫法把types讀進來
        const [ success, failure ] = types;
        const fredRef = firebaseRef.child(fetchAPI.child);
        switch (fetchAPI.method) {
            case 'set':
                fredRef.push(fetchAPI.value);
                break;
            case 'del':
                fredRef.child(fetchAPI.val).remove();
                break;
            case 'get':
                fredRef.on('value', (snapshot) => {
                    next(success(snapshot.val()));
                }, (error) => {
                    next(failure(error.code));
                });
                break;
            default:
                return true;
        }
    };
}
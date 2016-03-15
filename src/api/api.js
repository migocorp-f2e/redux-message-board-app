import Firebase from 'firebase';

const methods = ['get', 'post', 'put', 'patch', 'del'];

class _FirebaseApiClient {
    constructor() {
        methods.forEach((method) =>
            this[method] = (children, {data} = {}) => new Promise((resolve, reject) => {
            const ref = new Firebase('https://messageboardapp.firebaseio.com/' + `${children}`);
            switch (method) {
                case 'get':
                    ref.on('value', (snapshot) => {
                      resolve(snapshot.val());
                    }, (error) => {
                      reject(error.code);
                    });
                    break;
                case 'post':
                    //todo 參考firebase api
                    ref.set(data);
                    break;
                default:
                    return true;
            }
        }));
    }
}

const FirebaseApiClient = _FirebaseApiClient;

export {
    FirebaseApiClient
};

import Firebase from 'firebase';

const methods = ['get', 'post', 'put', 'patch', 'del'];

class _FirebaseApiClient {
  constructor() {
    methods.forEach((method) =>
      this[method] = (children, {data} = {}) => new Promise((resolve, reject) => {
        const ref = new Firebase('https://redux-message-board.firebaseio.com/' + `${children}`);
        switch (method) {
          case 'get':
            ref.on('value', (snapshot) => {
              resolve(snapshot.val());
            }, (error) => {
              reject(error.code);
            });
            break;
          case 'post':
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

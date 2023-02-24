// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'back-porta',
    appId: '1:466656491481:web:0d815c55f8b0809af40bc8',
    storageBucket: 'back-porta.appspot.com',
    apiKey: 'AIzaSyB3n7Scw7SYMxdl1af7k4z5QCcdfsGBtZg',
    authDomain: 'back-porta.firebaseapp.com',
    messagingSenderId: '466656491481',
  },
  production: false,
  API_SIGNIN: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3n7Scw7SYMxdl1af7k4z5QCcdfsGBtZg",
  API_REGISTER: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3n7Scw7SYMxdl1af7k4z5QCcdfsGBtZg"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

import * as Redux from 'redux';

declare module 'redux' {
  export interface Store {
    sagaTask: any; // provide the types for `store.sagaTask` here
  }
}

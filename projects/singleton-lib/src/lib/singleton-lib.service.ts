import {Injectable} from '@angular/core';
import {SessionStore} from './stores/session.store';

@Injectable({providedIn: 'root'})
export class SingletonLibService {

  constructor(private _sessionStore: SessionStore) {
  }

  public makeQuery(): void {
    console.log('I\'m making a query');
    console.log('Here\'s my store', this._sessionStore);
  }

  public updateUserName(newName: string) {
    this._sessionStore.update({ name: newName });
  }
}

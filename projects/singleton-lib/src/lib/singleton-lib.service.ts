import {Injectable} from '@angular/core';
import {SessionStore} from './stores/session.store';

@Injectable({providedIn: 'root'})
export class SingletonLibService {

  constructor(private _sessionStore: SessionStore) {
  }

  public updateUserName(newName: string) {
    this._sessionStore.update({name: newName});
  }
}

import {Component} from '@angular/core';
import {SingletonLibService} from 'singleton-lib';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component {
  constructor(private _singletonLibService: SingletonLibService) {
  }

  updateName() {
    this._singletonLibService.updateUserName("app-1-view-1");
  }
}

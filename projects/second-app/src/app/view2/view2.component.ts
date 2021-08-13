import {Component} from '@angular/core';
import {SingletonLibService} from 'singleton-lib';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component {
  constructor(private _singletonLibService: SingletonLibService) {
  }

  updateName() {
    this._singletonLibService.updateUserName("app-2-view-2");
  }
}

import {Component, OnInit} from '@angular/core';
import {SingletonLibService} from 'singleton-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'second-app';

  constructor(private _singletonLibService: SingletonLibService) {
  }

  ngOnInit(): void {
    this._singletonLibService.makeQuery();
  }
}

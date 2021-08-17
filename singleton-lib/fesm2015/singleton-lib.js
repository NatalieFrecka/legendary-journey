import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { __decorate } from 'tslib';
import { Store, StoreConfig } from '@datorama/akita';

function createInitialState() {
    return {
        token: '',
        name: ''
    };
}
let SessionStore = class SessionStore extends Store {
    constructor() {
        super(createInitialState());
    }
};
SessionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SessionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SessionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SessionStore, providedIn: 'root' });
SessionStore = __decorate([
    StoreConfig({ name: 'session' })
], SessionStore);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SessionStore, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });

class SingletonLibService {
    constructor(_sessionStore) {
        this._sessionStore = _sessionStore;
    }
    updateUserName(newName) {
        this._sessionStore.update({ name: newName });
    }
}
SingletonLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibService, deps: [{ token: SessionStore }], target: i0.ɵɵFactoryTarget.Injectable });
SingletonLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: SessionStore }]; } });

class SingletonLibModule {
}
SingletonLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SingletonLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibModule });
SingletonLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                }]
        }] });

/*
 * Public API Surface of singleton-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SingletonLibModule, SingletonLibService };
//# sourceMappingURL=singleton-lib.js.map

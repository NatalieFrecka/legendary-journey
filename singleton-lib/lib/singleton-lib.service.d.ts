import { SessionStore } from './stores/session.store';
import * as i0 from "@angular/core";
export declare class SingletonLibService {
    private _sessionStore;
    constructor(_sessionStore: SessionStore);
    updateUserName(newName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SingletonLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SingletonLibService>;
}

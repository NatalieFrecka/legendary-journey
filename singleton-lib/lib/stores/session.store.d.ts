import { Store } from '@datorama/akita';
import * as i0 from "@angular/core";
export interface SessionState {
    token: string;
    name: string;
}
export declare function createInitialState(): SessionState;
export declare class SessionStore extends Store<SessionState> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SessionStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SessionStore>;
}

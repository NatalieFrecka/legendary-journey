import { __decorate } from "tslib";
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export function createInitialState() {
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
export { SessionStore };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SessionStore, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NpbmdsZXRvbi1saWIvc3JjL2xpYi9zdG9yZXMvc2Vzc2lvbi5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU96QyxNQUFNLFVBQVUsa0JBQWtCO0lBQ2hDLE9BQU87UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO0tBQ1QsQ0FBQztBQUNKLENBQUM7SUFJWSxZQUFZLFNBQVosWUFBYSxTQUFRLEtBQW1CO0lBQ25EO1FBQ0UsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTt5R0FKWSxZQUFZOzZHQUFaLFlBQVksY0FGQSxNQUFNO0FBRWxCLFlBQVk7SUFEeEIsV0FBVyxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO0dBQ2xCLFlBQVksQ0FJeEI7U0FKWSxZQUFZOzJGQUFaLFlBQVk7a0JBRnhCLFVBQVU7bUJBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yZSwgU3RvcmVDb25maWd9IGZyb20gJ0BkYXRvcmFtYS9ha2l0YSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlc3Npb25TdGF0ZSB7XG4gIHRva2VuOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZSgpOiBTZXNzaW9uU3RhdGUge1xuICByZXR1cm4ge1xuICAgIHRva2VuOiAnJyxcbiAgICBuYW1lOiAnJ1xuICB9O1xufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbkBTdG9yZUNvbmZpZyh7bmFtZTogJ3Nlc3Npb24nfSlcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmUgZXh0ZW5kcyBTdG9yZTxTZXNzaW9uU3RhdGU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoY3JlYXRlSW5pdGlhbFN0YXRlKCkpO1xuICB9XG59XG4iXX0=
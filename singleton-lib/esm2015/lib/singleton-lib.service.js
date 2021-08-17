import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./stores/session.store";
export class SingletonLibService {
    constructor(_sessionStore) {
        this._sessionStore = _sessionStore;
    }
    updateUserName(newName) {
        this._sessionStore.update({ name: newName });
    }
}
SingletonLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibService, deps: [{ token: i1.SessionStore }], target: i0.ɵɵFactoryTarget.Injectable });
SingletonLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: SingletonLibService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.SessionStore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldG9uLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2luZ2xldG9uLWxpYi9zcmMvbGliL3NpbmdsZXRvbi1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFJekMsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixZQUFvQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUMvQyxDQUFDO0lBRU0sY0FBYyxDQUFDLE9BQWU7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnSEFQVSxtQkFBbUI7b0hBQW5CLG1CQUFtQixjQURQLE1BQU07MkZBQ2xCLG1CQUFtQjtrQkFEL0IsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZXNzaW9uU3RvcmV9IGZyb20gJy4vc3RvcmVzL3Nlc3Npb24uc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b25MaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXNzaW9uU3RvcmU6IFNlc3Npb25TdG9yZSkge1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVVzZXJOYW1lKG5ld05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nlc3Npb25TdG9yZS51cGRhdGUoe25hbWU6IG5ld05hbWV9KTtcbiAgfVxufVxuIl19
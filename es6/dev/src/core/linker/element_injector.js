import { Injector, UNDEFINED } from 'angular2/src/core/di/injector';
export class ElementInjector extends Injector {
    constructor(_view, _nodeIndex) {
        super();
        this._view = _view;
        this._nodeIndex = _nodeIndex;
    }
    get(token) {
        var result = this._view.injectorGet(token, this._nodeIndex, UNDEFINED);
        if (result === UNDEFINED) {
            result = this._view.parentInjector.get(token);
        }
        return result;
    }
    getOptional(token) {
        var result = this._view.injectorGet(token, this._nodeIndex, UNDEFINED);
        if (result === UNDEFINED) {
            result = this._view.parentInjector.getOptional(token);
        }
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtYWlsWFVYcXcudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X2luamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUNPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLCtCQUErQjtBQUdqRSxxQ0FBcUMsUUFBUTtJQUMzQyxZQUFvQixLQUFtQixFQUFVLFVBQWtCO1FBQUksT0FBTyxDQUFDO1FBQTNELFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQWEsQ0FBQztJQUVqRixHQUFHLENBQUMsS0FBVTtRQUNaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCbGFuaywgc3RyaW5naWZ5fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtJbmplY3RvciwgVU5ERUZJTkVEfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaS9pbmplY3Rvcic7XG5pbXBvcnQge0FwcFZpZXd9IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50SW5qZWN0b3IgZXh0ZW5kcyBJbmplY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXc6IEFwcFZpZXc8YW55PiwgcHJpdmF0ZSBfbm9kZUluZGV4OiBudW1iZXIpIHsgc3VwZXIoKTsgfVxuXG4gIGdldCh0b2tlbjogYW55KTogYW55IHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5fdmlldy5pbmplY3RvckdldCh0b2tlbiwgdGhpcy5fbm9kZUluZGV4LCBVTkRFRklORUQpO1xuICAgIGlmIChyZXN1bHQgPT09IFVOREVGSU5FRCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fdmlldy5wYXJlbnRJbmplY3Rvci5nZXQodG9rZW4pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0T3B0aW9uYWwodG9rZW46IGFueSk6IGFueSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX3ZpZXcuaW5qZWN0b3JHZXQodG9rZW4sIHRoaXMuX25vZGVJbmRleCwgVU5ERUZJTkVEKTtcbiAgICBpZiAocmVzdWx0ID09PSBVTkRFRklORUQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX3ZpZXcucGFyZW50SW5qZWN0b3IuZ2V0T3B0aW9uYWwodG9rZW4pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=
import { APP_ID, NgZone, Provider, PLATFORM_COMMON_PROVIDERS, PLATFORM_INITIALIZER, APPLICATION_COMMON_PROVIDERS } from 'angular2/core';
import { DirectiveResolver, ViewResolver } from 'angular2/compiler';
import { Parse5DomAdapter } from 'angular2/src/platform/server/parse5_adapter';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { MockAnimationBuilder } from 'angular2/src/mock/animation_builder_mock';
import { MockDirectiveResolver } from 'angular2/src/mock/directive_resolver_mock';
import { MockViewResolver } from 'angular2/src/mock/view_resolver_mock';
import { MockLocationStrategy } from 'angular2/src/mock/mock_location_strategy';
import { LocationStrategy } from 'angular2/src/router/location/location_strategy';
import { MockNgZone } from 'angular2/src/mock/ng_zone_mock';
import { TestComponentBuilder } from 'angular2/src/testing/test_component_builder';
import { XHR } from 'angular2/src/compiler/xhr';
import { BrowserDetection } from 'angular2/src/testing/utils';
import { COMPILER_PROVIDERS } from 'angular2/src/compiler/compiler';
import { DOCUMENT } from 'angular2/src/platform/dom/dom_tokens';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';
import { RootRenderer } from 'angular2/src/core/render/api';
import { DomRootRenderer, DomRootRenderer_ } from 'angular2/src/platform/dom/dom_renderer';
import { DomSharedStylesHost, SharedStylesHost } from 'angular2/src/platform/dom/shared_styles_host';
import { EventManager, EVENT_MANAGER_PLUGINS, ELEMENT_PROBE_PROVIDERS } from 'angular2/platform/common_dom';
import { DomEventsPlugin } from 'angular2/src/platform/dom/events/dom_events';
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Log } from 'angular2/src/testing/utils';
function initServerTests() {
    Parse5DomAdapter.makeCurrent();
    BrowserDetection.setup();
}
/**
 * Default patform providers for testing.
 */
export const TEST_SERVER_PLATFORM_PROVIDERS = CONST_EXPR([
    PLATFORM_COMMON_PROVIDERS,
    new Provider(PLATFORM_INITIALIZER, { useValue: initServerTests, multi: true })
]);
function appDoc() {
    try {
        return DOM.defaultDoc();
    }
    catch (e) {
        return null;
    }
}
/**
 * Default application providers for testing.
 */
export const TEST_SERVER_APPLICATION_PROVIDERS = CONST_EXPR([
    // TODO(julie): when angular2/platform/server is available, use that instead of making our own
    // list here.
    APPLICATION_COMMON_PROVIDERS,
    COMPILER_PROVIDERS,
    new Provider(DOCUMENT, { useFactory: appDoc }),
    new Provider(DomRootRenderer, { useClass: DomRootRenderer_ }),
    new Provider(RootRenderer, { useExisting: DomRootRenderer }),
    EventManager,
    new Provider(EVENT_MANAGER_PLUGINS, { useClass: DomEventsPlugin, multi: true }),
    new Provider(XHR, { useClass: XHR }),
    new Provider(APP_ID, { useValue: 'a' }),
    new Provider(SharedStylesHost, { useExisting: DomSharedStylesHost }),
    DomSharedStylesHost,
    ELEMENT_PROBE_PROVIDERS,
    new Provider(DirectiveResolver, { useClass: MockDirectiveResolver }),
    new Provider(ViewResolver, { useClass: MockViewResolver }),
    Log,
    TestComponentBuilder,
    new Provider(NgZone, { useClass: MockNgZone }),
    new Provider(LocationStrategy, { useClass: MockLocationStrategy }),
    new Provider(AnimationBuilder, { useClass: MockAnimationBuilder }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1haWxYVVhxdy50bXAvYW5ndWxhcjIvcGxhdGZvcm0vdGVzdGluZy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUix5QkFBeUIsRUFDekIsb0JBQW9CLEVBQ3BCLDRCQUE0QixFQUU3QixNQUFNLGVBQWU7T0FDZixFQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBQyxNQUFNLG1CQUFtQjtPQUUxRCxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkNBQTZDO09BRXJFLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3Q0FBd0M7T0FDaEUsRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQztPQUN0RSxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDO09BQ3hFLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQ0FBc0M7T0FDOUQsRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQztPQUN0RSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0RBQWdEO09BQ3hFLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDO09BRWxELEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw2Q0FBNkM7T0FDekUsRUFBQyxHQUFHLEVBQUMsTUFBTSwyQkFBMkI7T0FDdEMsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QjtPQUVwRCxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZ0NBQWdDO09BQzFELEVBQUMsUUFBUSxFQUFDLE1BQU0sc0NBQXNDO09BQ3RELEVBQUMsR0FBRyxFQUFDLE1BQU0sdUNBQXVDO09BQ2xELEVBQUMsWUFBWSxFQUFDLE1BQU0sOEJBQThCO09BQ2xELEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0NBQXdDO09BQ2pGLEVBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSw4Q0FBOEM7T0FFM0YsRUFDTCxZQUFZLEVBQ1oscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN4QixNQUFNLDhCQUE4QjtPQUM5QixFQUFDLGVBQWUsRUFBQyxNQUFNLDZDQUE2QztPQUVwRSxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQjtPQUU1QyxFQUFDLEdBQUcsRUFBQyxNQUFNLDRCQUE0QjtBQUU5QztJQUNFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFFRDs7R0FFRztBQUNILE9BQU8sTUFBTSw4QkFBOEIsR0FBMkMsVUFBVSxDQUFDO0lBQy9GLHlCQUF5QjtJQUN6QixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0NBQzdFLENBQUMsQ0FBQztBQUVIO0lBQ0UsSUFBSSxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFFO0lBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsT0FBTyxNQUFNLGlDQUFpQyxHQUMxQyxVQUFVLENBQUM7SUFDVCw4RkFBOEY7SUFDOUYsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxDQUFDO0lBQzVDLElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0lBQzNELElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUMsQ0FBQztJQUMxRCxZQUFZO0lBQ1osSUFBSSxRQUFRLENBQUMscUJBQXFCLEVBQUUsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUM3RSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUM7SUFDbEMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLENBQUM7SUFDbEUsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0lBQ2xFLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0lBQ3hELEdBQUc7SUFDSCxvQkFBb0I7SUFDcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0lBQzVDLElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFDLENBQUM7SUFDaEUsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztDQUNqRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSUQsXG4gIE5nWm9uZSxcbiAgUHJvdmlkZXIsXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBSZW5kZXJlclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXIsIFZpZXdSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvY29tcGlsZXInO1xuXG5pbXBvcnQge1BhcnNlNURvbUFkYXB0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9zZXJ2ZXIvcGFyc2U1X2FkYXB0ZXInO1xuXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcbmltcG9ydCB7TW9ja0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2FuaW1hdGlvbl9idWlsZGVyX21vY2snO1xuaW1wb3J0IHtNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2RpcmVjdGl2ZV9yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja1ZpZXdSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svdmlld19yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja0xvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL21vY2tfbG9jYXRpb25fc3RyYXRlZ3knO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL2xvY2F0aW9uX3N0cmF0ZWd5JztcbmltcG9ydCB7TW9ja05nWm9uZX0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svbmdfem9uZV9tb2NrJztcblxuaW1wb3J0IHtUZXN0Q29tcG9uZW50QnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdGVzdF9jb21wb25lbnRfYnVpbGRlcic7XG5pbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3hocic7XG5pbXBvcnQge0Jyb3dzZXJEZXRlY3Rpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy90ZXN0aW5nL3V0aWxzJztcblxuaW1wb3J0IHtDT01QSUxFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9jb21waWxlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnMnO1xuaW1wb3J0IHtET019IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHtSb290UmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlbmRlci9hcGknO1xuaW1wb3J0IHtEb21Sb290UmVuZGVyZXIsIERvbVJvb3RSZW5kZXJlcl99IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3JlbmRlcmVyJztcbmltcG9ydCB7RG9tU2hhcmVkU3R5bGVzSG9zdCwgU2hhcmVkU3R5bGVzSG9zdH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9zaGFyZWRfc3R5bGVzX2hvc3QnO1xuXG5pbXBvcnQge1xuICBFdmVudE1hbmFnZXIsXG4gIEVWRU5UX01BTkFHRVJfUExVR0lOUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNcbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uX2RvbSc7XG5pbXBvcnQge0RvbUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvZG9tX2V2ZW50cyc7XG5cbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtMb2d9IGZyb20gJ2FuZ3VsYXIyL3NyYy90ZXN0aW5nL3V0aWxzJztcblxuZnVuY3Rpb24gaW5pdFNlcnZlclRlc3RzKCkge1xuICBQYXJzZTVEb21BZGFwdGVyLm1ha2VDdXJyZW50KCk7XG4gIEJyb3dzZXJEZXRlY3Rpb24uc2V0dXAoKTtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHBhdGZvcm0gcHJvdmlkZXJzIGZvciB0ZXN0aW5nLlxuICovXG5leHBvcnQgY29uc3QgVEVTVF9TRVJWRVJfUExBVEZPUk1fUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IENPTlNUX0VYUFIoW1xuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTLFxuICBuZXcgUHJvdmlkZXIoUExBVEZPUk1fSU5JVElBTElaRVIsIHt1c2VWYWx1ZTogaW5pdFNlcnZlclRlc3RzLCBtdWx0aTogdHJ1ZX0pXG5dKTtcblxuZnVuY3Rpb24gYXBwRG9jKCkge1xuICB0cnkge1xuICAgIHJldHVybiBET00uZGVmYXVsdERvYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZhdWx0IGFwcGxpY2F0aW9uIHByb3ZpZGVycyBmb3IgdGVzdGluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IFRFU1RfU0VSVkVSX0FQUExJQ0FUSU9OX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW1xuICAgICAgLy8gVE9ETyhqdWxpZSk6IHdoZW4gYW5ndWxhcjIvcGxhdGZvcm0vc2VydmVyIGlzIGF2YWlsYWJsZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiBtYWtpbmcgb3VyIG93blxuICAgICAgLy8gbGlzdCBoZXJlLlxuICAgICAgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUyxcbiAgICAgIENPTVBJTEVSX1BST1ZJREVSUyxcbiAgICAgIG5ldyBQcm92aWRlcihET0NVTUVOVCwge3VzZUZhY3Rvcnk6IGFwcERvY30pLFxuICAgICAgbmV3IFByb3ZpZGVyKERvbVJvb3RSZW5kZXJlciwge3VzZUNsYXNzOiBEb21Sb290UmVuZGVyZXJffSksXG4gICAgICBuZXcgUHJvdmlkZXIoUm9vdFJlbmRlcmVyLCB7dXNlRXhpc3Rpbmc6IERvbVJvb3RSZW5kZXJlcn0pLFxuICAgICAgRXZlbnRNYW5hZ2VyLFxuICAgICAgbmV3IFByb3ZpZGVyKEVWRU5UX01BTkFHRVJfUExVR0lOUywge3VzZUNsYXNzOiBEb21FdmVudHNQbHVnaW4sIG11bHRpOiB0cnVlfSksXG4gICAgICBuZXcgUHJvdmlkZXIoWEhSLCB7dXNlQ2xhc3M6IFhIUn0pLFxuICAgICAgbmV3IFByb3ZpZGVyKEFQUF9JRCwge3VzZVZhbHVlOiAnYSd9KSxcbiAgICAgIG5ldyBQcm92aWRlcihTaGFyZWRTdHlsZXNIb3N0LCB7dXNlRXhpc3Rpbmc6IERvbVNoYXJlZFN0eWxlc0hvc3R9KSxcbiAgICAgIERvbVNoYXJlZFN0eWxlc0hvc3QsXG4gICAgICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgICAgIG5ldyBQcm92aWRlcihEaXJlY3RpdmVSZXNvbHZlciwge3VzZUNsYXNzOiBNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9KSxcbiAgICAgIG5ldyBQcm92aWRlcihWaWV3UmVzb2x2ZXIsIHt1c2VDbGFzczogTW9ja1ZpZXdSZXNvbHZlcn0pLFxuICAgICAgTG9nLFxuICAgICAgVGVzdENvbXBvbmVudEJ1aWxkZXIsXG4gICAgICBuZXcgUHJvdmlkZXIoTmdab25lLCB7dXNlQ2xhc3M6IE1vY2tOZ1pvbmV9KSxcbiAgICAgIG5ldyBQcm92aWRlcihMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IE1vY2tMb2NhdGlvblN0cmF0ZWd5fSksXG4gICAgICBuZXcgUHJvdmlkZXIoQW5pbWF0aW9uQnVpbGRlciwge3VzZUNsYXNzOiBNb2NrQW5pbWF0aW9uQnVpbGRlcn0pLFxuICAgIF0pO1xuIl19
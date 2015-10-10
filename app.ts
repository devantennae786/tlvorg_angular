import {HTTP_BINDINGS} from 'angular2/http';
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {DemoPage} from './demo-page';
import {About} from './components/about/about';
import {ROUTER_DIRECTIVES, RouteConfig, Location,routerBindings, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';

declare var System:any;

@Component(
    {
        selector: 'demo-app',
        templateUrl: './demo-app.html',
        directives:[DemoPage, About, ROUTER_DIRECTIVES]
    }
)

@RouteConfig([
    new Route({path: '/', component: DemoPage, as: 'Home'}),
    new Route({path: '/about/:id', component: About, as: 'About'}),
    new AsyncRoute({
        path: '/lazy',
        loader: () => ComponentHelper.LoadComponentAsync('LazyLoaded','./components/lazy-loaded/lazy-loaded'),
        as: 'Lazy'
    })
])
 
class MyDemoApp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path() === path;
    }
}

class ComponentHelper{

    static LoadComponentAsync(name,path){
        return System.import(path).then(c => c[name]);
    }
}

bootstrap(MyDemoApp,[routerBindings(MyDemoApp), HTTP_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);

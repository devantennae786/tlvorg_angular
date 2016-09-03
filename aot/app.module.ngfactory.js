import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/router/src/router_module';
import * as import8 from '@angular/http/src/http_module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/forms/src/form_builder';
import * as import21 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import26 from '@angular/common/src/location/hash_location_strategy';
import * as import27 from '@angular/common/src/location/location';
import * as import28 from '@angular/router/src/url_tree';
import * as import29 from '@angular/router/src/router_outlet_map';
import * as import30 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import31 from '../components/dependency-injection/address-book-title-service';
import * as import33 from './components/about/about.ngfactory';
import * as import34 from './demo-page.ngfactory';
import * as import35 from './components/spreadsheet/spreadsheet.ngfactory';
import * as import36 from './components/jquery-integration/jquery-integration.ngfactory';
import * as import37 from './components/react-integration/angular-2-host.ngfactory';
import * as import38 from './components/algorithms/algorithms.ngfactory';
import * as import39 from './components/algorithms/graph/graph.ngfactory';
import * as import40 from './components/pub-sub/pub-sub.ngfactory';
import * as import41 from './components/text-editor/text-editor.ngfactory';
import * as import42 from './components/dependency-injection/address-book.ngfactory';
import * as import43 from './components/http/http.ngfactory';
import * as import44 from './components/tree-view/tree-view-demo.ngfactory';
import * as import45 from './components/grid/grid-demo.ngfactory';
import * as import46 from './components/input-controls/input-controls.ngfactory';
import * as import47 from './components/contact-list/contact-list.ngfactory';
import * as import48 from './components/bound-textbox/bound-textbox.ngfactory';
import * as import49 from './components/non-bindable/non-bindable.ngfactory';
import * as import50 from './components/address-form/address-form.ngfactory';
import * as import51 from './components/change-detection/comment-demo.ngfactory';
import * as import52 from './components/access-child-components/parent.ngfactory';
import * as import53 from './components/survey/survey-demo.ngfactory';
import * as import54 from './components/log-tail/log-demo.ngfactory';
import * as import55 from './components/input-output/input-output-demo.ngfactory';
import * as import56 from './components/rxjs-streams/rxjs-streams.ngfactory';
import * as import57 from './components/rxjs-caching/caching-demo.ngfactory';
import * as import58 from './components/rxjs-buffering/rxjs-buffering.ngfactory';
import * as import59 from './components/lazy-loaded-tree-view/country-demo.ngfactory';
import * as import60 from './components/algorithms/graph/edge.ngfactory';
import * as import61 from './app.component.ngfactory';
import * as import62 from '@angular/core/src/application_tokens';
import * as import63 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import64 from '@angular/platform-browser/src/dom/events/key_events';
import * as import65 from '@angular/core/src/zone/ng_zone';
import * as import66 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import67 from '@angular/common/src/location/platform_location';
import * as import68 from '@angular/common/src/location/location_strategy';
import * as import69 from '../components/about/about';
import * as import70 from '../demo-page';
import * as import71 from '../components/spreadsheet/spreadsheet';
import * as import72 from '../components/jquery-integration/jquery-integration';
import * as import73 from '../components/react-integration/angular-2-host';
import * as import74 from '../components/algorithms/algorithms';
import * as import75 from '../components/algorithms/graph/graph';
import * as import76 from '../components/pub-sub/pub-sub';
import * as import77 from '../components/text-editor/text-editor';
import * as import78 from '../components/dependency-injection/address-book';
import * as import79 from '../components/http/http';
import * as import80 from '../components/tree-view/tree-view-demo';
import * as import81 from '../components/grid/grid-demo';
import * as import82 from '../components/input-controls/input-controls';
import * as import83 from '../components/contact-list/contact-list';
import * as import84 from '../components/bound-textbox/bound-textbox';
import * as import85 from '../components/non-bindable/non-bindable';
import * as import86 from '../components/address-form/address-form';
import * as import87 from '../components/change-detection/comment-demo';
import * as import88 from '../components/access-child-components/parent';
import * as import89 from '../components/survey/survey-demo';
import * as import90 from '../components/log-tail/log-demo';
import * as import91 from '../components/input-output/input-output-demo';
import * as import92 from '../components/rxjs-streams/rxjs-streams';
import * as import93 from '../components/rxjs-caching/caching-demo';
import * as import94 from '../components/rxjs-buffering/rxjs-buffering';
import * as import95 from '../components/lazy-loaded-tree-view/country-demo';
import * as import96 from '@angular/router/src/router';
import * as import97 from '@angular/core/src/console';
import * as import98 from '@angular/core/src/i18n/tokens';
import * as import99 from '@angular/core/src/error_handler';
import * as import100 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import101 from '@angular/platform-browser/src/dom/animation_driver';
import * as import102 from '@angular/core/src/render/api';
import * as import103 from '@angular/core/src/security';
import * as import104 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import105 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import106 from '@angular/http/src/interfaces';
import * as import107 from '@angular/http/src/http';
import * as import108 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import109 from '@angular/router/src/router_config_loader';
import * as import110 from '@angular/router/src/router_state';
import * as import111 from '@angular/core/src/i18n/tokens';
class AppModuleInjector extends import0.NgModuleInjector {
    constructor(parent) {
        super(parent, [
            import33.AboutNgFactory,
            import34.DemoPageNgFactory,
            import35.SpreadsheetNgFactory,
            import36.JqueryIntegrationNgFactory,
            import37.Angular2HostNgFactory,
            import38.AlgorithmsNgFactory,
            import39.GraphNgFactory,
            import40.PubSubNgFactory,
            import41.TextEditorNgFactory,
            import42.AddressBookNgFactory,
            import43.HttpSampleNgFactory,
            import44.TreeViewDemoNgFactory,
            import45.GridDemoNgFactory,
            import46.InputControlsNgFactory,
            import47.ContactListNgFactory,
            import48.BoundTextboxNgFactory,
            import49.IgnoreBindingsNgFactory,
            import50.AddressFormNgFactory,
            import51.CommentDemoNgFactory,
            import52.ParentNgFactory,
            import53.SurveyDemoNgFactory,
            import54.LogDemoNgFactory,
            import55.InputOutputDemoNgFactory,
            import56.RxJsStreamsNgFactory,
            import57.CachingDemoNgFactory,
            import58.RxJsBufferingNgFactory,
            import59.CountryDemoNgFactory,
            import60.EdgeNgFactory,
            import61.AppComponentNgFactory
        ], [import61.AppComponentNgFactory]);
    }
    get _LOCALE_ID_10() {
        if ((this.__LOCALE_ID_10 == null)) {
            (this.__LOCALE_ID_10 = null);
        }
        return this.__LOCALE_ID_10;
    }
    get _NgLocalization_11() {
        if ((this.__NgLocalization_11 == null)) {
            (this.__NgLocalization_11 = new import9.NgLocaleLocalization(this._LOCALE_ID_10));
        }
        return this.__NgLocalization_11;
    }
    get _ApplicationRef_16() {
        if ((this.__ApplicationRef_16 == null)) {
            (this.__ApplicationRef_16 = this._ApplicationRef__15);
        }
        return this.__ApplicationRef_16;
    }
    get _Compiler_17() {
        if ((this.__Compiler_17 == null)) {
            (this.__Compiler_17 = new import13.Compiler());
        }
        return this.__Compiler_17;
    }
    get _APP_ID_18() {
        if ((this.__APP_ID_18 == null)) {
            (this.__APP_ID_18 = import62._appIdRandomProviderFactory());
        }
        return this.__APP_ID_18;
    }
    get _DOCUMENT_19() {
        if ((this.__DOCUMENT_19 == null)) {
            (this.__DOCUMENT_19 = import4._document());
        }
        return this.__DOCUMENT_19;
    }
    get _HAMMER_GESTURE_CONFIG_20() {
        if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
            (this.__HAMMER_GESTURE_CONFIG_20 = new import14.HammerGestureConfig());
        }
        return this.__HAMMER_GESTURE_CONFIG_20;
    }
    get _EVENT_MANAGER_PLUGINS_21() {
        if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
            (this.__EVENT_MANAGER_PLUGINS_21 = [
                new import63.DomEventsPlugin(),
                new import64.KeyEventsPlugin(),
                new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_20)
            ]);
        }
        return this.__EVENT_MANAGER_PLUGINS_21;
    }
    get _EventManager_22() {
        if ((this.__EventManager_22 == null)) {
            (this.__EventManager_22 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import65.NgZone)));
        }
        return this.__EventManager_22;
    }
    get _DomSharedStylesHost_23() {
        if ((this.__DomSharedStylesHost_23 == null)) {
            (this.__DomSharedStylesHost_23 = new import16.DomSharedStylesHost(this._DOCUMENT_19));
        }
        return this.__DomSharedStylesHost_23;
    }
    get _AnimationDriver_24() {
        if ((this.__AnimationDriver_24 == null)) {
            (this.__AnimationDriver_24 = import4._resolveDefaultAnimationDriver());
        }
        return this.__AnimationDriver_24;
    }
    get _DomRootRenderer_25() {
        if ((this.__DomRootRenderer_25 == null)) {
            (this.__DomRootRenderer_25 = new import17.DomRootRenderer_(this._DOCUMENT_19, this._EventManager_22, this._DomSharedStylesHost_23, this._AnimationDriver_24));
        }
        return this.__DomRootRenderer_25;
    }
    get _RootRenderer_26() {
        if ((this.__RootRenderer_26 == null)) {
            (this.__RootRenderer_26 = import66._createConditionalRootRenderer(this._DomRootRenderer_25, this.parent.get(import66.NgProbeToken, null)));
        }
        return this.__RootRenderer_26;
    }
    get _DomSanitizer_27() {
        if ((this.__DomSanitizer_27 == null)) {
            (this.__DomSanitizer_27 = new import18.DomSanitizerImpl());
        }
        return this.__DomSanitizer_27;
    }
    get _Sanitizer_28() {
        if ((this.__Sanitizer_28 == null)) {
            (this.__Sanitizer_28 = this._DomSanitizer_27);
        }
        return this.__Sanitizer_28;
    }
    get _ViewUtils_29() {
        if ((this.__ViewUtils_29 == null)) {
            (this.__ViewUtils_29 = new import19.ViewUtils(this._RootRenderer_26, this._APP_ID_18, this._Sanitizer_28));
        }
        return this.__ViewUtils_29;
    }
    get _IterableDiffers_30() {
        if ((this.__IterableDiffers_30 == null)) {
            (this.__IterableDiffers_30 = import3._iterableDiffersFactory());
        }
        return this.__IterableDiffers_30;
    }
    get _KeyValueDiffers_31() {
        if ((this.__KeyValueDiffers_31 == null)) {
            (this.__KeyValueDiffers_31 = import3._keyValueDiffersFactory());
        }
        return this.__KeyValueDiffers_31;
    }
    get _SharedStylesHost_32() {
        if ((this.__SharedStylesHost_32 == null)) {
            (this.__SharedStylesHost_32 = this._DomSharedStylesHost_23);
        }
        return this.__SharedStylesHost_32;
    }
    get _FormBuilder_33() {
        if ((this.__FormBuilder_33 == null)) {
            (this.__FormBuilder_33 = new import20.FormBuilder());
        }
        return this.__FormBuilder_33;
    }
    get _RadioControlRegistry_34() {
        if ((this.__RadioControlRegistry_34 == null)) {
            (this.__RadioControlRegistry_34 = new import21.RadioControlRegistry());
        }
        return this.__RadioControlRegistry_34;
    }
    get _BrowserXhr_35() {
        if ((this.__BrowserXhr_35 == null)) {
            (this.__BrowserXhr_35 = new import22.BrowserXhr());
        }
        return this.__BrowserXhr_35;
    }
    get _ResponseOptions_36() {
        if ((this.__ResponseOptions_36 == null)) {
            (this.__ResponseOptions_36 = new import23.BaseResponseOptions());
        }
        return this.__ResponseOptions_36;
    }
    get _XSRFStrategy_37() {
        if ((this.__XSRFStrategy_37 == null)) {
            (this.__XSRFStrategy_37 = import8._createDefaultCookieXSRFStrategy());
        }
        return this.__XSRFStrategy_37;
    }
    get _XHRBackend_38() {
        if ((this.__XHRBackend_38 == null)) {
            (this.__XHRBackend_38 = new import24.XHRBackend(this._BrowserXhr_35, this._ResponseOptions_36, this._XSRFStrategy_37));
        }
        return this.__XHRBackend_38;
    }
    get _RequestOptions_39() {
        if ((this.__RequestOptions_39 == null)) {
            (this.__RequestOptions_39 = new import25.BaseRequestOptions());
        }
        return this.__RequestOptions_39;
    }
    get _Http_40() {
        if ((this.__Http_40 == null)) {
            (this.__Http_40 = import8.httpFactory(this._XHRBackend_38, this._RequestOptions_39));
        }
        return this.__Http_40;
    }
    get _LocationStrategy_41() {
        if ((this.__LocationStrategy_41 == null)) {
            (this.__LocationStrategy_41 = new import26.HashLocationStrategy(this.parent.get(import67.PlatformLocation), this.parent.get(import68.APP_BASE_HREF, null)));
        }
        return this.__LocationStrategy_41;
    }
    get _Location_42() {
        if ((this.__Location_42 == null)) {
            (this.__Location_42 = new import27.Location(this._LocationStrategy_41));
        }
        return this.__Location_42;
    }
    get _UrlSerializer_43() {
        if ((this.__UrlSerializer_43 == null)) {
            (this.__UrlSerializer_43 = new import28.DefaultUrlSerializer());
        }
        return this.__UrlSerializer_43;
    }
    get _RouterOutletMap_44() {
        if ((this.__RouterOutletMap_44 == null)) {
            (this.__RouterOutletMap_44 = new import29.RouterOutletMap());
        }
        return this.__RouterOutletMap_44;
    }
    get _NgModuleFactoryLoader_45() {
        if ((this.__NgModuleFactoryLoader_45 == null)) {
            (this.__NgModuleFactoryLoader_45 = new import30.SystemJsNgModuleLoader(this._Compiler_17, this.parent.get(import30.SystemJsNgModuleLoaderConfig, null)));
        }
        return this.__NgModuleFactoryLoader_45;
    }
    get _ROUTES_46() {
        if ((this.__ROUTES_46 == null)) {
            (this.__ROUTES_46 = [[
                    {
                        path: '',
                        redirectTo: '/about',
                        pathMatch: 'full'
                    },
                    {
                        path: 'about',
                        component: import69.About
                    },
                    {
                        path: 'demo',
                        component: import70.DemoPage,
                        children: [
                            {
                                path: 'spreadsheet',
                                component: import71.Spreadsheet
                            },
                            {
                                path: 'jquery',
                                component: import72.JqueryIntegration
                            },
                            {
                                path: 'react',
                                component: import73.Angular2Host
                            },
                            {
                                path: 'algorithms',
                                component: import74.Algorithms
                            },
                            {
                                path: 'graph',
                                component: import75.Graph
                            },
                            {
                                path: 'pub-sub',
                                component: import76.PubSub
                            },
                            {
                                path: 'text-editor',
                                component: import77.TextEditor
                            },
                            {
                                path: 'address',
                                component: import78.AddressBook
                            },
                            {
                                path: 'http',
                                component: import79.HttpSample
                            },
                            {
                                path: 'treeview',
                                component: import80.TreeViewDemo
                            },
                            {
                                path: 'grid',
                                component: import81.GridDemo
                            },
                            {
                                path: 'input',
                                component: import82.InputControls
                            },
                            {
                                path: 'contact',
                                component: import83.ContactList
                            },
                            {
                                path: 'textbox',
                                component: import84.BoundTextbox
                            },
                            {
                                path: 'non-bindable',
                                component: import85.IgnoreBindings
                            },
                            {
                                path: 'form',
                                component: import86.AddressForm
                            },
                            {
                                path: 'change',
                                component: import87.CommentDemo
                            },
                            {
                                path: 'parent-child',
                                component: import88.Parent
                            },
                            {
                                path: 'survey',
                                component: import89.SurveyDemo
                            },
                            {
                                path: 'redux',
                                component: import90.LogDemo
                            },
                            {
                                path: 'iodemo',
                                component: import91.InputOutputDemo
                            },
                            {
                                path: 'rxjs',
                                component: import92.RxJsStreams
                            },
                            {
                                path: 'friends',
                                component: import93.CachingDemo
                            },
                            {
                                path: 'buffering',
                                component: import94.RxJsBuffering
                            },
                            {
                                path: 'countries',
                                component: import95.CountryDemo
                            }
                        ]
                    }
                ]
            ]);
        }
        return this.__ROUTES_46;
    }
    get _ROUTER_CONFIGURATION_47() {
        if ((this.__ROUTER_CONFIGURATION_47 == null)) {
            (this.__ROUTER_CONFIGURATION_47 = {});
        }
        return this.__ROUTER_CONFIGURATION_47;
    }
    get _Router_48() {
        if ((this.__Router_48 == null)) {
            (this.__Router_48 = import7.setupRouter(this._ApplicationRef_16, this._UrlSerializer_43, this._RouterOutletMap_44, this._Location_42, this, this._NgModuleFactoryLoader_45, this._Compiler_17, this._ROUTES_46, this._ROUTER_CONFIGURATION_47));
        }
        return this.__Router_48;
    }
    get _ActivatedRoute_49() {
        if ((this.__ActivatedRoute_49 == null)) {
            (this.__ActivatedRoute_49 = import7.rootRoute(this._Router_48));
        }
        return this.__ActivatedRoute_49;
    }
    get _APP_BOOTSTRAP_LISTENER_50() {
        if ((this.__APP_BOOTSTRAP_LISTENER_50 == null)) {
            (this.__APP_BOOTSTRAP_LISTENER_50 = [import7.initialRouterNavigation(this._Router_48, this._ROUTER_CONFIGURATION_47)]);
        }
        return this.__APP_BOOTSTRAP_LISTENER_50;
    }
    get _AddressBookTitleService_51() {
        if ((this.__AddressBookTitleService_51 == null)) {
            (this.__AddressBookTitleService_51 = new import31.AddressBookTitleService());
        }
        return this.__AddressBookTitleService_51;
    }
    get _TRANSLATIONS_FORMAT_52() {
        if ((this.__TRANSLATIONS_FORMAT_52 == null)) {
            (this.__TRANSLATIONS_FORMAT_52 = null);
        }
        return this.__TRANSLATIONS_FORMAT_52;
    }
    createInternal() {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._ReactiveFormsModule_4 = new import6.ReactiveFormsModule();
        this._ROUTER_FORROOT_GUARD_5 = import7.provideForRootGuard(this.parent.get(import96.Router, null));
        this._RouterModule_6 = new import7.RouterModule(this._ROUTER_FORROOT_GUARD_5);
        this._FormsModule_7 = new import6.FormsModule();
        this._HttpModule_8 = new import8.HttpModule();
        this._AppModule_9 = new import1.AppModule();
        this._ErrorHandler_12 = import4.errorHandler();
        this._ApplicationInitStatus_13 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER, null));
        this._Testability_14 = new import11.Testability(this.parent.get(import65.NgZone));
        this._ApplicationRef__15 = new import12.ApplicationRef_(this.parent.get(import65.NgZone), this.parent.get(import97.Console), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_13, this.parent.get(import11.TestabilityRegistry, null), this._Testability_14);
        return this._AppModule_9;
    }
    getInternal(token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_4;
        }
        if ((token === import7.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_5;
        }
        if ((token === import7.RouterModule)) {
            return this._RouterModule_6;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_7;
        }
        if ((token === import8.HttpModule)) {
            return this._HttpModule_8;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_9;
        }
        if ((token === import98.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import99.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import10.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_13;
        }
        if ((token === import11.Testability)) {
            return this._Testability_14;
        }
        if ((token === import12.ApplicationRef_)) {
            return this._ApplicationRef__15;
        }
        if ((token === import12.ApplicationRef)) {
            return this._ApplicationRef_16;
        }
        if ((token === import13.Compiler)) {
            return this._Compiler_17;
        }
        if ((token === import62.APP_ID)) {
            return this._APP_ID_18;
        }
        if ((token === import100.DOCUMENT)) {
            return this._DOCUMENT_19;
        }
        if ((token === import14.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === import15.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === import15.EventManager)) {
            return this._EventManager_22;
        }
        if ((token === import16.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_23;
        }
        if ((token === import101.AnimationDriver)) {
            return this._AnimationDriver_24;
        }
        if ((token === import17.DomRootRenderer)) {
            return this._DomRootRenderer_25;
        }
        if ((token === import102.RootRenderer)) {
            return this._RootRenderer_26;
        }
        if ((token === import18.DomSanitizer)) {
            return this._DomSanitizer_27;
        }
        if ((token === import103.Sanitizer)) {
            return this._Sanitizer_28;
        }
        if ((token === import19.ViewUtils)) {
            return this._ViewUtils_29;
        }
        if ((token === import104.IterableDiffers)) {
            return this._IterableDiffers_30;
        }
        if ((token === import105.KeyValueDiffers)) {
            return this._KeyValueDiffers_31;
        }
        if ((token === import16.SharedStylesHost)) {
            return this._SharedStylesHost_32;
        }
        if ((token === import20.FormBuilder)) {
            return this._FormBuilder_33;
        }
        if ((token === import21.RadioControlRegistry)) {
            return this._RadioControlRegistry_34;
        }
        if ((token === import22.BrowserXhr)) {
            return this._BrowserXhr_35;
        }
        if ((token === import23.ResponseOptions)) {
            return this._ResponseOptions_36;
        }
        if ((token === import106.XSRFStrategy)) {
            return this._XSRFStrategy_37;
        }
        if ((token === import24.XHRBackend)) {
            return this._XHRBackend_38;
        }
        if ((token === import25.RequestOptions)) {
            return this._RequestOptions_39;
        }
        if ((token === import107.Http)) {
            return this._Http_40;
        }
        if ((token === import68.LocationStrategy)) {
            return this._LocationStrategy_41;
        }
        if ((token === import27.Location)) {
            return this._Location_42;
        }
        if ((token === import28.UrlSerializer)) {
            return this._UrlSerializer_43;
        }
        if ((token === import29.RouterOutletMap)) {
            return this._RouterOutletMap_44;
        }
        if ((token === import108.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_45;
        }
        if ((token === import109.ROUTES)) {
            return this._ROUTES_46;
        }
        if ((token === import7.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_47;
        }
        if ((token === import96.Router)) {
            return this._Router_48;
        }
        if ((token === import110.ActivatedRoute)) {
            return this._ActivatedRoute_49;
        }
        if ((token === import62.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_50;
        }
        if ((token === import31.AddressBookTitleService)) {
            return this._AddressBookTitleService_51;
        }
        if ((token === import111.TRANSLATIONS_FORMAT)) {
            return this._TRANSLATIONS_FORMAT_52;
        }
        return notFoundResult;
    }
    destroyInternal() {
        this._ApplicationRef__15.ngOnDestroy();
    }
}
export const AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);

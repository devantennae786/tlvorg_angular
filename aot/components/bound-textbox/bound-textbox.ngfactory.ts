/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/bound-textbox/bound-textbox';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_BoundTextbox_Host:import0.RenderComponentType = (null as any);
class _View_BoundTextbox_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _BoundTextbox_0_4:import3.BoundTextbox;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoundTextbox_Host0,renderType_BoundTextbox_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('bound-textbox',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BoundTextbox0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BoundTextbox_0_4 = new import3.BoundTextbox();
    this._appEl_0.initComponent(this._BoundTextbox_0_4,[],compView_0);
    compView_0.create(this._BoundTextbox_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.BoundTextbox) && (0 === requestNodeIndex))) { return this._BoundTextbox_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BoundTextbox_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_BoundTextbox_Host === (null as any))) { (renderType_BoundTextbox_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_BoundTextbox_Host0(viewUtils,parentInjector,declarationEl);
}
export const BoundTextboxNgFactory:import9.ComponentFactory<import3.BoundTextbox> = new import9.ComponentFactory<import3.BoundTextbox>('bound-textbox',viewFactory_BoundTextbox_Host0,import3.BoundTextbox);
const styles_BoundTextbox:any[] = [];
var renderType_BoundTextbox:import0.RenderComponentType = (null as any);
class _View_BoundTextbox0 extends import1.AppView<import3.BoundTextbox> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _el_3:any;
  _text_4:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoundTextbox0,renderType_BoundTextbox,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Bound Textbox',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'input',(null as any));
    this._el_3 = this.renderer.createElement(parentRenderNode,'span',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'keyup',this.eventHandler(this._handle_keyup_2_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._el_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.context.text;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'value',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.text,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_4,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_keyup_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.typing($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_BoundTextbox0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.BoundTextbox> {
  if ((renderType_BoundTextbox === (null as any))) { (renderType_BoundTextbox = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/bound-textbox/bound-textbox.ts class BoundTextbox - inline template',0,import8.ViewEncapsulation.None,styles_BoundTextbox,{})); }
  return new _View_BoundTextbox0(viewUtils,parentInjector,declarationEl);
}
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../components/tree-view/tree-view-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './tree-view.ngfactory';
import * as import11 from '../../../components/tree-view/tree-view';
export class Wrapper_TreeViewDemo {
  context:import0.TreeViewDemo;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.TreeViewDemo();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_TreeViewDemo_Host:import2.RenderComponentType = (null as any);
class _View_TreeViewDemo_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _TreeViewDemo_0_4:Wrapper_TreeViewDemo;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TreeViewDemo_Host0,renderType_TreeViewDemo_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'ng-component',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TreeViewDemo0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TreeViewDemo_0_4 = new Wrapper_TreeViewDemo();
    this._appEl_0.initComponent(this._TreeViewDemo_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._TreeViewDemo_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TreeViewDemo) && (0 === requestNodeIndex))) { return this._TreeViewDemo_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TreeViewDemo_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._TreeViewDemo_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TreeViewDemo_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_TreeViewDemo_Host === (null as any))) { (renderType_TreeViewDemo_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_TreeViewDemo_Host0(viewUtils,parentInjector,declarationEl);
}
export const TreeViewDemoNgFactory:import9.ComponentFactory<import0.TreeViewDemo> = new import9.ComponentFactory<import0.TreeViewDemo>('ng-component',viewFactory_TreeViewDemo_Host0,import0.TreeViewDemo);
const styles_TreeViewDemo:any[] = ([] as any[]);
var renderType_TreeViewDemo:import2.RenderComponentType = (null as any);
class _View_TreeViewDemo0 extends import1.AppView<import0.TreeViewDemo> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _TreeView_2_4:import10.Wrapper_TreeView;
  _text_3:any;
  _el_4:any;
  _el_5:any;
  _text_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TreeViewDemo0,renderType_TreeViewDemo,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'h1',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Recursive TreeView',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'tree-view',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_2 = new import3.AppElement(2,(null as any),this,this._el_2);
    var compView_2:any = import10.viewFactory_TreeView0(this.viewUtils,this.injector(2),this._appEl_2);
    this._TreeView_2_4 = new import10.Wrapper_TreeView();
    this._appEl_2.initComponent(this._TreeView_2_4.context,([] as any[]),compView_2);
    compView_2.create(this._TreeView_2_4.context,([] as any[]),(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'          ',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,parentRenderNode,'h4',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_4,'a',new import4.InlineArray2(2,'href','http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'Read more here',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._el_5,
      this._text_6
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TreeView) && (2 === requestNodeIndex))) { return this._TreeView_2_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.directories;
    this._TreeView_2_4.check_directories(currVal_2_0_0,throwOnChange,false);
    this._TreeView_2_4.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._TreeView_2_4.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_TreeViewDemo0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.TreeViewDemo> {
  if ((renderType_TreeViewDemo === (null as any))) { (renderType_TreeViewDemo = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_TreeViewDemo,{})); }
  return new _View_TreeViewDemo0(viewUtils,parentInjector,declarationEl);
}
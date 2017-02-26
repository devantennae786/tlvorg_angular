/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../components/access-child-components/parent';
import * as import2 from './child.ngfactory';
import * as import3 from '../../../components/access-child-components/child';
const styles_Parent:any[] = ([] as any[]);
export const RenderType_Parent:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_Parent,
  data: {animation: ([] as any[])}
}
);
export function View_Parent_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵqueryDef(20480,1,{viewChildren: 1}),
    import0.ɵelementDef(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n                ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.Parent = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.updateViewChildren()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Update Time via ViewChildren']),
    import0.ɵtextDef((null as any),['\n                ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'child',([] as any[]),(null as any),(null as any),(null as any),import2.View_Child_0,import2.RenderType_Child),
      import0.ɵdirectiveDef(1024,[[
        1,
        4
      ]
    ],0,import3.Child,([] as any[]),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n                ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'child',([] as any[]),(null as any),(null as any),(null as any),import2.View_Child_0,import2.RenderType_Child),
      import0.ɵdirectiveDef(1024,[[
        1,
        4
      ]
    ],0,import3.Child,([] as any[]),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n              '])
  ]
  ,(null as any),(null as any));
}
const RenderType_Parent_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_Parent_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'parent',([] as any[]),(null as any),(null as any),(null as any),View_Parent_0,RenderType_Parent),
    import0.ɵdirectiveDef(1024,(null as any),0,import1.Parent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const ParentNgFactory:import0.ComponentFactory<import1.Parent> = import0.ɵcreateComponentFactory('parent',import1.Parent,View_Parent_Host_0);
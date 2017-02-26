/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../components/about/about';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
const styles_About:any[] = ([] as any[]);
export const RenderType_About:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_About,
  data: {animation: ([] as any[])}
}
);
export function View_About_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
      import0.ɵelementDef(0,(null as any),(null as any),27,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Welcome']),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        This is a live demo of my Angular sample components.\n    ']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),6,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        I hope you will find these ']),
    import0.ɵelementDef(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        0,
        'target',
        0
      ]
      ,
      [
        3,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.About = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnodeValue(view,11).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(10,(null as any),0,import2.RouterLinkWithHref,[
      import2.Router,
      import2.ActivatedRoute,
      import3.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpureArrayDef(1),
    import0.ɵtextDef((null as any),['demos']),
    import0.ɵtextDef((null as any),[' useful and educational. Stay tuned for more progress soon.\n        Don\'t hesitate to tweet me at @helgevold with suggestions for more components.\n    ']),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),4,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        Click ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'a',[[
        'href',
        'http://www.syntaxsuccess.com/angular-2-articles'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['here']),
    import0.ɵtextDef((null as any),[' for a full list of my Angular articles.\n    ']),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),4,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        The source code for the full set of components is available on ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'a',[[
        'href',
        'https://github.com/thelgevold/angular-2-samples'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['GitHub']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵtextDef((null as any),['\n\n'])
  ]
  ,(check,view) => {
    var comp:import1.About = view.component;
    const currVal_0:any = check(view,12,0,'/Demo/Spreadsheet');
    check(view,11,0,currVal_0);
  },(check,view) => {
    var comp:import1.About = view.component;
    const currVal_0:any = import0.ɵnodeValue(view,11).target;
    const currVal_1:any = import0.ɵnodeValue(view,11).href;
    check(view,10,0,currVal_0,currVal_1);
  });
}
const RenderType_About_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_About_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'about',([] as any[]),(null as any),(null as any),(null as any),View_About_0,RenderType_About),
    import0.ɵdirectiveDef(1024,(null as any),0,import1.About,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AboutNgFactory:import0.ComponentFactory<import1.About> = import0.ɵcreateComponentFactory('about',import1.About,View_About_Host_0);
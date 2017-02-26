/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './survey.ngfactory';
import * as import2 from '../../../components/survey/survey';
import * as import3 from '../../../components/survey/survey-demo';
const styles_SurveyDemo:any[] = ([] as any[]);
export const RenderType_SurveyDemo:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_SurveyDemo,
  data: {animation: ([] as any[])}
}
);
export function View_SurveyDemo_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),4,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵelementDef(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Survey using Dynamic Form']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'survey',([] as any[]),(null as any),(null as any),(null as any),import1.View_Survey_0,import1.RenderType_Survey),
      import0.ɵdirectiveDef(1025,(null as any),0,import2.Survey,([] as any[]),{model: [
        0,
        'model'
      ]
    },(null as any))
  ]
  ,(check,view) => {
    var comp:import3.SurveyDemo = view.component;
    const currVal_0:any = comp.questionModel;
    check(view,4,0,currVal_0);
  },(null as any));
}
const RenderType_SurveyDemo_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_SurveyDemo_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'survey-demo',([] as any[]),(null as any),(null as any),(null as any),View_SurveyDemo_0,RenderType_SurveyDemo),
    import0.ɵdirectiveDef(1024,(null as any),0,import3.SurveyDemo,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const SurveyDemoNgFactory:import0.ComponentFactory<import3.SurveyDemo> = import0.ɵcreateComponentFactory('survey-demo',import3.SurveyDemo,View_SurveyDemo_Host_0);
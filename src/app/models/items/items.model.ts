import {DefinitionMap} from '@angular/compiler/src/render3/view/util';

class Definition {
  item: Items;
  useEffect: [];
  useCriticalEffects: [];
  equipEffects: EquipeEffects;
}

class Items {
  id: number;
  level: number;
  baseParameters: BaseParameters;
  useParameters: UseParameters;
  graphicParameters: GraphicParameters;
  properties: [];
  useEffects: [];
  useCriticalEffects: [];
  equipEffects: EquipEffects;


}

export class Items {
  definition: Definition;
  description: Description;
  title: Title;

}

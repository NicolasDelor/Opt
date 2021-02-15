import {DefinitionMap} from '@angular/compiler/src/render3/view/util';

class Definition {
  item: Items;
  useEffect: [];
  useCriticalEffects: [];
  equipEffects: EquipeEffects;

  constructor(item: Items, useEffect: [], useCriticalEffects: [], equipEffects: EquipeEffects) {
    this.item = item;
    this.useEffect = useEffect;
    this.useCriticalEffects = useCriticalEffects;
    this.equipEffects = equipEffects;
  }
}

class Items {
  id: number;
  level: number;
  baseParameters: BaseParameters;
  useParameters: UseParameters;
  graphicParameters: GraphicParameters;
  properties: [];

}

class BaseParameters {
  itemTypeId: number;
  itemSetId: number;
  rarity: number;
  bindType: number;
  minimumShardSlotNumber: number;
  maximumShardSlotNumber: number;

}

class UseParameters {
  useCostAp: number;
  useCostMp: number;
  useCostWp: number;
  useRangeMin: number;
  useRangeMax: number;
  useTestFreeCell: boolean;
  useTestLos: boolean;
  useTestOnlyLine: boolean;
  useTestNoBorderCell: boolean;
  useWorldTarget: number;

}

class GraphicParameters {
  gfxId: number;
  femaleGfxId: number;

  constructor(gfxId: number, femaleGfxId: number) {
    this.gfxId = gfxId;
    this.femaleGfxId = femaleGfxId;
  }
}

class EquipeEffects {
  undifined: Undifined; // undefined

  constructor(undifined: Undifined) {
    this.undifined = undifined;
  }
}

class Undifined { // undefined
  effect: Effect;

  constructor(effect: Effect) {
    this.effect = effect;
  }
}

class Effect {
  definition: DefinitionEffect;

  constructor(definition: DefinitionEffect) {
    this.definition = definition;
  }
}

class DefinitionEffect {
  id: number;
  actionId: number;
  areaShape: number;
  areaSize: number;
  params: UndefinedEffect; // undefined

  constructor(id: number, actionId: number, areaShape: number, areaSize: number, params: UndefinedEffect) {
    this.id = id;
    this.actionId = actionId;
    this.areaShape = areaShape;
    this.areaSize = areaSize;
    this.params = params;
  }
}

class UndefinedEffect {
  undefined: number; // undefined

}

// ---

class Description {
  fr: string;
  en: string;
  es: string;
  pt: string;

  constructor({fr = '', en = '', es = '', pt = ''} = {}) {
    this.fr = fr;
    this.en = en;
    this.es = es;
    this.pt = pt;
  }
}

class Title {
  fr: string;
  en: string;
  es: string;
  pt: string;

  constructor({fr = '', en = '', es = '', pt = ''} = {}) {
    this.fr = fr;
    this.en = en;
    this.es = es;
    this.pt = pt;
  }
}

export class Equipment {
  definition: Definition;
  description: Description;
  title: Title;
}

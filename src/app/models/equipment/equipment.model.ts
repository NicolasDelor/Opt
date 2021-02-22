import { DefinitionMap } from '@angular/compiler/src/render3/view/util';

class DefinitionEquipement {
    item: Item;
    useEffects: Effect[];
    useCriticalEffects: Effect[];
    equipEffects: Effect[]; //// id auto-incr

    constructor({
        item = {},
        useEffect = [],
        useCriticalEffects = [],
        equipEffects = [],
    } = {}) {
        this.item = new Item(item);

        this.useEffects = useEffect.map(
            ({ effect = {} } = {}) => new Effect(effect)
        );

        this.useCriticalEffects = useCriticalEffects.map(
            ({ effect = {} } = {}) => new Effect(effect)
        );

        this.equipEffects = equipEffects.map(
            ({ effect = {} } = {}) => new Effect(effect)
        );
    }
}

class Item {
    id: number;
    level: number;
    baseParameters: BaseParameters;
    useParameters: UseParameters;
    graphicParameters: GraphicParameters;
    properties: number[];

    constructor({
        id = null,
        level = null,
        baseParameters = {},
        useParameters = {},
        graphicParameters = {},
        properties = [],
    } = {}) {
        this.id = id;
        this.level = level;
        this.baseParameters = new BaseParameters(baseParameters);
        this.useParameters = new UseParameters(useParameters);
        this.graphicParameters = new GraphicParameters(graphicParameters);
        this.properties = properties;
    }
}

class BaseParameters {
    itemTypeId: number;
    itemSetId: number;
    rarity: number;
    bindType: number;
    minimumShardSlotNumber: number;
    maximumShardSlotNumber: number;

    constructor({
        itemTypeId = null,
        itemSetId = null,
        rarity = null,
        bindType = null,
        minimumShardSlotNumber = null,
        maximumShardSlotNumber = null,
    } = {}) {
        this.itemTypeId = itemTypeId;
        this.itemSetId = itemSetId;
        this.rarity = rarity;
        this.bindType = bindType;
        this.minimumShardSlotNumber = minimumShardSlotNumber;
        this.maximumShardSlotNumber = maximumShardSlotNumber;
    }
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

    constructor({
        useCostAp = null,
        useCostMp = null,
        useCostWp = null,
        useRangeMin = null,
        useRangeMax = null,
        useTestFreeCell = false,
        useTestLos = false,
        useTestOnlyLine = false,
        useTestNoBorderCell = false,
        useWorldTarget = null,
    } = {}) {
        this.useCostAp = useCostAp;
        this.useCostMp = useCostMp;
        this.useCostWp = useCostWp;
        this.useRangeMin = useRangeMin;
        this.useRangeMax = useRangeMax;
        this.useTestFreeCell = useTestFreeCell;
        this.useTestLos = useTestLos;
        this.useTestOnlyLine = useTestOnlyLine;
        this.useTestNoBorderCell = useTestNoBorderCell;
        this.useWorldTarget = useWorldTarget;
    }
}

class GraphicParameters {
    gfxId: number;
    femaleGfxId: number;

    constructor({ gfxId = null, femaleGfxId = null } = {}) {
        this.gfxId = gfxId;
        this.femaleGfxId = femaleGfxId;
    }
}

// class EquipEffect {
//   effect: Effect;

//   constructor({effect = {}} = {}) {
//     this.effect = new Effect(effect);
//   }
// }

class Effect {
    definition: DefinitionEffect;

    constructor({ definition = {} } = {}) {
        this.definition = new DefinitionEffect(definition);
    }
}

class DefinitionEffect {
    id: number;
    actionId: number;
    areaShape: number;
    areaSize: number[]; // number;
    params: number[]; // IdParams; // undefined

    constructor({
        id = null,
        actionId = null,
        areaShape = null,
        areaSize = [],
        params = [],
    } = {}) {
        this.id = id;
        this.actionId = actionId;
        this.areaShape = areaShape;
        this.areaSize = areaSize;
        this.params = params; // new IdParams(params);
    }
}

/* class IdParams {
  id: number; // undefined

  constructor({id = null} = {}) {
    this.id = id;
  }
} */

// Description -----

class Description {
    fr: string;
    en: string;
    es: string;
    pt: string;

    constructor({ fr = '', en = '', es = '', pt = '' } = {}) {
        this.fr = fr;
        this.en = en;
        this.es = es;
        this.pt = pt;
    }
}

// Title -----

class Title {
    fr: string;
    en: string;
    es: string;
    pt: string;

    constructor({ fr = '', en = '', es = '', pt = '' } = {}) {
        this.fr = fr;
        this.en = en;
        this.es = es;
        this.pt = pt;
    }
}

export class EquipmentModel {
    definition: DefinitionEquipement;
    description: Description;
    title: Title;

    constructor({ definition = {}, description = {}, title = {} } = {}) {
        this.definition = new DefinitionEquipement(definition);
        this.description = new Description(description);
        this.title = new Title(title);
    }
}

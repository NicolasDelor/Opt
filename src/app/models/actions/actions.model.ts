class Definition {
  id: number;
  effect: string;

  constructor({id = null, effect = ''} = {}) {
      this.id = id;
      this.effect = effect;
  }
}

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

export class Action {
  definition: Definition;
  description: Description;

  constructor({definition = {},  description = {}} = {}) {
      this.definition = new Definition(definition);
      this.description = new Description(description);
  }
}

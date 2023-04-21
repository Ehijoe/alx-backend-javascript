export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = x;
  }

  get code() {
    return this._code;
  }

  set code(x) {
    if (typeof x !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = x;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(x) {
    if (typeof x !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = x;
  }

  get currency() {
    return this._currency;
  }

  set currency(x) {
    if (x instanceof Currency) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = x;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

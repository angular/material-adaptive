class Ingredient {
  constructor(params) {
    if (!params) params = {};
    this.amount = params['amount'] || 0;
    this.unit = params['unit'] || '';
    this.description = params['description'] || '';
  }
}

export default Ingredient;

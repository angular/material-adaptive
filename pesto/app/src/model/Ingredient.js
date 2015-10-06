class Ingredient {
  constructor(params) {
    if (!params) params = {};
    this.amount = params['amount'] || '';
    this.description = params['description'] || '';
  }

  isEmpty() {
    return !(this.amount || this.description);
  }
}

export default Ingredient;

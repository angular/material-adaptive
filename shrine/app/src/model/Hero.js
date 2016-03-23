class Hero {
  /**
   * @constructor
   * @param {!Object} params
   */
  constructor(params) {
    if (!params) params = {};
    this.id = params.id || '';
    this.title = params.title || '';
    this.quote = params.quote || '';
    this.imageUrl = params.imageUrl || '';
    this.price = params.price || '';
    this.storeName = params.storeName || '';
    this.storeAvatarUrl = params.storeAvatarUrl || '';
    this.category = params.category || '';
  }

  /**
   * Clones the model.
   * @return {Object}
   */
  copy() {
    return new Hero({
      id : this.id,
      title: this.title,
      quote: this.quote,
      imageUrl: this.imageUrl,
      price: this.price,
      storeName: this.storeName,
      storeAvatarUrl: this.storeAvatarUrl,
      category: this.category
    });
  }

  /**
   * Clones a json object.
   * @param {!Object} json
   * @return {Object}
   */
  static fromJson(json) {
    return new Hero(json);
  }
}

export default Hero;

class Hero {
  /**
   * @constructor
   * @param {!Object} params
   */
  constructor(params) {
    if (!params) params = {};
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
      title: this.title,
      quote: this.quote,
      imageUrl: this.imageUrl,
      price: this.price,
      storeName: this.storeName,
      storeAvatarUrl: this.storeAvatarUrl,
      category: this.category,
    });
  }

  /**
   * Clones a json object.
   * @param {!Object} json
   * @return {Object}
   */
  static fromJson(json) {
    return new Hero({
      title: json.title,
      quote: json.quote,
      imageUrl: json.imageUrl,
      price: json.price,
      storeName: json.storeName,
      storeAvatarUrl: json.storeAvatarUrl,
      category: json.category,
    })
  }
}

export default Hero;

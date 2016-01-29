class Item {
  /**
   * @constructor
   * @param {!Object} params
   */
  constructor(params) {
    if (!params) params = {};
    this.id = params.id || 0;
    this.title = params.title || '';
    this.description = params.description || '';
    this.imageUrl = params.imageUrl || '';
    this.price = params.price || '';
    this.storeName = params.storeName || '';
    this.storeAvatarUrl = params.storeAvatarUrl || '';
    this.storeDescription = params.storeDescription || '';
    this.featured = params.featured || false;
  }

  /**
   * Clones the model.
   * @return {Object}
   */
  copy() {
    return new Item({
      id: this.id,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      storeName: this.storeName,
      storeAvatarUrl: this.storeAvatarUrl,
      storeDescription: this.storeDescription,
      featured: this.featured,
    });
  }

  /**
   * Clones a json object.
   * @param {!Object} json
   * @return {Object}
   */
  static fromJson(json) {
    return new Item({
      id: json.id,
      title: json.title,
      description: json.description,
      imageUrl: json.imageUrl,
      price: json.price,
      storeName: json.storeName,
      storeAvatarUrl: json.storeAvatarUrl,
      storeDescription: json.storeDescription,
      featured: json.featured,
    })
  }
}

export default Item;

class Item {
  constructor(params) {
    if (!params) params = {};
    this.title = params.title || '';
    this.description = params.description || '';
    this.imageUrl = params.imageUrl || '';
    this.price = params.price || '';
    this.storeName = params.storeName || '';
    this.storeAvatarUrl = params.storeAvatarUrl || '';
    this.featured = params.featured || false;
  }

  copy() {
    return new Item({
      title: json.title,
      description: json.description,
      imageUrl: json.imageUrl,
      price: json.price,
      storeName: json.storeName,
      storeAvatarUrl: json.storeAvatarUrl,
      featured: json.featured,
    });
  }

  static fromJson(json) {
    return new Item({
      title: json.title,
      description: json.description,
      imageUrl: json.imageUrl,
      price: json.price,
      storeName: json.storeName,
      storeAvatarUrl: json.storeAvatarUrl,
      featured: json.featured,
    })
  }
}

export default Item;

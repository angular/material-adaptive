class Item {
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

  copy() {
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
    });
  }

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

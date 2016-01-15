class Hero {
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

  copy() {
    return new Hero({
      title: json.title,
      quote: json.quote,
      imageUrl: json.imageUrl,
      price: json.price,
      storeName: json.storeName,
      storeAvatarUrl: json.storeAvatarUrl,
      category: json.category,
    });
  }

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

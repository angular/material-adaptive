// Simple service holding static item data.
class ItemsService {
  constructor() {
    let LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris dolor, euismod ut libero et, suscipit porttitor lacus. Donec vitae consequat mauris. Proin metus lacus, euismod scelerisque ultricies in, porttitor quis ex. Suspendisse tempus eget tortor in ultricies."
    this.items = [
      
      { name: "A cat",
        img: "cat1.jpg",
        description: LOREM },
      { name: "Another cat",
        img: "cat2.jpg",
        description: LOREM },
      { name: "A different cat",
        img: "cat3.jpg",
        description: LOREM },
    ]
  }
}


ItemsService.$inject = [];
export default ItemsService;


// Simple service holding static item data.
class ItemsService {
  constructor() {
    let LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris dolor, euismod ut libero et, suscipit porttitor lacus. Donec vitae consequat mauris. Proin metus lacus, euismod scelerisque ultricies in, porttitor quis ex. Suspendisse tempus eget tortor in ultricies."
    this.items = [
      
      { name: "Meowrio Lopez",
        img: "cat1.jpg",
        description: LOREM },
      { name: "Fuzz Aldrin",
        img: "cat2.jpg",
        description: LOREM },
      { name: "Cat Benetar",
        img: "cat3.jpg",
        description: LOREM },
      { name: "Chairman Meow",
        img: "cat4.jpg",
        description: LOREM },
      { name: "Fleyonce Knowles",
        img: "cat5.jpg",
        description: LOREM },
      { name: "George Benard Paw",
        img: "cat6.jpg",
        description: LOREM },
    ]
  }
}


ItemsService.$inject = [];
export default ItemsService;


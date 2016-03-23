import HEROES from './HeroStorage';
import PRODUCTS from './ItemStorage';

class Catalog {

  constructor($shrineUtils, $q) {
    this._$q = $q;
    this._utils = $shrineUtils;
    this._heroes = HEROES;
    this._store = PRODUCTS;
  }

  /**
   *
   */
  loadByCategory(category) {
    category = String(category).toLowerCase();

    let filterByCategory = (items) =>{
          // return promise of store items filtered by category
          return items.filter( it => {
            let categories = it.categories || [it.category];
            let matches = categories.filter(it => it.toLowerCase() ==  category);
            // found an item with a matching category
            return matches.length > 0;
          });
        };

    switch (category) {
      case 'feature'  : return this.loadHeroes();
      case 'all'      : return this.loadStore();
      default         : return this._$q( resolve => {
        this.loadStore()
            .then( filterByCategory )
            .then( resolve );
      })
    }
  }

  findItemByID(itemID) {
    let filterByID = items => items.filter(it => it.id == itemID);
    let firstItem = items => items.length ? items[0] : null;
    
    return this
        .loadStore()
        .then( filterByID )
        .then( firstItem );
  }

  /**
   *  Load the Hero items
   */
  loadHeroes() {
    return this._$q.when(this._heroes);
  }

  /**
   * Load the entire store catalog
   */
  loadStore() {
    return this._$q.when(this._store);
  }

  /**
   * Reshuffles the order of the items.
   */
  reshuffleItems(items) {
    this._$log.debug(`reshuffleItems( )`);

    items = this._utils.shuffle(items.slice(0, items.length));

    items.forEach(function(item, idx) {
      var mod = idx % 8;
      var _item = Object.assign({}, item);
      _item.featured = (mod === 6 || mod === 7);
      items[idx] = _item;
    }, this);

    return items;
  }
}

Catalog.$inject = [ '$shrineUtils', '$q' ];

export default Catalog;

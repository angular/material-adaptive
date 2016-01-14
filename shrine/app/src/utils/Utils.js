class Utils {
  range(n) {
    return new Array(n);
  }

  /**
   * Shuffles an array of elements
   * @param {!Array <Object>} o Array of elements.
   * @return {Array <Object>}
   */
  shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  /**
   * Gets a property from each element in an array of objects.
   * @param {!Array <Object>} list List of objects.
   * @param {Array <Object>}
   * @return {Object}
   */
  pluck(list, prop) {
    return list.map(value => value[prop]);
  }

  /**
   * Returns the object with a specific value-property
   * from a list of objects using non sensitive values.
   * @param {!Array <Object>} list List of objects.
   * @param {!string} prop
   * @param {!string} value
   * @return {Object}
   */
  findWhereNonSensitive (list, prop, value) {
    return list.find((item) => item[prop].toLowerCase() === value.toLowerCase());
  }


  /**
   * Returns the object with a specific value-property
   * from a list of objects.
   * @param {!Array <Object>} list List of objects.
   * @param {!string} prop
   * @param {!string} value
   * @return {Object}
   */
  findWhere(list, prop, value) {
    return list.find((item) => item[prop] === value);
  }
}

export default Utils;

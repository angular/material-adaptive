class Utils {
  range(n) {
    return new Array(n);
  }

  /**
   * Gets a property from each element in an array of objects.
   * @param {!Array <Object>} list List of objects.
   * @param {!string} prop
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

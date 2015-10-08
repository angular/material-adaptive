class Step {
  constructor(params) {
    if (!params) params = {};
    this.duration = params['duration'] || '';
    this.description = params['description'] || '';
  }

  isEmpty() {
    return !(this.duration || this.description);
  }
}

export default Step;

class Step {
  constructor(params) {
    if (!params) params = {};
    this.duration = params['duration'] || '';
    this.description = params['description'] || '';
  }
}

export default Step;

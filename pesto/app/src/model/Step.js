class Step {
  construtor(params) {
    if (!params) params = {};
    this.duration = params['duration'] || 0;
    this.unit = params['unit'] || '';
    this.description = params['description'] || '';
  }
}

export default Step;

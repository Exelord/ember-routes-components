import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  actions: {
    changeQP() {
      this.toggleProperty('controller.ok');
    }
  }
});

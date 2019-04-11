import Route from '@ember/routing/route';
import { Promise } from 'rsvp';

export default Route.extend({
  model() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: "very important data" }), 2000)
    })
  }
});

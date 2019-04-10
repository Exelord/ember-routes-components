import { getOwner } from '@ember/application';
import Route from '@ember/routing/route';

export function initialize() {
  Route.reopen({
    renderTemplate(controller) {
      const { routeName } = this
      const routeComponentName = `routes/${routeName}`;

      if (this._hasRouteComponent(routeComponentName)) {
        controller.routeComponentName = routeComponentName;
        return this.render('routes-components');
      }

      return this._super(...arguments);
    },

    _hasRouteComponent(routeComponentName) {
      const hasTemplate = getOwner(this).lookup(`template:components/${routeComponentName}`);
      return !!(hasTemplate || getOwner(this).lookup(`components:${routeComponentName}`));
    }
  });
}

export default {
  initialize
};



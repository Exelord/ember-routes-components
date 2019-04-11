import { getOwner } from '@ember/application';
import { set } from '@ember/object';
import Route from '@ember/routing/route';
import routeTemplate from 'ember-routes-components/templates/route-template';

export function initialize() {
  Route.reopen({
    setupController(controller) {
      this._super(...arguments);

      const { routeName } = this
      const owner = getOwner(this);
      const routeComponentPath = `routes/${routeName}`;
      const hasRouteComponentTemplate = owner.hasRegistration(`template:components/${routeComponentPath}`);
      const hasRouteComponent = owner.hasRegistration(`component:${routeComponentPath}`);

      if (hasRouteComponentTemplate || hasRouteComponent) {
        if (!owner.hasRegistration(`template:${routeName}`)) {
          owner.register(`template:${routeName}`, routeTemplate);
        }

        set(controller, 'routeComponentPath', routeComponentPath);
      }
    }
  });
}

export default {
  initialize
};



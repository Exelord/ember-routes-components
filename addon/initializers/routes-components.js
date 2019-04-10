import { getOwner } from '@ember/application';
import Route from '@ember/routing/route';
import routeTemplate from 'ember-routes-components/templates/route-template';

export function initialize() {
  Route.reopen({
    renderTemplate(controller) {
      const { routeName } = this
      const owner = getOwner(this);
      const routeComponentName = `routes/${routeName}`;
      const hasRouteComponentTemplate = owner.hasRegistration(`template:components/${routeComponentName}`);
      const hasRouteComponent = owner.hasRegistration(`component:${routeComponentName}`);

      if (hasRouteComponentTemplate || hasRouteComponent) {
        controller.routeComponentName = routeComponentName;

        if (!owner.hasRegistration(`template:${routeName}`)) {
          owner.register(`template:${routeName}`, routeTemplate);
        }
      }

      return this._super(...arguments);
    }
  });
}

export default {
  initialize
};



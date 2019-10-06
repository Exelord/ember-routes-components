import { getOwner } from '@ember/application';
import { set } from '@ember/object';
import Route from '@ember/routing/route';
import routeTemplate from 'ember-routes-components/templates/route-template';
import { dasherize } from '@ember/string';

export function initialize() {
  Route.reopen({
    setupController(controller) {
      this._super(...arguments);

      const { routeName } = this
      const componentName = dasherize(routeName.replace(/[.]/g, '/'));
      const owner = getOwner(this);
      const routeComponentPath = `routes/${componentName}`;
      const hasRouteComponentTemplate = owner.hasRegistration(`template:components/${routeComponentPath}`);
      const hasRouteComponent = owner.hasRegistration(`component:${routeComponentPath}`);

      if (hasRouteComponentTemplate || hasRouteComponent) {
        if (!owner.hasRegistration(`template:${componentName}`)) {
          owner.register(`template:${componentName}`, routeTemplate);
        }

        set(controller, 'routeComponentPath', routeComponentPath);
      }
    }
  });
}

export default {
  initialize
};



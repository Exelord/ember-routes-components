ember-routes-components
==============================================================================

It takes advantages of components and allow you to use them instead of routes.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-routes-components
```


Usage
------------------------------------------------------------------------------

1. Create a component template with route name, eg. `app/components/routes/application/template.hbs`
2. Create a component file if you need custom logic `app/components/routes/application/component.js`
3. Inside of the component you can access route's `model` and `controller` properties
4. Remove routes templates which you want to be handle by routes components
5. Remember to use `yield` instead of `outlet` in components templates
6. Routes states `error` and `loading` are not supported yet. (unless you will create routes for them)

Before:
```
tests/dummy/app
├── components
│   └── .gitkeep
├── templates
│   └── users
│   │   ├── index.hbs
│   │   └── new.hbs
│   ├── application.hbs
│   └── index.hbs
```

After:
```
tests/dummy/app
├── components
│   ├── routes
│   │   ├── application
│   │   │   └── template.hbs
│   │   ├── users
│   │   │   ├── new
│   │   │   │   └── template.hbs
│   │   │   └── template.hbs
│   │   └── index
│   │       └── template.hbs
│   └── .gitkeep
├── templates
│   └── .gitkeep
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

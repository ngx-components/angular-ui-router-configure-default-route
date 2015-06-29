![angular-express-header](https://cloud.githubusercontent.com/assets/1859381/8266502/d94e93ce-1731-11e5-9b9d-9b9e58c5369f.png)

## Angular ui-router invalid route handler

[AngularJS Express](https://github.com/angular-express/angular-express) component to add a custom ui-router "invalid route" handler.

## Installation

To install the component:

```bash
$ ngx install angular-ui-router-invalid-route-handler
```

No clue what the `ngx` command line tool is? Learn more about [AngularJS Express](https://github.com/angular-express/angular-express).

## How to use

After installing the component:

- edit `_build/register-invalid-route-handler.js`
- add your custom logic

and import the component in your Angular application:

```javascript
// Angular main module
var ngModule = angular.module('app', []);

// Import component
import c from 'components/angular-ui-router-invalid-route-handler/_build/index';

// Instantiate component
c(ngModule, { baseUrl: 'components/angular-ui-router-invalid-route-handler' });
```

## Component options

- `baseUrl`: Base URL that component can use to construct links

## License

[MIT](LICENSE)

## Change log

### v0.1.0

- Initial version

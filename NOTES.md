# Notes
- `npm serve`
- `npm run rest-api`
  - API: http://localhost:4201/

## Links
Main links:
- [Repos](https://github.com/thoughtram/angular-master-class-exercise-descriptions)
- [Slides](https://classroom.thoughtram.io/#/class/angular-master-class) / [Repo Slides](https://github.com/thoughtram/angular-master-class-slides)

Additional links:
- [Stackblitz.com](https://stackblitz.com/) online IDE
- [Angular Checklist](https://angular-checklist.io/projects)

## TODO
- Watch [TreeShaking](https://www.youtube.com/watch?v=jnp_ny4SOQE)
- Read [Caching RxJS](https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html)
- `$0 / console.dir` in Developer console
- Testsetup: jest (Unit) / cypress (e2e)
  - [Marble Testing](https://github.com/ReactiveX/rxjs/blob/master/doc/marble-testing.md) for Rx tests
- Reactive Forms anstelle Template Forms (Kein Two-way Data Binding)

## Intro
- Zone.js für Change Detection (Push based, timeout / xhr requests werden überschrieben)
- Bazl / Basel (neues Build tool von Google - OpenSource) -> Soll Webpack in Zukunft ersetzen da schneller
- Optimierungen:
  - Const enum verwenden: `const enum Role { Admin }; const currentRole = Role.Admin;` -> `var currentRole = 0;`
  - Immer TrackBy verwenden wenn möglich

## Questions
- Size of modules... one Module vs. n-feature Modules
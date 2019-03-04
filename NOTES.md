# Notes
## Links
Main links:
- [Repos](https://github.com/thoughtram/angular-master-class-exercise-descriptions)
- [Slides](https://classroom.thoughtram.io/#/class/angular-master-class) / [Repo Slides](https://github.com/thoughtram/angular-master-class-slides)

Additional links:
- Stackblitz.com
- [Angular Checklist](https://angular-checklist.io/projects)

## TODO
- Watch [TreeShaking](https://www.youtube.com/watch?v=jnp_ny4SOQE)
- `$0 / console.dir` in Developer console

## Intro
- Zone.js für Change Detection (Push based, timeout / xhr requests werden überschrieben)
- Bazl / Basel (neues Build tool von Google - OpenSource) -> Soll Webpack in Zukunft ersetzen da schneller
- Optimierungen:
  - Const enum verwenden: `const enum Role { Admin }; const currentRole = Role.Admin;` -> `var currentRole = 0;`

## Questions
- Size of modules... one Module vs. n-feature Modules
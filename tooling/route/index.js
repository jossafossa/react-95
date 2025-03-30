
export function routeGenerator( plop ) {

  console.log( "Loading route generator..." );

  plop.setGenerator( "route", {
    description: "Generate a React route",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/routes/{{pascalCase name}}Routes.tsx",
        templateFile: "./tooling/route/route.tsx.hbs",
      },
      {
        type: "append",
        path: "./src/routes/index.tsx",
        pattern: "/* PLOP_INJECT_IMPORT */",
        template: "import { {{pascalCase name}}Routes } from \"./{{pascalCase name}}Routes\""
      },
      {
        type: "append",
        path: "./src/routes/index.tsx",
        pattern: "/* PLOP_INJECT_ROUTES */",
        template: "\t\t\t...{{pascalCase name}}Routes,",
      },
    ],
  } );
}
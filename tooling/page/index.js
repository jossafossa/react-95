
export function pageGenerator( plop ) {

  console.log( "Loading page generator..." );

  plop.setGenerator( "page", {
    description: "Generate a React page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "pages name:",
        transformer: ( input ) => `${input}Page`,
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/pages/{{pascalCase name}}Page/{{pascalCase name}}Page.tsx",
        templateFile: "./tooling/page/page.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/pages/{{pascalCase name}}Page/index.ts",
        templateFile: "./tooling/page/index.ts.hbs",
      },
      {
        type: "append",
        path: "./src/pages/index.ts",
        pattern: "/* PLOP_INJECT_EXPORT */",
        template: "export * from \"./{{pascalCase name}}Page\";",
      },
    ],
  } );
}

export function sectionGenerator( plop ) {

  console.log( "Loading section generator..." );

  plop.setGenerator( "section", {
    description: "Generate a React section with SCSS module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "section name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/sections/{{pascalCase name}}Section/{{pascalCase name}}Section.tsx",
        templateFile: "./tooling/section/section.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/sections/{{pascalCase name}}Section/index.ts",
        templateFile: "./tooling/section/index.ts.hbs",
      },
      {
        type: "append",
        path: "./src/sections/index.ts",
        pattern: "/* PLOP_INJECT_EXPORT */",
        template: "export * from \"./{{pascalCase name}}Section\";",
      },
    ],
  } );
}
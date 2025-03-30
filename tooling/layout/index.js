
export function layoutGenerator( plop ) {

  console.log( "Loading layout generator..." );

  plop.setGenerator( "layout", {
    description: "Generate a React layout",

    prompts: [
      {
        type: "input",
        name: "plural",
        message: "layout name (plural):",
      },
      {
        type: "input",
        name: "single",
        message: "layout name (single):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/layouts/{{pascalCase plural}}Layout/{{pascalCase plural}}Layout.tsx",
        templateFile: "./tooling/layout/layout.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/layouts/{{pascalCase plural}}Layout/index.ts",
        templateFile: "./tooling/layout/index.ts.hbs",
      },
      {
        type: "append",
        path: "./src/layouts/index.ts",
        pattern: "/* PLOP_INJECT_EXPORT */",
        template: "export * from \"./{{pascalCase plural}}Layout\";",
      },
    ],
  } );
}
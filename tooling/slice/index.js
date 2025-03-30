
export function sliceGenerator( plop ) {

  console.log( "Loading slice generator..." );

  plop.setGenerator( "slice", {
    description: "Generate a React slice",
    prompts: [
      {
        type: "input",
        name: "plural",
        message: "Component name (plural):",
      },
      {
        type: "input",
        name: "single",
        message: "Component name (single):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/slices/{{pascalCase plural}}Slice/{{pascalCase plural}}Slice.tsx",
        templateFile: "./tooling/slice/slice.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/slices/{{pascalCase plural}}Slice/index.ts",
        templateFile: "./tooling/slice/index.tsx.hbs",
      },
      {
        type: "append",
        path: "./src/slices/index.ts",
        pattern: "/* PLOP_INJECT_IMPORT */",
        template: "import { {{pascalCase plural}}Slice, type {{pascalCase plural}}Data } from \"./{{pascalCase plural}}Slice\";"
      },
      {
        type: "append",
        path: "./src/slices/index.ts",
        pattern: "/* PLOP_INJECT_SLICES */",
        template: `
    // api/{{lowerCase plural}}.json
    get{{pascalCase plural}}: builder.query<{{pascalCase plural}}Data, void>( {{pascalCase plural}}Slice ),`
      },
      {
        type: "append",
        path: "./src/slices/index.ts",
        pattern: "/* PLOP_INJECT_EXPORT_SLICE */",
        template: "  useGet{{pascalCase plural}}Query, "
      },
      {
        type: "append",
        path: "./src/slices/index.ts",
        pattern: "/* PLOP_INJECT_EXPORT */",
        template:"export * from \"./{{pascalCase plural}}Slice\";"
      },
    ],
  } );
}
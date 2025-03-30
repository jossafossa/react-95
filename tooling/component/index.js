export function componentGenerator(plop) {
  console.log('Loading component generator...');

  plop.setGenerator('component', {
    description: 'Generate a React component with SCSS module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './tooling/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './tooling/component/component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: './tooling/component/component.module.scss.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/index.ts',
        templateFile: './tooling/component/index.ts.hbs',
      },
      {
        type: 'append',
        path: './src/components/index.ts',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });
}

export function componentStoryGenerator(plop) {
  console.log('Loading component sotry generator...');

  plop.setGenerator('story', {
    description: 'Generate a React component with SCSS module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './tooling/component/component.stories.tsx.hbs',
      },
    ],
  });
}

import {
  componentGenerator,
  componentStoryGenerator,
  pageGenerator,
  routeGenerator,
  layoutGenerator,
  sectionGenerator,
  sliceGenerator,
} from './tooling/index.js';

export default function (plop) {
  console.log('Loading component and page generators...');

  plop.setHelper('pascalCase', (text) =>
    text
      .replace(/(\w)(\w*)/g, function (_, firstChar, rest) {
        return firstChar.toUpperCase() + rest.toLowerCase();
      })
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase()),
  );

  plop.setHelper('camelCase', (text) =>
    text
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      .replace(/^./, (chr) => chr.toLowerCase()),
  );

  plop.setHelper('kebabCase', (text) =>
    text
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => `-${chr.toLowerCase()}`)
      .replace(/^./, (chr) => chr.toLowerCase()),
  );

  plop.setHelper('lowerCase', (text) => text.toLowerCase());

  componentGenerator(plop);
  componentStoryGenerator(plop);
  pageGenerator(plop);
  routeGenerator(plop);
  layoutGenerator(plop);
  sectionGenerator(plop);
  sliceGenerator(plop);
}

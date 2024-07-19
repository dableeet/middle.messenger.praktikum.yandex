import Handlebars from 'handlebars';
import { PluginOption } from 'vite';

export default function hbsPrecompile(): PluginOption {
  const fileRegexp = /\.hbs$/;

  return {
    name: 'vite-plugin-handlebars-precompile',
    transform(src: string, id: string) {
      if (!fileRegexp.test(id)) {
        return;
      }

      const code = `
        import Handlebars from 'handlebars/runtime';
        export default Handlebars.template(${Handlebars.precompile(src)});
      `;

      return {
        code,
      };
    },
  };
}

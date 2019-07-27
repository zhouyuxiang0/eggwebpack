import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  webpack: {
    enable: true,
    package: 'egg-webpack',
  },
};

export default plugin;

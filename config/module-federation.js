const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'app1',
    filename: 'remoteEntry.js',
    remotes: {
      app2: 'app2@http://localhost:3001/remoteEntry.js',
    },
    exposes: {
    //   './Content': './src/Content',
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
      },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      remotes: {
        app2: 'app2@http://localhost:3001/server/remoteEntry.js',
      },
      exposes: {
        // './Content': './src/Content',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
};
module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-viewport/register',
    `storybook-dark-mode/register`,
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          transpileOnly: true
        }
      }
    }
  ],
};
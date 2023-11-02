const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@seixas/design-system",
  "@seixas/utils",
]);

/**
 * @type {import("next").NextConfig}
 */

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});

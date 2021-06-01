module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/elements/**/*.stories.tsx",
    "../components/modules/**/*.stories.tsx",
    "../components/atoms/**/*.stories.tsx",
    "../components/molecules/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
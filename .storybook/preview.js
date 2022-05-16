
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { mainTheme } from "../styles/themes";
import { ThemeProvider } from 'styled-components';
//import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

const withThemeProvider = (Story, context) => 
  <ThemeProvider theme={mainTheme}>
    <Story {...context} />
  </ThemeProvider>

export const decorators = [withThemeProvider];
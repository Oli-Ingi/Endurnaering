import { mainTheme } from "./styles/themes";
import { DefaultTheme } from "styled-components";

type StyledTheme = typeof mainTheme

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}


declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }



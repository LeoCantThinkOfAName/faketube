import { GlobalTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {}
}
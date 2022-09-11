import { darkColors, lightColors } from "../../theme/colors";
import { FathomToggleTheme } from "./types";

export const light: FathomToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: FathomToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};

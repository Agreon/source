import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from "../index"
import {
	inlineErrorDefault,
	inlineErrorBrand,
	InlineErrorTheme,
} from "./inline-error"

export type CheckboxTheme = {
	border: string
	borderHover: string
	borderChecked: string
	borderError: string
	backgroundChecked: string
	text: string
	textSupporting: string
	textIndeterminate: string
}

export const checkboxDefault: {
	checkbox: CheckboxTheme
	inlineError: InlineErrorTheme
} = {
	checkbox: {
		border: border.checkbox,
		borderHover: border.checkboxHover,
		borderChecked: border.checkboxChecked,
		borderError: border.checkboxError,
		backgroundChecked: background.checkboxChecked,
		text: text.checkbox,
		textSupporting: text.checkboxSupporting,
		textIndeterminate: text.checkboxIndeterminate,
	},
	...inlineErrorDefault,
}

export const checkboxBrand: {
	checkbox: CheckboxTheme
	inlineError: InlineErrorTheme
} = {
	checkbox: {
		border: brandBorder.checkbox,
		borderHover: brandBorder.checkboxHover,
		borderChecked: brandBorder.checkboxChecked,
		borderError: brandBorder.checkboxError,
		backgroundChecked: brandBackground.checkboxChecked,
		text: brandText.checkbox,
		textSupporting: brandText.checkboxSupporting,
		textIndeterminate: brandText.checkboxIndeterminate,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const checkboxLight = checkboxDefault
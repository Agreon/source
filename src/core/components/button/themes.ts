import { neutral, brand, brandAlt } from "@guardian/src-foundations/palette"
import { ButtonTheme } from "@guardian/src-foundations/themes"

const text = {
	readerRevenue: {
		primary: neutral[100],
		secondary: neutral[60],
		ctaPrimary: brand[400],
		ctaSecondary: brandAlt[400],
	},
	readerRevenueAlt: {
		primary: neutral[7],
		secondary: neutral[60],
		ctaPrimary: neutral[100],
		ctaSecondary: neutral[7],
	},
	readerRevenueLight: {
		primary: brand[400],
		secondary: brand[400],
		ctaPrimary: brand[400],
		ctaSecondary: brand[400],
	},
}
const background = {
	readerRevenue: {
		primary: brand[400],
		ctaPrimary: brandAlt[400],
		ctaPrimaryHover: "#FFD213",
		ctaSecondary: brand[400],
		ctaSecondaryHover: "#234B8A",
	},
	readerRevenueAlt: {
		primary: brandAlt[400],
		ctaPrimary: neutral[7],
		ctaPrimaryHover: "#454545",
		ctaSecondary: brandAlt[400],
		ctaSecondaryHover: brandAlt[200],
	},
	readerRevenueLight: {
		ctaPrimary: brandAlt[400],
		ctaPrimaryHover: "#FFD213",
		ctaSecondary: neutral[100],
		ctaSecondaryHover: "#E5E5E5",
	},
}
const border = {
	readerRevenue: {
		ctaSecondary: brandAlt[400],
	},
	readerRevenueAlt: {
		ctaSecondary: neutral[7],
	},
	readerRevenueLight: {
		ctaSecondary: brand[400],
	},
}

export const buttonReaderRevenue: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenue.ctaPrimary,
		backgroundPrimary: background.readerRevenue.ctaPrimary,
		backgroundPrimaryHover: background.readerRevenue.ctaPrimaryHover,
		textSecondary: text.readerRevenue.ctaSecondary,
		backgroundSecondary: background.readerRevenue.ctaSecondary,
		backgroundSecondaryHover: background.readerRevenue.ctaSecondaryHover,
		borderSecondary: border.readerRevenue.ctaSecondary,
	},
}

export const buttonReaderRevenueAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenueAlt.ctaPrimary,
		backgroundPrimary: background.readerRevenueAlt.ctaPrimary,
		backgroundPrimaryHover: background.readerRevenueAlt.ctaPrimaryHover,
		textSecondary: text.readerRevenueAlt.ctaSecondary,
		backgroundSecondary: background.readerRevenueAlt.ctaSecondary,
		backgroundSecondaryHover: background.readerRevenueAlt.ctaSecondaryHover,
		borderSecondary: border.readerRevenueAlt.ctaSecondary,
	},
}

export const buttonReaderRevenueLight: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenueLight.ctaPrimary,
		backgroundPrimary: background.readerRevenueLight.ctaPrimary,
		backgroundPrimaryHover: background.readerRevenueLight.ctaPrimaryHover,
		textSecondary: text.readerRevenueLight.ctaSecondary,
		backgroundSecondary: background.readerRevenueLight.ctaSecondary,
		backgroundSecondaryHover:
			background.readerRevenueLight.ctaSecondaryHover,
		borderSecondary: border.readerRevenueLight.ctaSecondary,
	},
}

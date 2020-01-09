import React, { ReactElement, ReactNode } from "react"
import { link, primary, secondary, icon, iconRight, iconLeft } from "./styles"
import { SerializedStyles } from "@emotion/css"
import { LinkTheme } from "@guardian/src-foundations/themes"
export {
	linkLight,
	linkBrand,
	linkBrandYellow,
} from "@guardian/src-foundations/themes"

export type Priority = "primary" | "secondary"
type IconSide = "left" | "right"

const priorities: {
	[key in Priority]: ({ link }: { link: LinkTheme }) => SerializedStyles
} = {
	primary,
	secondary,
}

const iconSides: {
	[key in IconSide]: SerializedStyles
} = {
	right: iconRight,
	left: iconLeft,
}
const Link = ({
	priority,
	icon: iconSvg,
	iconSide,
	children,
	...props
}: {
	priority: Priority
	icon?: ReactElement
	iconSide: IconSide
	href: string
	children?: ReactNode
}) => {
	const linkContents = [children]
	// a bit of underlined space; the icon sits on top
	const spacer = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>

	if (iconSvg) {
		if (iconSide === "left") {
			linkContents.unshift(
				React.cloneElement(iconSvg, { key: "svg" }),
				spacer,
			)
		} else {
			linkContents.push(
				React.cloneElement(iconSvg, { key: "svg" }),
				spacer,
			)
		}
	}
	return (
		<a
			css={theme => [
				link,
				priorities[priority](theme.link && theme),
				iconSvg ? icon : "",
				iconSvg ? iconSides[iconSide] : "",
			]}
			{...props}
		>
			{linkContents}
		</a>
	)
}

const defaultLinkProps = {
	priority: "primary",
	iconSide: "left",
}

Link.defaultProps = { ...defaultLinkProps }

export { Link }

import React from "react"
import { css } from "@emotion/core"

import { GridRow, GridItem } from "@guardian/src-grid"
import { sport } from "@guardian/src-foundations/palette"

export default {
	title: "Grid",
}

const itemStyle = css`
	width: 100%;
	height: 150px;
	background-color: ${sport[600]};
`

const fourColLayout = (
	<GridRow>
		<GridItem spans={[1, 3, 3, 4]}>
			<div css={itemStyle}></div>
		</GridItem>
		<GridItem spans={[1, 3, 3, 4]}>
			<div css={itemStyle}></div>
		</GridItem>
		<GridItem spans={[1, 3, 3, 4]}>
			<div css={itemStyle}></div>
		</GridItem>
		<GridItem spans={[1, 3, 3, 4]}>
			<div css={itemStyle}></div>
		</GridItem>
	</GridRow>
)

export const mobile = () => fourColLayout

mobile.story = {
	name: "mobile four column layout",
	parameters: {
		viewport: { defaultViewport: "mobileMedium" },
	},
}
export const tablet = () => fourColLayout

tablet.story = {
	name: "tablet four column layout",
	parameters: {
		viewport: { defaultViewport: "tablet" },
	},
}
export const desktop = () => fourColLayout

desktop.story = {
	name: "desktop four column layout",
	parameters: {
		viewport: { defaultViewport: "desktop" },
	},
}
export const wide = () => fourColLayout

wide.story = {
	name: "wide four column layout",
	parameters: {
		viewport: { defaultViewport: "wide" },
	},
}
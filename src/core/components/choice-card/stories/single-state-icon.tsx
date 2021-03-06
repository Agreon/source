import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { SvgCamera, SvgAudio, SvgVideo } from "@guardian/src-icons"
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "../index"

/* eslint-disable react/jsx-key */
const iconChoiceCards = [
	<ChoiceCard
		value="picture"
		label="Picture"
		id="picture"
		icon={<SvgCamera />}
	/>,
	<ChoiceCard
		value="audio"
		label="Audio"
		id="audio"
		icon={<SvgAudio />}
		defaultChecked={true}
	/>,
	<ChoiceCard value="video" label="Video" id="video" icon={<SvgVideo />} />,
]
/* eslint-enable react/jsx-key */

const medium = css`
	width: 30em;
`

export const singleStateWithIconLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup name="colours" label="Media format">
				{iconChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

singleStateWithIconLight.story = {
	name: `single state with icon light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

import React, { ReactNode, ChangeEvent, MouseEvent } from "react"
import {
	fieldset,
	label,
	labelWithSupportingText,
	radio,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	horizontal,
	vertical,
	errorRadio,
} from "./styles"
import { InlineError } from "@guardian/src-inline-error"
export { radioBrand, radioDefault } from "@guardian/src-foundations/themes"

type Orientation = "vertical" | "horizontal"

const orientationStyles = {
	vertical: vertical,
	horizontal: horizontal,
}

const RadioGroup = ({
	name,
	orientation,
	error,
	children,
	...props
}: {
	name: string
	orientation: Orientation
	error?: string
	children: JSX.Element | JSX.Element[]
}) => {
	// TODO: This is currently a div instead of a fieldset due to a Chrome / Safari
	// bug that prevents flexbox model working on fieldset elements
	// https://bugs.chromium.org/p/chromium/issues/detail?id=375693
	return (
		<div css={[fieldset, orientationStyles[orientation]]} {...props}>
			{error && <InlineError>{error}</InlineError>}
			{React.Children.map(children, child => {
				return React.cloneElement(
					child,
					Object.assign(error ? { error: true } : {}, {
						name,
					}),
				)
			})}
		</div>
	)
}

const LabelText = ({
	hasSupportingText,
	children,
}: {
	hasSupportingText?: boolean
	children: ReactNode
}) => {
	return (
		<div
			css={theme => [
				hasSupportingText ? labelTextWithSupportingText : "",
				labelText(theme.radio && theme),
			]}
		>
			{children}
		</div>
	)
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={theme => supportingText(theme.radio && theme)}>
			{children}
		</div>
	)
}

const Radio = ({
	label: labelContent,
	value,
	supporting,
	checked,
	error,
	...props
}: {
	label?: ReactNode
	value: string
	supporting?: ReactNode
	checked?: boolean
	error: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	onClick?: (event: MouseEvent<HTMLInputElement>) => void
}) => {
	const setRadioState = (el: HTMLInputElement | null) => {
		if (el && checked != null) {
			el.checked = checked
		}
	}

	const RadioControl = () => (
		<input
			css={theme => [
				radio(theme.radio && theme),
				error ? errorRadio(theme.radio && theme) : "",
			]}
			value={value}
			aria-invalid={error}
			ref={setRadioState}
			{...props}
		/>
	)

	const LabelledRadioControl = () => (
		<label
			css={theme => [
				label(theme.radio && theme),
				supporting ? labelWithSupportingText : "",
			]}
		>
			<RadioControl />
			{supporting ? (
				<div>
					<LabelText hasSupportingText={true}>
						{labelContent}
					</LabelText>
					<SupportingText>{supporting}</SupportingText>
				</div>
			) : (
				<LabelText>{labelContent}</LabelText>
			)}
		</label>
	)

	// Note: if no label is passed, supporting text will not
	// be displayed either
	return <>{labelContent ? <LabelledRadioControl /> : <RadioControl />}</>
}

const radioGroupDefaultProps = {
	orientation: "vertical",
}
const radioDefaultProps = {
	disabled: false,
	type: "radio",
	defaultChecked: false,
	error: false,
}

Radio.defaultProps = { ...radioDefaultProps }
RadioGroup.defaultProps = { ...radioGroupDefaultProps }

export { RadioGroup, Radio }

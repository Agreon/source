import React from "react"
import { Stack } from "./index"

const gridStoryWrapper = (storyFn: () => JSX.Element) => {
	// override 8px margin applied globally to every preview body
	return <div style={{ margin: "0 -8px" }}>{storyFn()}</div>
}

export default {
	title: "Stack",
	component: Stack,
	decorators: [gridStoryWrapper],
}

export * from "./stories/stack/default"

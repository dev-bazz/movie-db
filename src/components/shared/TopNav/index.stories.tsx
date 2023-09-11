import type { StoryObj, Meta } from "@storybook/react";
import { TopNav } from "./index";

const meta = {
	title: "Components/TopNav",
	component: TopNav,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

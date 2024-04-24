import { Meta } from "@storybook/react";
import { ChannelTopPageTemplate } from "../template";
import { DESKTOP_STORY_CONFIG } from "@/__stories__/config";

const meta = {
  title: "Features/Channel/Top",
} satisfies Meta;

export default meta;

const mockUser = {
  name: "test",
  imageURL: "https://example.com",
};

const mockChannels = [
  {
    id: 1,
    name: "general",
  },
  {
    id: 2,
    name: "random",
  },
  {
    id: 3,
    name: "random2",
  },
];

export const Overview = () => (
  <ChannelTopPageTemplate user={mockUser} channels={mockChannels} />
);
Overview.story = DESKTOP_STORY_CONFIG;

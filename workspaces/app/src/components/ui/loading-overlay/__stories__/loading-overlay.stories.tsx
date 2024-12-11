import { Meta } from "@storybook/react";
import { LoadingOverlay, LoadingOverlayContext } from "..";

const meta = {
  title: "Components/LoadingOverlay",
} satisfies Meta;

export default meta;

export const Overview = () => (
  <LoadingOverlayContext.Provider
    value={{ isLoading: true, setIsLoading: () => {} }}
  >
    <LoadingOverlay />
  </LoadingOverlayContext.Provider>
);

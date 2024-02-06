import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "chakra/button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    colorScheme: { control: "text" },
    children: { control: "text" },
    // onClick: { action: "clicked" },
  },
};

export const Success = () => (
  <Button onClick={action("clicked")} colorScheme="green">
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    Danger
  </Button>
);

export const Log = () => (
  <Button
    colorScheme="blue"
    onClick={() => console.log("Button Clicked", process.env.STORYBOOK_THEME)}
  >
    Log
  </Button>
);

// const Template = (args) => <Button {...args} />;
// export const Success = Template.bind({});
// Success.args = {
//   colorScheme: "green",
//   children: "Success",
// };
// export const Danger = Template.bind({});
// Danger.args = {
//   colorScheme: "red",
//   children: "Danger",
// };

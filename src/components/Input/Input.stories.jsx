import React from "react";
import Input from "./Input";

export default {
  title: "atoms/Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

const Template = (args) => <Input {...args} />;

export const SmallA = Template.bind({});
SmallA.args = {
  size: "large",
  type: "number",
};

export const password = Template.bind({});
password.args = {
//   ...SmallA.args,
  type: "password",
};

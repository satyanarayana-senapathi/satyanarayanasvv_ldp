import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Bitcoin } from "./Bitcoin"
export default {
    title: "Atoms/MyIcon",
    component: Bitcoin,
  } as ComponentMeta<typeof Bitcoin>;
  
  const Template: ComponentStory<typeof Bitcoin> = (args) => <Bitcoin {...args} />;
  
  export const Coin = Template.bind({});
  Coin.args = {
    src:'images/Bitcoin.svg',
    width:'40px',
  };
  
  

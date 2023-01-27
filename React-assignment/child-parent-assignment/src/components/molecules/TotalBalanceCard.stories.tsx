import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TotalBalanceCard } from "./TotalBalanceCard";

export default{
    title:'molecules/TotalBalance',
    component:TotalBalanceCard,
}as ComponentMeta<typeof TotalBalanceCard>;

const Template: ComponentStory<typeof TotalBalanceCard> = (args) => <TotalBalanceCard {...args} />;
  
  export const card = Template.bind({});
  card.args = {
    location:'top',
    fontColor:'black',
    src:'images/Bitcoin.svg',
  };

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Image } from "./Image"
export default {
    title: "Atoms/MyIcon",
    component: Image,
  } as ComponentMeta<typeof Image>;
  
  const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
  
  export const Coin = Template.bind({});
  Coin.args = {
    src:'images/Bitcoin.svg',
    width:'40px',
  };
  
  

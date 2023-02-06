import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typograph } from "./Typograph"
export default {
    title: "Atoms/Tpography",
    component: Typograph,
  } as ComponentMeta<typeof Typograph>;
  
  const Template: ComponentStory<typeof Typograph> = (args) => <Typograph {...args} />;
  
  export const text = Template.bind({});
  text.args = {
    content:'primary',
    variant:'h5',
    color:'black',
  };
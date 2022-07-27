import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../..';
import RadioImage from './RadioImage';

export default {
  title: 'UI Components/Radio/Radio Image',
  component: RadioImage,
  parameters: {
    // docs: { page: CustomMDXDocumentation },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof RadioImage>;

const Template: ComponentStory<typeof RadioImage> = args => (
  <ThemeProvider>
    <RadioImage {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  value: 'Kat',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
};

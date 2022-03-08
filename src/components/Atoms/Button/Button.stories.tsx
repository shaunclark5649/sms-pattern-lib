import { Meta, Story } from '@storybook/react';

import { Button as ButtonComponent, ButtonProps } from './Button';

export default {
  title: 'Atom/Button',
  component: ButtonComponent,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Welcome',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ label }: ButtonProps) => <ButtonComponent label={label} />;
export const Button = Template.bind({});

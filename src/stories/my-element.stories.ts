import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';
import '../my-element';

const meta: Meta = {
    tags: ['autodocs'],
    component: 'my-element',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
    render: () => html`<my-element></my-element>`,
};
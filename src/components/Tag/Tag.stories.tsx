import React from 'react';
import { Tag } from './Tag';
import { action } from '@storybook/addon-actions';

export default {
    component: Tag,
    title: 'Components/Tag',
    excludeStories: /.*Data$/,
}

export const Default = () => (
    <Tag name="Design" onClick={action('clicked default tag')} />
);

export const Active = () => (
    <Tag name="Design" active onClick={action('clicked active tag')} />
)
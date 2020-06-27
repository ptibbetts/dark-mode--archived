import React from 'react';
import { Tag } from './Tag';

export default {
    component: Tag,
    title: 'Components/Tag',
    excludeStories: /.*Data$/,
}

export const Default = () => (
    <Tag name="Design"/>
);

export const Active = () => (
    <Tag name="Design" active />
)
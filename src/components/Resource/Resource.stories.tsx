import React from 'react';
import { Resource } from './Resource';

export default {
    component: Resource,
    title: 'Components/Resource',
    excludeStories: /.*Data$/,
}

const DefaultData = {
    title: 'The Coldest Sunset',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['example', 'testing']
};

export const Default = () => (
    <Resource
        title={ DefaultData.title }
        content={ DefaultData.content }
    />
);
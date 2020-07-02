import React from 'react';
import { Resource } from './Resource';

export default {
    component: Resource,
    title: 'Components/Resource',
    excludeStories: /.*Data$/,
}

const DefaultData = {
    title: 'The Coldest Sunset',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>',
    tags: ['example', 'testing']
};

export const Default = () => (
    <Resource
        title={ DefaultData.title }
        content={ DefaultData.content }
        tags={ DefaultData.tags }
    />
);

export const ImageButNoTitle = () => (
    <Resource
        image={'https://duckduckgo.com/assets/logo_homepage.alt.v108.svg'}
        padding={true}
        tags={ DefaultData.tags }
    />
);
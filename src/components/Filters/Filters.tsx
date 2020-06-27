import React, { useState } from 'react';
import Tag from '../Tag';

interface Props {
    tags: string[],
    filters: string[],
    onFiltersChange: (data: string[]) => void
}

export const Filters = (props: Props) => {
    const { tags, filters, onFiltersChange } = props;

    const handleTagClick = (tagName: string) => {
        if (tagName === 'all') {
            onFiltersChange(['all']);
        } else {
            if (filters.includes(tagName)) {
                let newActiveTags = filters.filter(tag => tag !== tagName);
                if (filters.length === 0) {
                    onFiltersChange(['all']);
                } else {
                    onFiltersChange(newActiveTags);
                }
            } else {
                let newActiveTags = [...props.filters];
                newActiveTags = newActiveTags.filter(tag => tag !== 'all');
                newActiveTags.push(tagName)
                onFiltersChange(newActiveTags);
            }
        }
    }

    return (
        <div className="mb-4">
            <span className="mr-2">
                <Tag
                    name="Show all"
                    active={props.filters[0] === 'all'}
                    onClick={() => handleTagClick('all')}
                />
            </span>
            {tags.sort().map((tag, index) => (
                <span className="mr-2" key={index}>
                    <Tag
                        name={tag}
                        active={props.filters.includes(tag)}
                        onClick={() => handleTagClick(tag)}
                    />
                </span>
            ))}
        </div>
    );
}
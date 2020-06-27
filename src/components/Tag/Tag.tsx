import React from 'react';

interface Props {
    active?: boolean,
    name: string,
    onClick?: () => void
}

export const Tag = ({
    active = false,
    name,
    onClick
}: Props) => {

    let classes = `inline-block text-white rounded-md px-3 py-1 text-xs mb-1 font-mono`;

    if (active) {
        classes += ' bg-gray-700 dark:bg-gray-900';
    } else {
        classes += ' bg-gray-600 dark:bg-gray-600'
    }

    if (onClick) {
        classes += ' cursor-pointer'
    }

    return (
        <span
            className={classes}
            onClick={onClick}
        >
            {name}
        </span>
    );
}
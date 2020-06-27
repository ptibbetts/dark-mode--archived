import React from 'react';

interface Props {
    children: React.ReactNode
}

export const Masthead = (props: Props) => (
    <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-900 px-4 py-12">
        <div className="max-w-screen-xl mx-auto">
            <div className="dark:text-white text-xl md:text-center">
                {props.children}
            </div>
        </div>
    </div>
)
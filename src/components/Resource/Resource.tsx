import React from 'react';
import Tag from '../Tag';

interface Props {
    title?: string,
    url?: string,
    content?: string
    tags?: string[]
    image?: string
    author?: string
    padding?: number
}

export const Resource = (props: Props) => {
    const {
        author,
        content,
        image,
        tags,
        title,
        url,
        padding
    } = props;

    const imagePadding = padding ? 'p-4' : '';

    return (
        <div className="w-full max-w-md rounded overflow-hidden shadow bg-gray-100 dark:bg-gray-700">
            <div className="flex flex-col h-full">
                {image &&
                    <a href={url}>
                        <img
                            className={`w-full ${imagePadding}`}
                            src={image} 
                            alt={title}
                        />
                    </a>
                }
                <div className="text-gray-800 dark:text-gray-200 flex flex-col h-full px-4 py-2">
                    {author &&
                        <div className="text-gray-700 dark:text-gray-400 uppercase text-xs mb-4 font-mono">
                            {author}
                        </div>
                    }
                    <div className="flex-1">
                        <a href={url} className="font-bold text-xl mb-4 block visited:text-gray-500">
                            {title}
                        </a>
                        {content && 
                            <div className="mb-8" dangerouslySetInnerHTML={{ __html: content}} />
                        }
                    </div>

                    {tags && tags.length > 0 &&
                        <div className="flex items-end align-start flex-wrap">
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="inline-block mr-2"
                                >
                                    <Tag name={tag} />
                                </div>
                            ))}
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}
import React from 'react';
import customTailwindConfig from '../../../tailwind.config';
import defaultTailwindConfig from 'tailwindcss/defaultConfig';

interface TailwindConfig {
    theme: {
        colors?: {},
        extend?: {},
        fontFamily?: {},
        fontSize?: {},
        fontWeight?: {
            normal?: string
        }
    }
}

const cTC: TailwindConfig = customTailwindConfig;

const propertyTable = (headers: string[], rows: any[]) => (
    <div className="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
        <table className="mb-4 text-left w-full">
            <thead>
                {headers.map((header, index) => (
                    <th className={`${index === 0 ? 'w-64 ' : ''}text-sm font-semibold text-gray-700 p-2 bg-gray-200`}>{header}</th>
                ))}
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
);

let weights: {[key: string]: string | undefined} = {};
if (cTC.theme?.fontWeight) {
    weights = cTC.theme.fontWeight;
} else {
    weights = defaultTailwindConfig.theme.fontWeight;
}

export const Weights = () => {
    const headers = ['Class', 'Weight', 'Properties'];
    const rows: any[] = [];
    Object.keys(weights).forEach(key => {
        rows.push(
            <tr>
                <td className="p-2 text-gray-700 border-t border-gray-300"><code>.font-{key}</code></td>
                <td className="p-2 text-gray-700 border-t border-gray-300"><code>{weights[key]}</code></td>
                <td className="p-2 text-gray-700 border-t border-gray-300">
                    <span className={`font-${key}`}>
                        {key}
                    </span>
                </td>
            </tr>
        )
    });

    return propertyTable(headers, rows);
};

let families: {[key: string]: string[]} = {};
if (cTC.theme?.fontFamily) {
    families = cTC.theme.fontFamily;
} else {
    families = defaultTailwindConfig.theme.fontFamily;
}

export const Families = () => {
    const headers = ['Class', 'Properties'];
    const rows: any[] = [];
    Object.keys(families).forEach(key => {
        rows.push(
            <tr>
                <td className="p-2 text-gray-700 border-t border-gray-300 align-baseline whitespace-no-wrap"><code>.font-{key}</code></td>
                <td className="p-2 text-gray-700 border-t border-gray-300 align-baseline whitespace-no-wrap">
                    <span className={`font-${key}`}>
                        {families[key].join(', ')}
                    </span>
                </td>
            </tr>
        )
    });

    return propertyTable(headers, rows);
}

let fontSizes: {[key: string]: string[]} = {};;

if (cTC.theme?.fontSize) {
    fontSizes = cTC.theme.fontSize
} else {
    fontSizes = defaultTailwindConfig.theme.fontSize;
}

export const Sizes = () => {
    const headers = ['Class', 'Size', 'Example'];
    const rows: any[] = [];
    Object.keys(fontSizes).forEach(key => {
        rows.push(
            <tr>
                <td className="p-2 text-gray-700 border-t border-gray-300 align-baseline whitespace-no-wrap"><code>.text-{key}</code></td>
                <td className="p-2 text-gray-700 border-t border-gray-300 align-baseline whitespace-no-wrap">{fontSizes[key]}</td>
                <td className="p-2 text-gray-700 border-t border-gray-300 align-baseline whitespace-no-wrap">
                    <span className={`text-${key}`}>
                        The quick brown fox jumps over the lazy dog
                    </span>
                </td>
            </tr>
        )
    });

    return propertyTable(headers, rows);
}
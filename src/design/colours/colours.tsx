import React from 'react';
import { ColorPalette, ColorItem } from "@storybook/addon-docs/blocks";
import { ucFirst } from '../../utils';

interface ColorsObject {
    [key: string]: string | {[key: string]: string}
}

const getColors = (colors: ColorsObject) => {
    const results: JSX.Element[] = [];

    Object.keys(colors).forEach(key => {
        const options = colors[key];
        if (typeof(options) === 'string') {
            results.push(
                <ColorItem
                    title={ucFirst(key)}
                    subtitle=""
                    colors={[options]}
                />
            )
        }
        if (typeof(options) === 'object') {
            results.push(
                <ColorItem
                    title={ucFirst(key)}
                    subtitle=""
                    colors={colors[key]}
                />
            );
        }
    })

    return results;
}

interface ThemeObject {
    extend?: {
        colors?: ColorsObject
    },
    colors?: ColorsObject
}

const mapColours = ({ theme }: ({ theme?: ThemeObject })) => {

    const results: JSX.Element[][] = [];

    if (theme?.colors) {
        results.push(getColors(theme.colors));
    }

    if (theme?.extend?.colors) {
        results.push(getColors(theme.extend.colors));
    }

    return results;
}

interface TWConfig {
    theme?: ThemeObject,
}

interface Props {
    config: TWConfig
}

export const Colours = (props: Props) => (
    <ColorPalette>
        {mapColours(props.config)}
    </ColorPalette>
);
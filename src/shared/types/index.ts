import { ReactNode } from "react";

export interface User {
    id: string,
    name: string,
    mail: string,
    number: string,
}

// === Table ===

export interface TableProps {
    users: User[]
}

// === Button ===

export interface ButtonProps {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

// === Text ===

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

export enum TextColor {
    GRAY = 'color_grey',
    BLACK = 'color_black',
    BLUE = 'color_blue',
}

export interface TextProps {
    className?: string;
    text?: string;
    align?: TextAlign;
    size?: TextSize;
    color?: TextColor;
}

// === FLEX ===

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
// можно добавить wrap, но я думаю, что и так уже много функциональности для тестового
// (особенно в рамках вёрстки)
// так что оставлю без wrap
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGap = '4' | '8' | '16' | '32';

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: FlexWrap;
}
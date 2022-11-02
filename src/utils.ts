import dayjs from "dayjs"
import { TIME_FORMAT } from "./common/constants"
import { INode } from "./types"

export const formatTime = (time: number | string) => {
    return dayjs(time, TIME_FORMAT)
}

export const parseIntCssVal = (originVal: string) => {
    const val = originVal?.match(/\d+/g)?.[0];
    return val ? parseInt(val) : 0;
}

/**
 * 根据 color 生成 id，用于 dom 中的 id 使用（替换 color 中非法字符）
 * @param color 
 * @return colorId
 */
 export const compileColor = (color: string) => {
    if (color.indexOf('#') === 0) return `a${color.replace('#', '')}`;
    if (color.indexOf('rgb') === 0) return `b${color.replace(/\(/g, 'z').replace(/\)/g, 'y').replace(/,/g, 'd').replace(/\./g, 'p')}`;
    return color;
}
/**
 * 根据上边编译生成的 id，反编译合法 color
 * rgba(233,244,255,.3)
 * @param colorId 
 */
export const decompileColorId = (colorId: string) => {
    if (colorId.indexOf('a') === 0) return `${colorId.replace(/^a/, '#')}`;
    if (colorId.indexOf('b') === 0) return `${colorId.replace(/^b/, '').replace(/z/g, '(').replace(/y/g, ')').replace(/d/g, ',').replace(/p/g, '.')}`
    return colorId;
}
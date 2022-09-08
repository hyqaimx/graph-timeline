import { DEFAULT_LINE_HEIGHT, DEFAULT_THEMES } from "@/constants";
import { INodeItem, TColors } from "@/typings/custom-data";

/**
 * 根据节点数量计算主体高度
 * @param nodes 
 */
export const calcHeight = (nodes: INodeItem[], minHeight: number) => {
    const uniqNames = new Set(nodes.map(n => n.name));
    return uniqNames.size * DEFAULT_LINE_HEIGHT > minHeight ? uniqNames.size * DEFAULT_LINE_HEIGHT : minHeight;
}

/**
 * 获取主题配置
 * @param colors 
 */
export const getThemes = (colors: TColors) => {
    if (!colors || colors.length === 0) return DEFAULT_THEMES;

    return colors;
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

/**
 * @param colors 
 */
export const compileColors = (colors: string[]) => {
    return colors.map(color => compileColor(color));
}

/**
 * @param colors 
 */
 export const decompileColorIds = (colorIds: string[]) => {
    return colorIds.map(colorId => decompileColorId(colorId));
}

export const appendStyle = (id: string, styleRule: string) => {
    let style = document.querySelector(`#${id}`);
    if (!style) {
        style = document.createElement('style');
        style.id = id;
        document.querySelector('head').appendChild(style);
    }
	
    style.innerHTML = styleRule;
}
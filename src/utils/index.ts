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
import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useSize } from 'ahooks';
import { parseIntCssVal } from '../utils';


export default (target: RefObject<HTMLDivElement>) => {
    const size = useSize(target);
    const [noPaddingSize, setNoPaddingSize] = useState<{width: number; height: number}>();

    useEffect(() => {
        if (!size || !target.current) return;
        const { width, height } = size;
        const style = getComputedStyle(target.current);
        const {paddingTop, paddingBottom, paddingLeft, paddingRight} = style;

        const [pt, pb, pl, pr]: number[] = [
            parseIntCssVal(paddingTop),
            parseIntCssVal(paddingBottom),
            parseIntCssVal(paddingLeft),
            parseIntCssVal(paddingRight)
        ]

        setNoPaddingSize({
            width: width - pl - pr,
            height: height - pt - pb
        });
        
    }, [size, target])

    return noPaddingSize

}
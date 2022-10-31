import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useSize } from 'ahooks';
import { parseIntCssVal } from '../utils';
import type { TNoPaddingSize } from '../types';

export default (target: RefObject<HTMLDivElement>) => {
    const size = useSize(target);
    const [noPaddingSize, setNoPaddingSize] = useState<TNoPaddingSize>();

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
            height: height - pt - pb,
            paddingLeft: pl,
            paddingRight: pr,
            paddingTop: pt,
            paddingBottom: pb
        });
        
    }, [size, target])

    return noPaddingSize

}
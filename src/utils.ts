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
import dayjs from "dayjs"
import { TIME_FORMAT } from "./common/constants"
import { INode } from "./types"

export const formatTime = (time: number | string) => {
    return dayjs(time, TIME_FORMAT)
}

export const getNodeById = (nodes: INode[], id: string | number) => {
    return nodes?.find(node => node.id === id);
}
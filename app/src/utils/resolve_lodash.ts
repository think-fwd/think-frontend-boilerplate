import _ from "lodash"
export function resolveLodash(source: any | undefined, path: string, key: string) {
    if (!source) return undefined
    const field = _.get(source, path, {})
    if (field[key]) return field[key]
    return undefined
}
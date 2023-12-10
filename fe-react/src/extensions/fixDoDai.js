export const fixDoDai = (input) => {
    return input.length > 40 ? input.substring(0, 40) + "..." : input
}
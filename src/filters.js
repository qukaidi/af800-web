// export function dateFormat(value) {
//     return value ? value.replace("T", " ") : ""
// }
export function formatDate(value) {
    return value ? value.substring(0, 10) : '';
}
export function parseintDate(value) {
    return value ? parseInt(value) : "";
}
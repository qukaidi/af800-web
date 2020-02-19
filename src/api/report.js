import request from "@/utils/request.js";
export function list(params) {
    return request({
        url: '/report',
        method: 'GET',
        params
    })
}

export function pushMail(params) {
    return request({
        url: '/report/push/mail',
        method: 'GET',
        params
    })
}
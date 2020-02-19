import request from "@/utils/request.js";

export function fetchKbCathode(id) {
    return request({
        url: `/kb-cathode/${id}`,
        method: 'GET'
    })
}

export function addKbList(params) {
    return request({
        url: `/kb-check`,
        method: 'POST',
        data: params
    })
}
export function fetchKbIdList(path) {
    return request({
        url: `/kb-check/test11${path}`,
        method: 'GET'
    })
}
export function fetchCheckNoList(params) {
    return request({
        url: `/api/kb-check/check`,
        method: 'GET',
        params
    })
}
export function fetchFactory() {
    return request({
        url: `/kb-cathode/factory`,
        method: 'GET',
    })
}
export function fetchDevice(params) {
    return request({
        url: `/kb-cathode/device`,
        method: 'GET',
        params
    })
}
export function fetchType(params) {
    return request({
        url: `/kb-cathode/type`,
        method: 'GET',
        params
    })
}
export function fetchCathode(params) {
    return request({
        url: `/kb-cathode/cathode`,
        method: 'GET',
        params
    })
}
export function fetchTime(params) {
    return request({
        url: `/kb-check/replace`,
        method: 'GET',
        params
    })
}
export function fetchKbIdCheck(params) {
    return request({
        url: `/kb-check/check`,
        method: 'GET',
        params
    })
}
export function fetchKbDetails(params) {
    return request({
        url: `/kb-check/details`,
        method: 'POST',
        params
    })
}

export function addPagelist(params) {
    return request({
        url: `/kb-check/page`,
        method: 'POST',
        data: params
    })
}

export function updateKbCheck(data) {
    return request({
        url: `/kb-check/update`,
        method: 'POST',
        data
    })
}

export function getfindNew(params) {
    return request({
        url: `/kb-check/find/new`,
        method: 'GET',
        params
    })
}
export function fetchrepTime(params) {
    return request({
        url: `/kb-check/add/replace/time`,
        method: 'GET',
        params
    })
}
export function fetMinMaxTime(params) {
    return request({
        url: `/kb-check/update/replace/time`,
        method: 'GET',
        params
    })
}
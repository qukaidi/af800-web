import store from '@/store'

function redirectWxUrl() {
    window.location.href = "/api/wx/cp/oauth2?url=" + window.location.href;
}
export function KBSAuth(to, from, resolve, reject) {
    if (store.state.token && store.state.key) {
        store.dispatch("setProjectId", 1)
        resolve()
    } else {
        store.dispatch("setProjectId", 1)
        if (to.query.code) {
            store.dispatch("getTokenByCode", { code: to.query.code, projectId: 1 }).then(() => {
                resolve()
            }).catch(error => {
                reject()
                this.navigate("/error")
            })
        } else {
            redirectWxUrl()
        }
    }
}
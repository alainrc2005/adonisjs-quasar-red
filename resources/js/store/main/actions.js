export async function Logout() {
    return this.$axios.post("/api/user/logout").then(r => {
        return r.data;
    }).catch(e => {
        return {code: e.message};
    });
}

export async function Login({commit}, payload) {
    return this.$axios.post("/user/validate", payload).then(r => {
        return r.data;
    }).catch(e => {
        return {code: e.message};
    });
}

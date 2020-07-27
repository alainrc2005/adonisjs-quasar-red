export async function getTopics({commit}, path) {
    return await this.$axios.post('/api/help/topics', {path}).then(r => {
        if (r.data.code!=='Ok') return false;
        commit('setHelps',r.data.rows);
        return true;
    }).catch(() => {
        return false;
    })
}

export async function getHelp({commit}, helpId) {
    return await this.$axios.post('/api/help/getHelp', {helpId}).then(r => {
        if (r.data.code!=='Ok') return false;
        commit('setHelp',r.data.help);
        return true;
    }).catch(() => {
        return false;
    })
}

export async function createHelp({commit}, help) {
    return await this.$axios.post('api/help/create', help).then(r => {
        return r.data;
    }).catch((e) => {
        return {code: e.message};
    })
}

export async function updateHelp({commit}, help) {
    return await this.$axios.post('api/help/update', help).then((r) => {
        return r.data;
    }).catch((e) => {
        return {code: e.message};
    })
}

export async function removeHelps({commit}, helps) {
    return await this.$axios.post('api/help/remove', helps).then(r => {
        return r.data;
    }).catch((e) => {
        return {code: e.message};
    })
}

import Vue from 'vue'

export const clearHelp = (state) => {
    state.help.id = state.help.consecutive = state.help.topic = state.help.subtopic = null;
    state.help.content = "";
};

export const setHelp = (state, payload) => {
    Object.assign(state.help, payload);
};

export const setHelps = (state, helps) => {
    state.helps.splice(0, state.helps.length, ...helps);
};

export const removeTopic = (state, id) => {
    let idx = _.findIndex(state.helps,{id});
    Vue.delete(state.helps,idx);
};

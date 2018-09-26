let lastCommitId = null;

export default {
    state: {
        count: 0
    },
    getters: {
        count: state => state.count
    },
    mutations: {
        increment: (state) => state.count++
    },
    actions: {
        increment: ({commit}) => commit('increment'),
        incrementAsync: ({commit}) => {

            if(lastCommitId){
                clearTimeout(lastCommitId);
                lastCommitId = null;
            }

            return new Promise((resolve) => {
                lastCommitId = setTimeout(() => {
                    commit('increment');
                    resolve();
                }, 1000)
            });
        }
    }
};
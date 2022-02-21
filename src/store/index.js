import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: getDefaultComments()
    },
    getters: {
        GET_COMMENTS: state => state.comments
    },
    mutations: {
        ADD_COMMENT(state, comment) {
            state.comments.push(comment)
        },
    },
    actions: {
        ADD_COMMENT({commit}, comment) {
            commit('ADD_COMMENT', comment)
        }
    }
})

function getDefaultComments() {
    return [
        {
            avatar: "/assets/comment-avatar-1.png",
            email: "aaa",
            name: "Анжела Иванова",
            date: 1645349340000,
            text: "Если честно, кажется, что этот налоговый режим ввели, чтобы собрать больше денег с народа. Я, конечно, понимаю, что бюджеты надо пополнять, но не лучше ли обложить налогом богатых?",
            likeNumber: 10,
        },
        {
            avatar: "/assets/comment-avatar-2.png",
            email: "aaa",
            name: "Михаил Степашин",
            date: 1645438800000,
            text: "Хочу заметить, что автор этой статьи не написал, что не все могут получить статус самозанятого. Этот режим еще не ввели во всех регионах. Но если в вашем регионе есть, то поздравляю.",
            likeNumber: -9,
        }
    ]
}

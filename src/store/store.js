import Vuex from 'vuex'
import Vue from 'vue'
import sourcedata from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {...sourcedata, authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'},
  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },
  actions: {
    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      context.commit('setPost', {postId, post})
      context.commit('appendPostToThread', {postId, threadId: post.threadId})
      context.commit('appendPostToUser', {postId, userId: post.userId})
    },
    updateUser ({commit}, user) {
      commit('setUser', {userId: user['.key'], user})
    }
  },
  mutations: {
    setPost (state, {post, postId}) {
      Vue.set(state.posts, postId, post)
    },
    setUser (state, {user, userId}) {
      Vue.set(state.users, userId, user)
    },
    appendPostToThread (state, {postId, threadId}) {
      Vue.set(state.threads[threadId].posts, postId, postId)
    },
    appendPostToUser (state, {userId, postId}) {
      Vue.set(state.users[userId].posts, postId, postId)
    }
  }
})

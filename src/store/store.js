import Vuex from 'vuex'
import Vue from 'vue'
import sourcedata from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sourcedata,
  actions: {
    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      context.commit('setPost', {postId, post})
      context.commit('appendPostToThread', {postId, threadId: post.threadId})
      context.commit('appendPostToUser', {postId, userId: post.userId})
    }
  },
  mutations: {
    setPost (state, {post, postId}) {
      Vue.set(state.posts, postId, post)
    },
    appendPostToThread (state, {postId, threadId}) {
      Vue.set(state.threads[threadId].posts, postId, postId)
    },
    appendPostToUser (state, {userId, postId}) {
      Vue.set(state.users[userId].posts, postId, postId)
    }
  }
})

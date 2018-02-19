<template>
  <div>
    <div class="container">
      <div class="flex-grid">
        <UserProfileCard v-if="!edit" :user="user" :userPostsCount="userPostsCount"
                         :userThreadsCount="userThreadsCount"/>
        <UserProfileCardEditor v-else :user="user" :userPostsCount="userPostsCount"
                               :userThreadsCount="userThreadsCount"/>
        <div class="col-7 push-top">

          <div class="profile-header">
                  <span class="text-lead">
                      Joker's recent activity
                  </span>
            <a href="#">See only started threads?</a>
          </div>
          <PostList :posts="userPosts"/>
          <hr>
        </div>
      </div>
    </div>

    <div class="forum-stats desktop-only">
      <hr>
      <ul>
        <li><i class="fa fa-user-circle-o"></i>47 users online</li>
        <li><i class="fa fa-user-o"></i>497 users registered</li>
        <li><i class="fa fa-comments-o"></i>49 threads</li>
        <li><i class="fa fa-comment-o"></i>763 posts</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import PostList from '@/components/PostList'
  import UserProfileCard from '@/components/UserProfileCard'
  import UserProfileCardEditor from '@/components/UserProfileCardEditor'
  import { mapGetters } from 'vuex'
  import { countObjectProps } from '@/utils'

  export default {
    components: {PostList, UserProfileCard, UserProfileCardEditor},
    props: {
      edit: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters({
        user: 'authUser'
      }),
      userThreadsCount () {
        return countObjectProps(this.user.threads)
      },
      userPostsCount () {
        return countObjectProps(this.user.posts)
      },
      userPosts () {
        if (this.user.posts) {
          return Object.values(this.$store.state.posts).filter(post => post.userId === this.user['.key'])
        }
        return []
      }
    }
  }
</script>

<style scoped>

</style>

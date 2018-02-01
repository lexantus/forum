<template>
  <div class="col-full">
    <div class="col-full push-top">
      <h1>{{category.name}}</h1>
    </div>
    <CategoryListItem :category="category"/>
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
  import CategoryListItem from '@/components/CategoryListItem'
  import sourceData from '@/data'
  export default {
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data(){
      return {
        category: sourceData.categories[this.id]
      }
    },
    components: {CategoryListItem},
    name: 'page-category'
  }
</script>

<style scoped>

</style>

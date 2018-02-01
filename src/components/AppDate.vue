<template>
  <span :title="timestamp | humanDateFriendly">{{timestamp | diffHuman}}</span>
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      timestamp: {
        required: true,
        type: Number
      }
    },
    filters: {
      humanDateFriendly (date) {
        return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
      },
      diffHuman (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not found</h1>
    <p :class="$style.textLarge">Ooops! Can't find this page. Why don't you
      <router-link :to="{name: 'Home'}">go home instead</router-link>
    </p>
  </div>
</template>

<script>
  export default {}
</script>

<style module>
  .headingLarge {
    font-size: 100px;
  }

  .textLarge {
    font-size: 50px;
    font-weight: lighter;
  }

  .centered {
    text-align: center;
  }
</style>

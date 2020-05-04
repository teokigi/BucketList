<template lang="html">
  <div id="favourite_countries">
    <h2>Bucket List</h2>
    <ul>
      <li v-for="country in bucketList">{{country.name}} <img class="small-flag" :src="country.flag"/> <button v-on:click="updateList">Visit!</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bucket-list',
  props: ['bucketList'],
  methods: {
    updateList(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>

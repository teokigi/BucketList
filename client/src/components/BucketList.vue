<template lang="html">
  <div id="favourite_countries">
    <h2>Bucket List</h2>
    <ul>
      <li v-bind:class="country.visited ? 'visitedClass' : 'unVisitedClass'" v-for="country in bucketList">{{country.name}} <img class="small-flag" :src="country.flag"/> <button v-if="!country.visited" v-on:click="updateList(country)">visiting soon ! ! ! </button></li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: 'bucket-list',
  props: ['bucketList'],
  methods: {
    updateList(country){
        eventBus.$emit('visit-click', country)
    }
  }
}
</script>

<style lang="css" scoped>
.visitedClass{
    background-color: lightgreen;
    font-size:25px;
    font-family:arial;
}
.unVisitedClass{
    background-color:rgb(235, 148, 148);
    font-size:30px;
    font-family:georgia;
}
</style>

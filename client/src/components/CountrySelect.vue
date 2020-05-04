<template lang="html">
  <div class="">
    <label for="country_select">Select a Country:</label>
    <select id="country_select" v-on:change="countrySelected" v-model="selectedCountry">
      <option disabled value="">Select a country</option>
      <option v-for="country in countries" :value="country">{{country.name}}</option>
    </select>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'country-select',
  props: ['countries'],
  data() {
    return {
      selectedCountry: null
    }
  },
  methods: {
    countrySelected(){
      eventBus.$emit('country-selected', this.selectedCountry)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

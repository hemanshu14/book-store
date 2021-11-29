<template>
  <div class="ShowsList__wrapper">
    <h2 class="ShowsList__title">Shows</h2>
    <transition name="fade">
      <div class="ShowsList">
        <ShowListItem
            v-for="(show, index) in shows"
            :key="index"
            :show="show"
        />
      </div>
    </transition>
  </div>
</template>

<script>
  import ShowListItem from "@/components/ShowListItem/ShowListItem";

  export default {
    name: 'ShowsList',
    props: {
      shows: Array
    },
    components: {
      ShowListItem,
    },
    mounted() {
      console.log("shows", this.shows)
    }
  }
</script>

<style lang="scss">
  @import 'ShowsList';
</style>

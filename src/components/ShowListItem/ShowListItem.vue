<template>
  <div class="ShowListItem" :style="{ backgroundImage: `url(${show.image})` }">
    <div class="ShowListItem__details" @click="showDetails(show.id)">
      <h3 class="ShowListItem__title">
        {{ show.name }}
      </h3>
    </div>
  </div>
</template>

<script>

  import {routes} from "@/constants/constants";

  export default {
    name: 'ShowListItem',
    props: {
      show: {
        id: Number,
        name: String,
        image: String,
      }
    },
    methods: {
      showDetails(showId){
        this.$router.push(`${routes.showEpisodeDetails}/${showId}`);
      },
    },
  }
</script>

<style lang="scss">
  @import "ShowListItem";
</style>

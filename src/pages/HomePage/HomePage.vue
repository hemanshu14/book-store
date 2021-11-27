<template>
  <div v-if="showsWithGenres" class="HomePage">
    <div v-if="hasAdminAccess" class="HomePage__slider-list">
      <ShowsList v-for="[title, value] in showsWithGenres" :key="title" :category-title="title" :shows="value"/>
    </div>
    <div v-else class="unauthorizedAccess">
      No Admin Access to view Shows!!
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ShowsList from '../../components/ShowsList/ShowsList.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      showsList: [],
      topRatedShowsList: [],
      showsWithGenres: new Map(),
      genres: [],
      hasAdminAccess: false
    };
  },
  components: {
    ShowsList
  },
  mounted() {

    this.hasAdminAccess = this.$store.getters.user.role === 'ADMIN';

    axios.get('https://api.tvmaze.com/shows')
        .then(response => {
          this.showsList = response.data.filter(res => res.image != null).map(show => {
            return {...show, image: show.image.original}
          }).splice(0, 10);

          this.topRatedShowsList = response.data.filter(res => res.rating != null && res.rating.average > 8).map(show => {
            return {...show, image: show.image.original}
          }).splice(10, 10);

          response.data.filter(res => res.genres != null && res.genres.length !== 0).map(show => {
            return this.genres.push(...show.genres);
          });
          this.genres = [...new Set(this.genres)];

          this.showsWithGenres.set("Top Rated", this.topRatedShowsList);
          this.genres.forEach(genre => {
            this.showsList.forEach(show => {
              if (show.genres.includes(genre)) {
                if (this.showsWithGenres.has(genre)) {
                  this.showsWithGenres.get(genre).push(show);
                } else {
                  let newArray = [];
                  newArray.push(show);
                  this.showsWithGenres.set(genre, newArray);
                }
              }
            })
          })
          console.log("showsWithGenres", this.showsWithGenres)
        })
        .catch(error => {
          console.log(error);
        });
  },
};
</script>

<style lang="scss">
@import 'HomePage';
</style>

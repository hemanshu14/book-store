<template>
  <div class="HomePage">
    <div v-if="hasAdminAccess" class="HomePage__slider-list">
      <ShowsList :shows="showsList"/>
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
      hasAdminAccess: false
    };
  },
  components: {
    ShowsList
  },
  created() {

    this.hasAdminAccess = this.$store.getters.user.role === 'ADMIN';

     axios.get('https://api.tvmaze.com/shows')
        .then(response => {
          this.showsList = response.data.filter(res => res.image != null).map(show => {
            return {...show, image: show.image.original}
          }).splice(0, 10);
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

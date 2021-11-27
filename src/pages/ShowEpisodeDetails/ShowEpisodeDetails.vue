<template>
  <div>
    <div class="ShowsList__details">
      <div @click.stop>
        <ShowDetails :show="showDetails"/>
        <div class="HomePage__slider-list">
          <div class="ShowsList__wrapper" v-if="seasonsWithEpisodes.size>0">
            <div>
              <select @change="getSeasonsWithEpisodes($event.target.value)">
                <option disabled value="">Seasons</option>
                <option :key="index" v-for="(season, index) in seasons" :value="season">Season {{ season }}</option>
              </select>
            </div>
            <EpisodeDetails :key="title" v-for="[title, value] in seasonsWithEpisodes" :episode-id="title" :episodes="value"/>
          </div>
          <div class="ShowsList__wrapper" v-else>
            No Episodes Data to display
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ShowDetails from '../../components/ShowDetails/ShowDetails.vue';
import EpisodeDetails from "@/components/EpisodeDetails/EpisodeDetails";

export default {
  name: 'ShowEpisodeDetails',
  data() {
    return {
      showId: +this.$route.params.showId,
      showDetails: {},
      episodesDetails: [],
      seasons: [],
      seasonsWithEpisodes: new Map
    };
  },
  components: {
    EpisodeDetails,
    ShowDetails
  },
  mounted() {
    axios.get(`https://api.tvmaze.com/shows/${this.showId}`)
        .then(response => {
          this.showDetails = response.data;
          this.showDetails.image = this.showDetails.image.original;
        })
        .catch(error => {
          console.log(error);
        });

    axios.get(`https://api.tvmaze.com/shows/${this.showId}/episodes`)
        .then(response => {
          this.episodesDetails = response.data;
          this.getSeasonsWithEpisodes("1");
          this.episodesDetails.forEach(episode => {
            this.seasons.push(episode.season);
            this.seasons = [...new Set(this.seasons)];
          })
        })
        .catch(error => {
          console.log(error);
        });
  },
  methods: {
    getSeasonsWithEpisodes(value) {
      this.seasonsWithEpisodes = new Map;
      let seasonId = Number(value);
      this.episodesDetails.filter(ep => ep.image != null).forEach(episode => {
        if (episode.season === seasonId) {
          if (this.seasonsWithEpisodes.has(seasonId)) {
            this.seasonsWithEpisodes.get(seasonId).push(episode);
          } else {
            let newArray = [];
            newArray.push(episode);
            this.seasonsWithEpisodes.set(seasonId, newArray);
          }
        }
      })
    }
  }
};
</script>

<style lang="scss">
@import 'ShowEpisodeDetails';
</style>

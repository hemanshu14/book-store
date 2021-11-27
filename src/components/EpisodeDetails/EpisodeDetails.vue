<template>
  <div>
    <div class="EpisodeDetailsItem" v-for="(episode, index) in episodes" :key="index" :style="{ backgroundImage: `url(${episode.image.original})` }">
      <div class="EpisodeDetails">
        <p>{{ index + 1 + '.' + ' ' + episode.name }}</p>
        <p>{{ episode.runtime + 'm' }}</p>
        <p v-if="episode.summary" class="EpisodeSummaryDetails">{{ episodeSummary(episode.summary) }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EpisodeDetails',
  props: {
    episodeId: Number,
    episodes: Array
  },
  methods: {
    episodeSummary(summary) {
      return summary.replace(/(<([^>]+)>)/ig, '');
    }
  }
}
</script>

<style lang="scss">
@import 'EpisodeDetails';
</style>

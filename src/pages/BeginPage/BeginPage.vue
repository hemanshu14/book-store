<template>
  <div class="beginNow bg">
    <div class="beginNow__container">
      <h1 class="beginNow__title">Unlimited Entertainment</h1>
      <p class="beginNow__subtitle">LATEST MOVIES & WEB-SERIES</p>
      <router-link class="btn btn--primary beginNow__btn" :to="signInRoute">
        Begin Now
      </router-link>
    </div>
  </div>
</template>

<script>
  import { routes } from '@/constants/constants';

  export default {
    name: 'BeginPage',
    data() {
      return {
        signInRoute: routes.signInPage,
      };
    },
  }
</script>

<style lang="scss">
  @import "BeginPage";
</style>



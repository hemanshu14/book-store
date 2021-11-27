<template>
  <header class="unauthorizedHeader">
    <Logo class="headerLogo" />
    <div class="unauthorizedHeaderActions">
      <router-link v-if="routePath !== signInRoute" class="btn btn--primary" :to="signInRoute">
        Sign in
      </router-link>
    </div>
  </header>
</template>

<script>
import Logo from '../../assets/images/srtimm-logo.svg';
import { routes } from '@/constants/constants';

export default {
  name: 'UnauthorizedHeaderView',
  data() {
    return {
      signInRoute: routes.signInPage,
    };
  },
  computed: {
    routePath() {
      return this.$route.path;
    },
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
@import "./UnAuthorizedHeaderView.scss";
</style>

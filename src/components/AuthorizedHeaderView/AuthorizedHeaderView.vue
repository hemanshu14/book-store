<template>
  <header :class="[{ 'Header--bg': isScrolled }, 'Header']">
    <router-link :to="homeRoute">
      <Logo class="Header__logo"/>
    </router-link>
    <div class="logout_button">
      <button class="btn btn--primary" v-on:click="onLogOut">
        Log out
      </button>
    </div>
  </header>
</template>

<script>
import Logo from '../../assets/images/srtimm-logo.svg';
import {actions, routes} from '@/constants/constants';

export default {
  name: 'AuthorizedHeaderView',
  data() {
    return {
      search: '',
      isMenuOpened: false,
      isScrolled: false,
      homeRoute: routes.homePage
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
  components: {
    Logo,
  },
  methods: {
    onLogOut() {
      this.$store.dispatch(actions.logout);
    }
  }
};
</script>

<style lang="scss">
@import "./AuthorizedHeaderView.scss";
</style>

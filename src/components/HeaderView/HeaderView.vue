<template>
  <div v-if="isUserAuthenticated">
    <AuthorizedHeaderView />
  </div>
  <div v-else>
    <UnauthorizedHeaderView />
  </div>
</template>

<script>
import AuthorizedHeaderView from '../AuthorizedHeaderView/AuthorizedHeaderView.vue';
import UnauthorizedHeaderView from '../UnAuthorizedHeaderView/UnAuthorizedHeaderView.vue';
import { actions } from '@/constants/constants';

export default {
  name: 'HeaderView',
  computed: {
    isUserAuthenticated() {
      return (
          this.$store.getters.user !== null &&
          this.$store.getters.user !== undefined
      );
    },
  },
  components: {
    AuthorizedHeaderView,
    UnauthorizedHeaderView,
  },
  methods: {
    onLogOut() {
      this.$store.dispatch(actions.logout);
    },
  },
};
</script>

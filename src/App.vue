<template>
  <div>
    <HeaderView />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import HeaderView from './components/HeaderView/HeaderView.vue';

  export default {
    components: {
      HeaderView,
    },
  };
</script>

<template>
  <div class="home">
    <list-item />
  </div>
</template>

<script>
// @ is an alias to /src
import ListItem from '../components/ListItem.vue';

export default {
  name: 'home',
  components: {
    ListItem
  }
}
</script>

<template>
  <div>Home count: {{count}}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {

    }
  },
  components: {

  },
  computed: {
    ...mapState(['count'])
  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
</style>
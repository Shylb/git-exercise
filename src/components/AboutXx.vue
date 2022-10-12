<template>
  <div>I am About   count: {{count}}</div>
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
    console.log(this.count);
  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
</style>
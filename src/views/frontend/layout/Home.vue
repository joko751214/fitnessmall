<template>
    <div class="home">
      <Sidebar/>
      <router-view class='main-content'/>
      <Footer/>
    </div>
</template>

<script>

import Sidebar from '@/components/frontend/Sidebar.vue';
import Footer from '@/components/frontend/Footer.vue';

export default {
  components: {
    Sidebar,
    Footer,
  },
  data() {
    return {
      cartNum: 0,
    };
  },
};
</script>

<style>
@charset "UTF-8";
* {
  font-family: 'Microsoft JhengHei', sans-serif;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  font-weight: bold;
}

.main-content {
  min-height: 100%;
}
.container {
  color: black;
}
body,html {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>

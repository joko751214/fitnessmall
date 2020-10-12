<template>
  <div class="sticky-top">
    <div class="container">
      <nav class="navbar py-1 navbar-expand-lg navbar-top">
        <router-link class="navbar-brand" to="/" exact>Fitnessmall</router-link>
        <button class="navbar-toggler navbar-light" type="button"
        data-toggle="collapse"
        data-target="#backendNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="backendNavbar">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/favorite">
                <i class="fas fa-heart"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">菜單 MENU</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車 CART</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartNum: 0,
    };
  },
};
</script>
<style lang="scss">
.sticky-top {
  background-color: #37523d;
}
.navbar-top {
  a {
    color: white;
    &:hover {
      color: #d2e8da;
    }
  }
}
.nav-link {
  color: white;
}
.navbar-brand {
  font-family: 'Great Vibes', cursive;
  font-size: 40px;
}
@media screen and (max-width: 767px){
    .navbar-brand {
        font-size: 28px;
    }
    .nav-item {
      font-size: 14px;
    }
}
@media screen and (max-width: 375px){
    .navbar-brand{
        font-size: 20px;
    }
    .nav-item {
      font-size: 12px;
    }
}
@media screen and (min-width: 768px) {
    .nav-link.router-link-active {
        border-bottom: solid #fff 3px;
    }
  }
</style>

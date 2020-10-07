<template>
  <footer class="footer">
    <div class="container p-1">
      <div class="row footer-text">
        <div class="col-12 col-md-3 px-0">
          <ul class="list-unstyled mb-0">
            <li class="nav-item menu-list list1">
              <router-link to="/products"
                          class="nav-link px-0">
                商品列表
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-3 px-0">
          <ul class="list-unstyled mb-0">
            <li class="nav-item menu-list list2">
              <router-link to="/about"
                          class="nav-link px-0">
                關於我們
              </router-link>
            </li>
          </ul>
        </div>
        <div class="icon-box text-center col-12 col-md-6">
          <ul class="d-flex justify-content-center list-unstyled">
            <li class="px-2 pt-2">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="px-2 pt-2">
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="px-2 pt-2">
              <a href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class='copyright'>
        <p>Copyright © 2020 Jin Creative Collective.</p>
        <p>Image source : Unsplash</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.footer {
  font-weight: 900;
  background-color: #667B68;
  li a {
    font-size: 20px;
    display: block;
  }
}
.icon-box i {
  font-size: 28px;
  color: #fff;
  &:hover {
    color:#000;
  }
}
.copyright p {
  color: #fff;
  text-align: center;
}
.menu-list {
  a {
    color: #fff;
    &:hover {
      color: #000;
    }
  }
}
.list1 {
  text-align: center;
}
@media screen and (max-width: 767px){
  .list2 {
    text-align: center;
  }
}
@media screen and (max-width: 576px){
  .menu-list .nav-link{
    font-size: 18px;
  }
  .icon-box i{
    font-size: 24px;
  }
}
</style>

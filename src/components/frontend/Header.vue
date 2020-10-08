<template>
  <!-- <header class='jumbotron'>
    <div class="container"></div>
  </header> -->
  <div class="header">
    <div class="container">
      <div class="jumbotron p-0 m-0"></div>
      <ul class="header-text">
        <li>
          <h2>健康 美味 沙拉野餐</h2>
        </li>
        <li>
          <p>品嘗生菜的鮮甜爽脆</p>
        </li>
        <li>
          <router-link class="nav-link" to="/products">吃吃看</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  background-color: #eae5df;
}
.jumbotron {
  background: url('https://images.unsplash.com/photo-1522248105696-9625ba87de6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80') right top;
  background-size: cover;
  height: 500px;
}
.header-text {
  position: absolute;
  top: 30%;
  left: 50%;
  background: rgba(255,255,255,0.8);
  padding: 15px 20px;
  color: #37523d;
  text-align: center;
  list-style: none;
  a {
    display: inline-block;
    font-weight: 700;
    border-radius: 20px;
    padding: 5px 15px;
    background-color: rgb(122, 153, 108);
    color: #fff;
    &:hover {
      background-color: #37523d;
    }
  }
  p {
    margin-bottom: 8px;
  }
}
@media screen and (max-width: 1024px){
  .header-text {
    position: relative;
    top: 0;
    left: 0;
  }
}
@media screen and (max-width: 767px){
    .jumbotron {
      height: 400px;
    }
}
@media screen and (max-width: 576px){
    .jumbotron {
      height: 300px;
    }
}
</style>

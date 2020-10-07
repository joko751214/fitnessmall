<template>
  <!-- <header class='jumbotron'>
    <div class="container"></div>
  </header> -->
  <div class="header">
    <div class="container">
      <div class="jumbotron p-0 m-0">
        <!-- <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/LOuEOLJQsyI3atxgmUbuWQjS9wuWlEi7Q8Zqn7b9U7kRaFvX5YjfGkhMwL9MiAse5zLS8AsxJiNArd0rIWjD2qcrgISYXOXkx7wmmh0HpY7pR7gedknz58n0ShHPCzes.jpg" alt=""> -->
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
  </div>
  <!-- <div class="container coverflow">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/7CWruTfUDAMEDSnjSofXOvW0EWdSHdgovex4uEdOMdxWzBoWFV05sFDefhFjAoCYcIc1JXxaaoTJCkvHySOH23a9AC9S7wPcN50q5yJTwAusY1wWyYBOtarrgS6nMuhu.jpg" class="carouselImg" alt="輪播美食圖">
          <div class="carousel-text">
            <h2>活力 從早餐開始</h2>
            <p>每天最重要的一餐</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/lNBA5vwM6bSaI45KCdUwMnVinM1VxFEq5HpgTLZDDM9DyZ3l9jzwi0HYjZLiTXeEhgyh7Eams9Sxh3NShYbiTbzH5qnrWCmxM4MF5HYxyGgQFqJlajhjfUmsfEgb6Zrr.jpg" class="carouselImg" alt="輪播美食圖">
        </div>
        <div class="carousel-item">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ZGelWqLa324LilC78Bf1tT5vBTxar6OtbGdxtmNAtUxs6EurC6lxZtKCfYiI5QRV7b8nqmIw15BXzaztwB3CclWt2aLSfpO3QE3xbg3sTb7tAmlGYIRLY8vLZoQLhGQq.jpg" class="carouselImg" alt="輪播美食圖">
          <div class="carousel-text">
            <h2>產地直送 新鮮</h2>
            <p>享用健康、有機的水果</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev"
        href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next"
        href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div> -->
</template>

<style lang="scss">
.header {
  background-color: #eae5df;
}
.jumbotron {
  background-image: url(https://images.unsplash.com/photo-1522248105696-9625ba87de6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80);
  background-size: cover;
  position: relative;
  height: 500px;
  // img {
  //   width: 100%;
  //   display: block;
  //   // height: 50%;
  // }
}
.carousel-item {
  position: relative;
}
.carouselImg {
  width: 70%;
  display: block;
  margin: 0 auto;
}
.header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(255,255,255,0.8);
  padding: 15px 20px 0px 20px;
  color: #37523d;
  text-align: center;
  text-decoration: none;
}
.carousel-text h2 {
  font-weight: bold;
}
.carousel-text p {
  font-weight: normal;
}
@media screen and (max-width: 767px){
    .carousel-text h2{
        font-size: 20px;
    }
    .carousel-text p {
      font-size: 14px;
    }
}
@media screen and (max-width: 375px){
    .carousel-text h2{
        font-size: 15px;
    }
    .carousel-text p {
      font-size: 12px;
    }
}
</style>

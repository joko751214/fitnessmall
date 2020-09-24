<template>
  <!-- <header class="jumbotron rounded-0">
    <div class="container">
      <h1 data-0="transform: translateY(-50px)"
      data-500="transform: translateY(80px)">享受蔬食的喜悅與美好</h1>
      <hr/>
      <h4>均衡飲食是健康的必要條件</h4>
    </div>
  </header> -->
  <div class="container">
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
          <div class="carousel-text">
            <h2>健康 美味 沙拉野餐</h2>
            <p>品嘗生菜的鮮甜爽脆</p>
          </div>
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
  </div>
</template>

<script>
export default {

};
</script>

<style>
/* .jumbotron {
  text-align: center;
  background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/7CWruTfUDAMEDSnjSofXOvW0EWdSHdgovex4uEdOMdxWzBoWFV05sFDefhFjAoCYcIc1JXxaaoTJCkvHySOH23a9AC9S7wPcN50q5yJTwAusY1wWyYBOtarrgS6nMuhu.jpg);
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 0;
}
.jumbotron .container {
  color: white;
  padding: 200px 0px;
}
.jumbotron h1 {
  font-weight: 900;
}
.jumbotron hr {
  max-width: 50px;
  border: 2px solid #ff6e3a;
}
.jumbotron h4 {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 900;
} */
.carousel-item {
  position: relative;
}
.carouselImg {
  width: 100%;
}
.carousel-text {
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(255,255,255,0.8);
  padding: 15px 20px 0px 20px;
  color: #37523d;
  text-align: center;
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

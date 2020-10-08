<template>
  <div>
    <Sidebar/>
    <Header/>
    <div class="container">
      <section class="section_about">
        <div class="row">
          <div class="col-sm-12">
            <h1 v-scrollanimation>美食饗味</h1>
            <hr/>
          </div>
          <div class="col-md-4 col-sm-6 imgWrap1 text" v-scrollanimation>
            <router-link :to="{ name: 'products', params: { categoryName: '早餐套餐' }}">
              <div class='item-img'>
                <div class="more">了解更多</div>
              </div>
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/gNZMjc9wYCw7larB8Vz3G54XLTMeIJls2Wt3PrTj98HXGvgexZJgqvainahOSYUYCfK80DeyfZYBfJxlzVPZmMZ9pTpH9THnFhJfLmGoISjtydX2uDZXYJHjIIEambSo.jpg" alt="美味的餐點"/>
            </router-link>
            <h3>早餐</h3>
            <p>
            每天都拿不定主意早餐要吃什麼嗎?快來FITNESMALL挑選美味可口的早餐，讓你每天早晨活力充沛、健康滿滿。
            </p>
          </div>
          <div class="col-md-4 col-sm-6 imgWrap2 text" v-scrollanimation>
            <router-link :to="{ name: 'products', params: { categoryName: '沙拉' }}">
              <div class='item-img'>
                <div class="more">了解更多</div>
              </div>
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/LaogsHFcz3Jf2t7qFOV03m5lQzMN0Sr5WhVWCWKnUWyE9dTDcpQch7CH5qK4fmxEZSscjqZ34M5aFKJFYYJ6Ae01fhXWZKlZ3vVEt2vJbPknFaxlPThbAYMSwBunn0oS.jpg" alt="美味的餐點"/>
            </router-link>
            <h3>沙拉</h3>
            <p>
            新鮮沙拉為FITNESSMALL最經典的產品，採用豐富的萵苣、蘿蔓、歐式生菜與蔬果，點綴自製的美味醬料，品嘗生菜的鮮甜爽脆。
            </p>
          </div>
          <div class="col-md-4 col-sm-6 imgWrap3 text" v-scrollanimation>
            <router-link :to="{ name: 'products', params: { categoryName: '水果拼盤' }}">
              <div class='item-img'>
                <div class="more">了解更多</div>
              </div>
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/15nWEV7ZEpByyF3raxzmviII2DYK7qmmQjAsoC0hILRQuJUT9SsIsACaQOQpl53gsDaNiOCcZpo7ahAdbRsmeFpnhJR9YlievGkLmIVgDIU0gg9MUBXl71fQfWKlzeve.jpg" alt="美味的餐點"/>
            </router-link>
            <h3>水果拼盤</h3>
            <p>
            產地新鮮直送的水果，除了新鮮之外，還是新鮮。提供更精緻、多元且層次更豐富的餐食，讓您有更多的輕食選擇。
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class='about_us'>
      <div class="container">
        <h2 class='about-us-title'>about us</h2>
        <div class="row">
          <div class="col-md-5">
            <img class='about-us-image' src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/YlriFvjFlOWPowIagZzxcrHczCSPC9ljc0RvaBv9mXuAYwlZU9PtbEDxn6dTi32MloSMEiIPntbMe13KItm1BnpP5KBiapA5rZyzHPXcjjgvWZe8A1yC55NomkbWLImH.jpg" alt="AboutUsImage">
          </div>
          <div class="col-md-7">
            <p class='about-us-text'>
              來自法國的三星主廚說：生活必須是一件愉快的事情，這一切應該從你的早餐開始。
              FITNESSMALL秉持著「買得起也要吃的飽」的經營理念，
              除了要給消費者一個"專屬於您"的感覺外，也要在消費者的心中建立起"FITNESSMALL的早餐是專屬為我現做的"。
            </p>
            <p>
              於是，我們堅持，是必須從拒絕開始，捨去過度奢華的裝潢，回歸最原本的初衷，保留原粹食材的真實性，希望從你第一口咬的那一刻起，就會知道擁有真實的感受。
            </p>
            <p>
              歷經的這些日子，FITNESSMALL也逐漸的烙印在消費者心中，並陪伴著無數的早晨，努力打造一份活力早餐，成就一個事業。
            </p>
          </div>
        </div>
        <div class="row" style="margin-top: 15px;">
          <div class="col-md-6 pr-0">
            <img class='about-us-image' src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/CoGak7heELUpEfEOVBPu0AGx3AYP8xFQDghQRs22n3KLO35IfC3cww4plgZOfpN93lul6WVpxpdlmLyojNT1CXvBZf2aTdl4pUe7ILPuGorWQfOKInfh4ReufEZvrKbp.jpg" alt="AboutUsImage">
          </div>
          <div class="col-md-6">
            <img class='about-us-image' src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/uSl9X6odnWfhVtl9LcxjeSkQuW7nQmF5chfwtm8S2aY7BPQAIPsDYLGRTphxYA7k2jWdWWeMV1Er51bNDSWDsr8wGKTXcs3M0uBrROlUJsqSIoLxRtr7TsENKHL3R4xs.jpg" alt="AboutUsImage">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="section_story">
        <div class="row">
          <div class="col-md-5 pr-0 foodImg" v-scrollanimation></div>
          <div class="col-sm-12 col-md-7 story-info">
            <div class="col-sm-12 content">
              <h1 v-scrollanimation>健康 & 飲食</h1>
              <hr/>
            </div>
            <div class="p-0 features">
              <div class="row">
                <div class="col-4" v-scrollanimation>
                  <i class="fas fa-stroopwafel"></i>
                  <h4>美味可口</h4>
                </div>
                <div class="col-4" v-scrollanimation>
                  <i class="fas fa-seedling"></i>
                  <h4>健康營養</h4>
                </div>
                <div class="col-4" v-scrollanimation>
                  <i class="fas fa-utensils"></i>
                  <h4>挑動味蕾</h4>
                </div>
              </div>
            </div>
            <div class="col-sm-12 content">
              <p v-scrollanimation>
                食物能夠傳遞喜悅與滿足。從蔬果產地、水質清洗到人工逐葉揀選，講究新鮮品質與食安衛生，無毒且口感水嫩清脆，
                打造安心且獨一無二的輕食品，讓您在味蕾間，品嘗疏食鮮甜的感動與原味本質。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/frontend/Header.vue';
import Sidebar from '@/components/frontend/Sidebar.vue';
import Footer from '@/components/frontend/Footer.vue';

export default {
  components: {
    Sidebar,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.section_about {
  padding: 50px 0px;
  h1 {
    color: #000;
    font-weight: 900;
  }
  .text {
    h3,p {
      margin-top: 15px;
    }
    p {
      color: rgba(0,0,0,.6);
    }
    a {
      display: block;
      position: relative;
      &:hover {
        .item-img {
          opacity: 1;
        }
        .caption {
          transform: translateY(0px);
        }
      }
    }
  }
  img {
    width: 100%;
  }
  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all .5s cubic-bezier(.41,.01,.57,1.61);
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
  .imgWrap2 {
    transition-delay: .1s;
  }
  .imgWrap3 {
    transition-delay: .3s;
  }
}

.about_us {
  background: #e0ece4;
  padding: 50px 0px;
  margin-bottom: 50px;
}
.about-us-title {
  font-family: 'Great Vibes', cursive;
  text-align: center;
  font-size: 60px;
  color: #37523d;
}
.about-us-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.about-us-text {
  line-height: 35px;
  font-weight: normal;
}

.section_story {
  color: white;
  margin-bottom: 50px;
  text-align: center;
  color: #000;
  .foodImg {
    background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tedycYMX8MnNEGbu9PxjqZbJx1bkqS09HGv94yQ49D3PsGnM9itM6bZ19bsHHxBGO3rdnrZFyhwccPVkG0NptFKDFAYjLFH6jrKBFqteyz9zcN04HrwAFHUU3xWXNGxo.jpg);
    background-repeat: no-repeat;
    background-origin: content-box;
  }
  .features {
    margin-top: 40px;
    margin-bottom: 40px;
    i {
      font-size: 40px;
    }
    .before-enter{
      transform: scale(1.5);
      opacity: 0;
      transition: all .5s ease-out;
    }
    .enter{
      transform: scale(1);
      opacity: 1;
    }
  }
  .before-enter {
    background-size: 150%;
    background-position: 0% 0%;
    transition: all .5s ease-out;
  }
   .enter {
    background-size: 100%;
    background-position: 50% 50%;
  }
  .content {
    .before-enter{
      transform: scale(1.5);
      opacity: 0;
      transition: all .5s ease-out;
    }
    .enter{
      transform: scale(1);
      opacity: 1;
    }
  }
}
.story-info {
  background-color: rgb(234, 229, 223);
  padding: 20px;
}

.item-img{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0,0,0,.4);
  transition: opacity .5s ease;
  z-index: 100;
}
.more{
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  letter-spacing: 2px;
  transition: transform .5s ease;
  color: #fff;
}

@media screen and (max-width: 767px) {
  .section_about .imgWrap2 {
    transition-delay: 0s;
  }
  .section_about .imgWrap3 {
    transition-delay: 0s;
  }
  .about-us-image {
    display: none;
  }
  .foodImg {
    display: none;
  }
}
</style>

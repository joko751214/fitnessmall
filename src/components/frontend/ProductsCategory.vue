.<template>
  <div class="my-5">
    <h4 class="font-weight-bold">商品介紹</h4>
    <div class="row">
      <div class="col-lg-4 my-4">
        <div class="card border-0 mb-4">
          <a href="#"
             @click.prevent="toCategory('沙拉')">
            <div style="
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                    background-image:url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/SGvCdPPn9jw2ARKfHWCUiLIKrTWbwWtMOp5ZL0kSRkza2SXrGQEQFcj4G1uyQO3Uu6mQM8NrQquNbtRuNwpxudCuY986zDz8ux1xvr4OeZtxlgaQVeiSXW2vCG7aBMlE.jpg')
                  "
                 class="rounded-0">
                 <h2 class='title'>精選沙拉</h2>
                 <h3 class='description'>採用豐富的萵苣、蘿蔓、歐式生菜與蔬果</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 my-4">
        <div class="card border-0 mb-4">
          <a href="#"
             @click.prevent="toCategory('早餐套餐')">
            <div style="
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                    background-image:url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/cAgR5BV5on9QdxXu0xo1dH8BmtPy54xYlL1vvTn2ujMB3AhF7K7us1LhfDhFdjJUCsfxqPZd1ftqhpgbIOgz7OE6EwYWsGPBhicmNlCHywujAteyPfE2QnqgZcUPscKn.jpg')
                  "
                 class="rounded-0">
                 <h2 class='title'>低GI美味早餐</h2>
                 <h3 class='description'>還在思考早餐要吃什麼嗎?快來FITNESSMALL看看吧~~</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 my-4">
        <div class="card border-0 mb-4">
          <a href="#"
             @click.prevent="toCategory('水果拼盤')">
            <div style="
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                    background-image:url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/eHAXBPnYATGKLJtRauUHU4xMfhf18Q4sVkAh0biGFjLs1B25PMZKFKWyalWSKcXLGtl66Is9vRjIdPPtPk29asVB6cfff6jiX0RajGWn4ViYKfolR5d0jHKuYDpB1K9Y.jpg')
                  "
                 class="rounded-0">
                 <h2 class='title'>輕盈水果拼盤</h2>
                 <h3 class='description'>水果為產地新鮮直送，除了新鮮還是新鮮!</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toCategory(Name) {
      this.$router.push({
        name: 'products',
        params: { categoryName: Name },
      });
    },
  },
};
</script>

<style>
.title {
  opacity: 0;
  transition: 1s;
  position: relative;
}
.description {
  opacity: 0;
  transition: 1s;
  position: relative;
  text-align: center;
  top: 80%;
}

a:hover .description {
  opacity: 1;
  color: white;
  position: relative;
  text-align: center;
  top: 40%;
  transform: translateY(-40%);
}
a:hover .title {
  opacity: 1;
  color: white;
  position: relative;
}
</style>

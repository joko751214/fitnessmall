<template>
  <div class="header">
    <div class="container">
      <div class="jumbotron p-0 m-0 rounded-0"></div>
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

<style lang="sass">
.header
  position: relative
  background-color: #e0ece4
  .jumbotron
    background: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/LOuEOLJQsyI3atxgmUbuWQjS9wuWlEi7Q8Zqn7b9U7kRaFvX5YjfGkhMwL9MiAse5zLS8AsxJiNArd0rIWjD2qcrgISYXOXkx7wmmh0HpY7pR7gedknz58n0ShHPCzes.jpg') right top
    background-size: cover
    height: 500px
  .header-text
    position: absolute
    top: 50%
    left: 35%
    transform: translateX(-35%) translateY(-50%)
    background: rgba(255,255,255,0.8)
    padding: 15px 20px
    color: #37523d
    text-align: center
    list-style: none
    a
      display: inline-block
      font-weight: 700
      border-radius: 20px
      padding: 5px 15px
      background-color: rgb(122, 153, 108)
      color: #fff
      &:hover
        background-color: #37523d
    p
      margin-bottom: 8px

@media screen and (max-width: 1024px)
  .header
    .header-text
      position: relative
      top: 0
      left: 0
      transform: initial
@media screen and (max-width: 767px)
  .header
    .jumbotron
      height: 400px
@media screen and (max-width: 576px)
  .header
    .jumbotron
      height: 300px
</style>

<style>
    .order{
      text-align: center;
      line-height: 50px;
    }
</style>

<template>
  <div class="order">
    <span>我的订单</span>
  <van-tabs active="a">
    <van-tab title="全部订单" name="a">
      <span>订单1</span><br>
      <span>订单2</span><br>
      <span>订单3</span><br>
      <span>家具保养</span><br>
    </van-tab>
    <van-tab title="未付款" name="b">
      <span>洗衣</span><br>
      <span>拖地</span><br>
      <span>扫地</span><br>
    </van-tab>
    <van-tab title="未服务" name="c">
      <span>干洗</span><br>
      <span>配送</span><br>
      <span>做饭</span><br>
    </van-tab>
    <van-tab title="未评价" name="d">
      <span>修电视</span><br>
      <span>修电脑</span><br>
      <span>修手机</span><br>
    </van-tab>
  </van-tabs>
  </div>
</template>


<template>
  <div class="shoping">
    <!-- <div style="line-height:50px; text-align:center">
      <van-row>
          <van-col span="7">返回</van-col>
          <van-col span="10">商品分类</van-col>
          <van-col span="7"></van-col>
      </van-row>
    </div> -->
    <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow  
    bind:click-left="onClickLeft">
          <van-icon name="search" slot="right" />
    </van-nav-bar>
    <!-- bind:click-right="onClickRight" -->
    </div>
    <div>
      {{products}}
      <van-tabs v-model="activeName" >
        <van-tab v-for="index in categories" :title="index.name"  :name="index.id" :key="index.id">
           <van-card  v-for="item in productStatusFilter(index.id)" :key="item.id"
                :num="num"
                :price='item.price'
                :desc="item.description"  
                :title="item.name"
                :thumb="item.photo"
              >
                <div slot="tags">
                  <van-tag plain type="danger">{{item.status}}</van-tag>
                  <van-tag plain type="danger">{{item.status}}</van-tag>
                </div>
                <div slot="footer">
                  <van-button size="mini" @click="jian(index.id)">-</van-button>
                  <van-button size="mini" @click="jia(index.id)">+</van-button>
                </div>
          </van-card>
      
        </van-tab>
      </van-tabs>
    </div>
    <div>
      <van-submit-bar
            :price="price"
            button-text="提交订单"
      >
            <van-checkbox>全选</van-checkbox>
            <span slot="tip">
              你的收货地址不支持同城送, <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  created(){
      this.findAllCategories()
      this.findAllProducts();
      // this.queryproduct(this.params);
  },
  data() {
    return {  
       num:0,
       price:0
      //  disabled:true
      // params:{
      //   page:0,
      //   pageSize:100
      // }
    }
  },
  methods: {
    ...mapActions("product",["findAllProducts"]),
    ...mapActions("category",["findAllCategories"]),
    jian(id){
      if(this.num>0){
        this.num--
      }
    },
    jia(){
      this.num++
    }
    // ...mapActions("product",["queryproduct"]),
  // onClick(name, title) {
  //      this.productStatusFilter(name)
  //   }
   },
  computed: {
    ...mapGetters("product",["productStatusFilter"]),
    ...mapState("product",["products"]),
    ...mapState("category",["categories"]),
    ...mapState("shoping",["activeName"]),
    
  },
}
</script>
<style>
</style>
<template>
  <div class="home">
    <van-row>
      <img style="width:100%" src="../../assets/images/home_02.png" alt="">
    </van-row>
    <van-row>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="c in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name" 
          @click="searchcategory(c.id)"
        />
      </van-grid>
    </van-row>
    <hr>
    <div>所有商品</div>
    <van-row>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="c in products"
          :key="c.id"
          :icon="c.photo"
          :text="c.name"
        />
      </van-grid>
    </van-row>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations}from 'vuex'
export default {
  created(){
    this.findAllCategories();
     this.findAllProducts();
  },
  computed:{
    ...mapState("category",["categories"]),
    ...mapState("product",["products"])
  },
  methods:{
    ...mapActions("category",["findAllCategories"]),
    ...mapActions("product",["findAllProducts"]),
    ...mapMutations("shoping",["categoryname"]),
    searchcategory(name){
      this.categoryname(name)
       this.$router.push("shoping")
    }

  }
}
</script>
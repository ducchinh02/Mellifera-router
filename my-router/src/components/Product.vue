<template>
  <div class="product-router">  
      <!-- <App :listdata="cart" :count="count" :total="total" /> -->
    <div class="banner">
            <div class="banner-text text-center grid-system">
                <h1>Shop</h1>
            </div>
        </div>
        <div class="container grid-system">
            <div class="row row-container">
                <div class="col-lg-3 col-md-12 items">
                    <div class="categories margin">
                        <h3>CATEGORIES</h3>
                        <div class="list-menu">
                            <a href="#">Honey & Comb</a>
                            <a href="#">Honey Packets</a>
                            <a href="#">Organic Honey</a>
                            <a href="#">Raw & Unfiltered Honey</a>
                            <a href="#">Raw Energy</a>
                            <a href="#">Spoonfull of Honey</a>
                            <a href="#">Unfiltered Honey</a>
                        </div>
                    </div>

                    <div class="popular margin">
                        <h3>POPULAR</h3>
                        <div class="product-lists">
                            <div class="product">
                                <div class="product-img">
                                    <a href=""><img src="../assets/img/honeyImg/honeyImg/Shop-list-img1.jpg" alt="" srcset=""></a>
                                    <div class="product-text">
                                        <h5><a href="#">PURE RAW HONEY</a></h5>
                                        <span class="price">$20.00</span>
                                    </div>
                                </div>
                                <div class="product-img">
                                    <a href=""><img src="../assets/img/honeyImg/honeyImg/Shop-list-img15.jpg" alt=""
                                            srcset=""></a>
                                    <div class="product-text">
                                        <h5><a href="#">WILDFLOWER HONEY</a></h5>
                                        <span class="price">$15.00</span>
                                    </div>
                                </div>
                                <div class="product-img">
                                    <a href=""><img src="../assets/img/honeyImg/honeyImg/Shop-list-img20.jpg" alt=""
                                            srcset=""></a>
                                    <div class="product-text">
                                        <h5><a href="#">FOREST HONEY</a></h5>
                                        <span class="price">$10.00</span>
                                    </div>
                                </div>
                                <div class="product-img">
                                    <a href=""><img src="../assets/img/honeyImg/honeyImg/Shop-list-img12.jpg" alt=""
                                            srcset=""></a>
                                    <div class="product-text">
                                        <h5><a href="#">HONEY BEE</a></h5>
                                        <span class="price">$12.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="filter margin">
                        <h3>Filter</h3>
                        <div class="range-slide">
                            <div class="slide">
                                <div class="line" id="line" style="left: 0%; right: 0%;"></div>
                                <span class="thumb" id="thumbMin" style="left: 0%;"></span>
                                <span class="thumb" id="thumbMax" style="left: 100%;"></span>
                            </div>
                            <input id="rangeMin" v-on:mouseover="rangeMin()" type="range" max="50" min="10" step="10"
                                value="0">
                            <input id="rangeMax" v-on:mouseover="rangeMax()" type="range" max="50" min="10" step="10"
                                value="50">
                        </div>
                        <div class="filter-price">
                            <div class="price-select">
                                <div class="price-text">
                                    <span>Price : $</span><span id="min">10</span><span> - </span>
                                    <span>$</span><span id="max">50</span>
                                </div>
                                <button class="button" v-on:click="filterPrice()">Filter</button>
                            </div>
                        </div>
                    </div>



                </div>
                <div class="col-lg-9 col-md-12 items">
                    <div class="showing-result">
                        <div class="result">
                            <p>Showing 1-9 of 14 results</p>
                        </div>
                        <div class="sorting" v-on:click="sorting()">
                            <span>Default sorting</span>
                            <i class='bx bx-chevron-down'></i>
                        </div>
                        <div class="select-sorting">
                            <ul class="select-srt">
                                <li class="list-sorting">Default sorting</li>
                                <li class="list-sorting">Sort by popularity</li>
                                <li class="list-sorting">Sort by average rating</li>
                                <li class="list-sorting">Sort by latest</li>
                                <li class="list-sorting">Sort by price : low to high</li>
                                <li class="list-sorting">Sort by price : high to low </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="product-items col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in filter"
                            :key="index">
                            <a href="#">
                                <div class="product-result-img">
                                    <img v-bind:src="item.img" v-bind:alt="item.title">
                                </div>
                                <div class="product-detail">
                                    <h4 class="product-result-name">{{ item.title }}</h4>
                                    <div class="product-result-price price">${{ item.price.toFixed(2)}}</div>
                                    <div v-on:click="addToCart(item)" class="add-to-cart"><a
                                            href="javascript:void(0)"><i class='bx bx-basket'></i>Add to cart</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="next-page text-center">
                        <span class="page atPage">1</span>
                        <span class="page">2</span>
                        <span class="nextPage"><i class='bx bx-chevron-right'></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="grid-system">
                <div class="row inFooter">
                    <div class="col-lg-3 col-md-6 col-sm-12 ft-content">
                        <h4>Contact info</h4>
                        <div class="ft-detail">
                            <div class="ft-text"><a href=""><i class="fa fa-location-arrow" aria-hidden="true"></i>Blue
                                    Spring Road 405 Sugar Land, TX 77478</a></div>
                        </div>
                        <div class="ft-detail">
                            <div class="ft-text"><a href=""><i class="fa fa-phone" aria-hidden="true"></i>Phone: (555)
                                    333-4422</a></div>
                        </div>
                        <div class="ft-detail">
                            <div class="ft-text"><a href=""><i class="fa fa-envelope-o"
                                        aria-hidden="true"></i>bee@qodeinteractive.com</a></div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ft-content">
                        <h4>Products</h4>
                        <div class="ft-detail">
                            <div class="ft-text"><a href="">Queen Bee Honey</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Pure Raw Honey</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Heather Honey</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Wildflower Honey</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Honey Face Cream</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Manuka Honey</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Raw Honeycomb</a></div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ft-news ft-content">
                        <h4>News</h4>
                        <div class="ft-detail">
                            <span class="span-news">APRIL 27, 2020</span>
                            <h5 class="ft-text"><a href="#">Raw Honeycomb</a></h5>
                        </div>
                        <div class="ft-detail">
                            <span class="span-news">APRIL 27, 2020</span>
                            <h5 class="ft-text"><a href="#">HONEY FROM YOUR OWN BEEHIVE</a></h5>
                        </div>
                        <div class="ft-detail">
                            <span class="span-news">APRIL 27, 2020</span>
                            <h5 class="ft-text"><a href="#">KEEPING SWARM FROM LEAVING?</a></h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ft-content">
                        <h4>our hive</h4>
                        <div class="ft-detail">
                            <div class="ft-text"><a href="">Our Story</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Our Retail Locations</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">The Bee Cause</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Blog</a></div>
                        </div>
                        <div class="ft-detail ft-products">
                            <div class="ft-text"><a href="">Bee Garden Tours</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 text-center">
                    <div class="icon-social">
                        <span><a href="#"><i class='bx bxl-facebook'></i></a> </span>
                        <span><a href="#"><i class='bx bxl-instagram'></i></a> </span>
                        <span><a href="#"><i class='bx bxl-twitter'></i></a> </span>
                    </div>
                    <div class="ft-bottom-content">
                        <div class="ft-bottom-logo">
                            <img src="../assets/img/honeyImg/honeyImg/Footer-png3.png" alt="" srcset="">
                        </div>
                        <div class="ft-bottom-text">© 2020 Qode Interactive All Rights Reserved</div>
                    </div>
                </div>
            </div>
            <div class="ft-logo text-center">
                <img src="../assets/img/honeyImg/honeyImg/Logo-footer-1.png" alt="" srcset="">
            </div>
        </div>
    <div class="backToTop" v-on:click="backToTop()">
        <span >
            <ion-icon class="upIcon" name="chevron-up-outline"></ion-icon>
        </span>
    </div>
  </div>
</template>

<script>
// import App from '../App.vue'

export default {
  name: "Product",
  el :".product-router",
  data : function () {
     return {
    listProducts: [
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img1.jpg"),
        title: "PURE RAW HONEY",
        price: 20,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img15.jpg"),
        title: "WILDFLOWER HONEY",
        price: 15,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img20.jpg"),
        title: "Forest Honey",
        price: 10,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img12.jpg"),
        title: "Honey Bee",
        price: 12,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img5.jpg"),
        title: "Honey Face Cream",
        price: 45,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img17.jpg"),
        title: "Meadow Honey",
        price: 15,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img16.jpg"),
        title: "Organic Honey",
        price: 15,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/Shop-list-img13.jpg"),
        title: "Honey Jam",
        price: 20,
        quantity: 1,
      },
      {
        img:  require("../assets/img/honeyImg/honeyImg/111.jpg"),
        title: "Raw Honeycomb",
        price: 15,
        quantity: 1,
      },
    ],
    min: 10,
    max: 50,
    count: 0,
    cart: [],
    total: 0,
  }
  },
  components:{
    //   App
  },
  methods: {
    sorting() {
      const select_sorting = document.querySelector(".select-sorting");
      select_sorting.classList.toggle("active_sort");
    },
    // scroll() {
    //    const backToTop = document.querySelector('.backToTop');
    //  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    //     backToTop.classList.add('active_back');
    // }
    // else{backToTop.classList.remove('active_back');
    // }
    // },
    //    backToTop(){
    //    document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    // },
    addToCart(item) {
      this.count++;
      let found = this.cart.find((product) => product.title === item.title);
      if (found) {
        found.quantity++;
      } else {
        this.cart.push(item);
      }
      this.total += item.price;
    },
    
    deletecart(item, index) {
      this.cart.splice(index, 1);
      this.count -= item.quantity;
      this.total -= item.price * item.quantity;
    },
    // rangeMin() {
    //   const calcLeftPosition = (value) => (100 / (50 - 10)) * (value - 10);
    //   $("#rangeMin").on("input", function (e) {
    //     const newValue = parseInt(e.target.value);
    //     if (newValue > max) return;
    //     min = newValue;
    //     $("#thumbMin").css("left", calcLeftPosition(newValue) + "%");
    //     $("#min").html(newValue);
    //     $("#line").css({
    //       left: calcLeftPosition(newValue) + "%",
    //       right: 100 - calcLeftPosition(max) + "%",
    //     });
    //   });
    // },
    // rangeMax() {
    //   const calcLeftPosition = (value) => (100 / (50 - 10)) * (value - 10);
    //   $("#rangeMax").on("input", function (e) {
    //     const newValue = parseInt(e.target.value);
    //     if (newValue < min) return;
    //     max = newValue;
    //     $("#thumbMax").css("left", calcLeftPosition(newValue) + "%");
    //     $("#max").html(newValue);
    //     $("#line").css({
    //       left: calcLeftPosition(min) + "%",
    //       right: 100 - calcLeftPosition(newValue) + "%",
    //     });
    //   });
    // },
    filterPrice() {
      this.min = parseInt(document.querySelector("#min").innerHTML);
      this.max = parseInt(document.querySelector("#max").innerHTML);
    },
  },
  computed: {
    filter() {
      return this.listProducts.filter((item) => {
        return this.min <= item.price && item.price <= this.max;
      });
    },
  },
//   created() {
//     window.addEventListener("scroll", this.scroll);
//   },
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
img[src*="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"] {
display: none;}
body{
    font-family: "Open Sans",sans-serif;
    font-size: 18px;
    line-height: 1.667em;
    font-weight: 400;
    color: #383838;
    background-color: #f7f3f0;
    overflow-x: hidden;
}
.grid-system{
    width: 1100px;
    margin: 0 auto;
}
h1,h2,h3,h4,h5{
    font-weight: 700;
    font-family: "Open Sans Condensed",sans-serif;
    text-transform: uppercase;
}
h1{
    color: #fff;
    font-size: 60px;
}
h3,h4,h5{
    color: #131313;
    line-height: 1.25em;
}
h3{
    font-size: 26px;
    margin: 12px 0;
}
h4{
    font-size: 26px;
    margin: auto 0;
}
h5{
    font-size: 18px;
    line-height: 1.25em;
    margin: auto 0;
}
/* menu mobile */
.menu-mobile{
    width: 100%;
    background-color: #fff;
    display: none;
    overflow: hidden;
    transition: all .5s ease;
    border-top: 0.5px solid rgb(192, 192, 192);
}
.menu-mobile a{transition: all .3s ease;}
.menu-mobile a:hover{ color: #c74817;}
.menuActive{font-size: 18px!important;}
.md.hydrated{transition: all .5s ease;cursor: pointer;}
/* .menu-mobile-items .md.hydrated:active{
    transform: rotate(90deg);
} */
.menu-mobile-drop{
    width: 86%;
    margin: 0 auto;
    padding: 34px 0;
}
.l-items-mn,.menu-mb-ch,.menu-mobile-items{margin: 0;padding: 0;}
.menu-mb-item {margin: 0;display: flex;align-items: center;justify-content: space-between;position: relative;}
.active-icon{transform: rotate(90deg);}
.menu-mb > .l-items-mn{margin: 5px 0;}
/* header */
.header-pc{
    height: 115px;
    background-color: #fff;
    width: 100%;
    display: inline-flex;
    position: relative;
}
.header-sticky{
    background-color: #fff;
    width: 100%;
    display: inline-flex;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-50px);
    position: fixed;
    z-index: 100000;
    padding: 10px 0;
    transition: all .5s ease;
    
}
.header-sticky .img{height: unset;}
.header-sticky  .dr-lastChild{
    right: 100%;
    left: unset;
}
.header-sticky .lastChild a span{order: 2;}
.header-sticky .lastChild .md.hydrated{transform: rotate(180deg);}
.active{transform: translateY(0);opacity: 1;pointer-events: all;}
.header-sticky-header .img img{width: 176px;height: 36px;}
.header,.header-sticky-header{
    display: flex;
    align-items: center;
}
a{
    text-decoration: none;
    color: unset;
}
a:hover span , a:hover i {
    color: #c74817;
    transition: all .3s ease;
}
.onPage{ color: #c74817!important;}
.img{ width: 21%;}
.img img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}
.top-menu{
    height: 100%;
    margin-left: auto;
}
li{
    list-style: none;
    margin: 0 28px;
    height: 100%;

}
.menu{
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;

}
.menu-bar {
    font-size: 30px;
    display: flex;
    align-items: center;
    display: none;
}
.menu-bar span.cart-price{font-size: 20px;}
.menu-bar .shop-cart-icon{z-index: 10000000000;}
.collapseMenu{display: flex;align-items: center;}
li:first-child{margin-left: 0;}
li.menu-item a{
    display: flex;
    align-items: center;
    height: 100%;
    font-family: "Open Sans Condensed",sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #3c3c3c;
    font-size: 15px;
    letter-spacing: .15em;
    position: relative;
    justify-content: space-between;
}

/* drop menu */
.drop-menu,.drop-menu-child{
    position: absolute;
    background-color: #fff;
    width: 230px;
    transform: translateY(30px);
    opacity: 0;
    pointer-events: none;
    transition: all .5s ease;
}
li.menu-item:hover .drop-menu{
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
}
ul.sub-menu{ padding: 22px 0;}
.sub-menu li{padding: 0 32px;margin: 0;position: relative;}
.sub-menu li a{display: block;margin: 1px 0;font-size: 14px;transition: all .2s ease;display: flex;justify-content: space-between;align-items: center;}
.sub-menu li:hover > a{color: #c74817;}
.drop-menu-child{
    position: absolute;
    left: 100%;
    top: -30px;
    opacity: 0;
    pointer-events: none;
    transition: all .5s ease;
}
.hasMenuChild:hover .drop-menu-child{
    opacity: 1;
    pointer-events: all;
}
.shopping-cart{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 24px;
}
.bx{
    line-height: unset!important;
    font-size: 23px;
}
.shop-cart-icon{
    margin-right: 24px;
    height: 100%;
}
.icon{ height: 100%;}
.icon-basket{
    display: flex;
    position: relative;
    
}
.shop-cart-icon a{
    
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}
.in-cart ul{margin-bottom: 0;}
.in-cart{top: 100%;right: 0;width: 270px;max-height: 400px;overflow: auto;}
::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
.in-cart p{font-size: 15px;color: unset;margin-bottom: 0;color: #383838;}
.shop-cart-icon:hover .in-cart{opacity: 1;transform: none;pointer-events: all;}
.shop-cart-icon a:hover .basket-count span{color: unset;}
.basket-count{
    height: 14px;
    width: 14px;
    border-radius: 50%;
    font-size: 11px;
    line-height: 14px;
    display: block;
    position: absolute;
    top: 5px;
    right: -5px;
    background: #c74817;
    color: #fff;
    font-family: "Open Sans Condensed",sans-serif;
    font-weight: 700;
    line-height: 14px;
    transition: .25s ease-out;

}
.shop-cart-button a{
    padding: 10px 37px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    background-color: rgb(211, 168, 99);
    font-family: "Open Sans Condensed",sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: auto;
    margin: 0;
    line-height: 28px;
    letter-spacing: .15em;
    outline: 0;
    transition: all .3s ease;
}
.shop-cart-button a:hover{background-color:rgb(197, 151, 77);}
.shop-cart-button a:hover span{ color: unset;}
/* banner */
.banner{
    width: 100%;
    height: 355px;
    background: url(../assets/img/honeyImg/honeyImg/banner.jpg) top center / cover no-repeat;
}
.banner-text{
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
}
/* container */
.container{ padding: 97px 0 152px;}
.margin{margin-bottom: 56px;}
.list-menu{margin-top: 24px;}
.list-menu a{
    display: block;
    color: #5b5858;
    margin-bottom: 18px;
    transition: all .3s ease;
}
.list-menu a:hover { color: #c74817;}
.product-img{display: flex;}
.items{padding: 0 15px;}
/* list item */

.product-img img{
    width: 80px;
    display: block;
    object-fit: cover;
    margin-right: 22px;
}
.product-text{margin: auto 0;}
.price{
    font-weight: 700;
    margin: 4px 0 5px;
    color: #c74817;
    line-height: 30px;
    letter-spacing: 0;
    font-family: "Open Sans Condensed",sans-serif;
}
.product-text a:hover{
    color: #c74817;
    transition: all .3s ease;
}
/* filter */
.range-slide {
    position: relative;
    height: 4px;
    width: 95%;
    margin: 30px 0;
  }
  
  .slide {
    position: absolute;
    top: 0;
    height: 4px;
    background: #d3a863;
    left: 9px;
    right: 9px;
  }
  
  .line {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background-color: #c74817;
  }
  
  .thumb {
    position: absolute;
    z-index: 2;
    text-align: left;
    background-color: #c74817;
    border-radius: 50%;
    outline: none;
    top: -7px;
    height: 18px;
    width: 18px;
    margin-left: -9px;
  }
  
  input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    pointer-events: none;
    z-index: 3;
    height: 3px;
    top: 0;
    width: 100%;
    opacity: 0;
    margin: 0;
  }
  
  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: all;
    border-radius: 50%;
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
.filter-price{
    margin: 15px 0;
    font-size: 15px;
    color: #5b5858;
}
.price-select{
    width: 95%;
    display: flex;
    justify-content: space-between;}
.button{
    float: right;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    background: #c74817;
    letter-spacing: .15em;
    border: 0;
    font-weight: 700;
    font-family: "Open Sans Condensed",sans-serif;
    padding: 1px 19px;
    transition: all .25s ease;
}
.button:hover{background-color: #b73604;}

/* item */
.items:last-child{ position: relative;}
.items:last-child::before{
    display: block;
    content: "";
    position: absolute;
    top: 18px;
    left: -2px;
    width: 2px;
    height: 100%;
    background-image: linear-gradient(
0deg,transparent,transparent 50%,#cecbc8 50%,#cecbc8 100%),linear-gradient(
0deg,rgba(255,255,255,0),rgba(255,255,255,0));
    background-size: 12px 12px,100% 3px;
}
.showing-result{
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
    align-items: center;
    margin-bottom: 12px;
}
.showing-result::after{
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(100% + 43px);
    height: 2px;
    background-image: linear-gradient(
    90deg,#cecbc8,#cecbc8 75%,transparent 75%,transparent 100%);
    background-size: 10px 10px,100% 3px;
}
.showing-result p{
    margin: 10px 0;
    padding-left: 9px;
}
.sorting{
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}
.select-sorting{
    position: absolute;
    padding: 7px 25px 7px 15px;
    background-color: #fff;
    top:100%;
    right: 0;
    z-index: 100;
    transition: all .3s ease;
    opacity: 0;
    pointer-events: none;
}
.select-srt,.list-sorting{padding: 0;margin: 0;font-size: 15px; }
.sorting .bx{
    height: 100%;
    font-size: 26px;
    margin-left: 9px;
}
.product-items img{
    width: 100%;
    display: block;
    object-fit: cover;
}
.product-result-price{font-size: 22px;}
.product-result-name,.product-result-img img{
    transition: all .5s ease;
    text-transform: uppercase;
}
.add-to-cart .bx{
    font-size: 14px;
    font-weight: 700;
    margin-right: 7px;
    line-height: unset!important;
    transition: all .5s ease;
}
.add-to-cart a{
    color: #131313;
    font-size: 13px;
    padding: 0;
    margin-left: 7px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed",sans-serif;
    line-height: 28px;
    letter-spacing: .15em;
    font-weight: 700;
}
.add-to-cart a:hover .bx{color: unset;}
.product-items:hover .product-result-img img{transform: translateY(-10px);}
.product-items:hover .product-result-name{color: #c74817;}
.product-items:hover .add-to-cart .bx{ margin-right: 3px;}
.next-page{margin-top: 50px;}
.page,.nextPage,.icon-social span{
    position: relative;
    margin: 0 3px;
    color: #c74817;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    line-height: 35px;
    display: inline-block;
    vertical-align: middle;
    transition: .35s ease-out;
    cursor: pointer;
}
.aP-icon{transition: all .3s ease;}
.page .bx{
    display: block;
    line-height: unset!important;
}
.atPage , .page:hover{
    color: #fff;
    background: #c74817;
}
.nextPage:hover{transform: translateX(5px);}
/* cart item */
.in-cart .drop-menu-item{
    width: 100%;
    padding: 14px 22px!important;
}
.cart-item{flex-wrap: nowrap;}
.cart-item img{width: 100%;}
.cart-item .col-3{padding-right: 0;}
.cart-item .col-8{padding-right: 0;width: 63%;}
.cart-item .col-1{padding-left: 0;color: #000;flex: 1;}
.cart-item a{display: inline-block;}
.cart-item .cart-name{
    font-size: 15px;
    font-family: "Open Sans Condensed",sans-serif;
    font-weight: 700;
    letter-spacing: .050em;
    color: #131313;
    text-transform: uppercase;
    line-height: normal;
}
.cart-item .cart-price{
    font-family: "Open Sans Condensed",sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0;
    color: #c74817;
    text-transform: uppercase;
    line-height: normal;
}
.noEmp .drop-menu-item::after{
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        right: 22px;
        left: 22px;
        width: 85%;
        height: 2px;
        background-image: linear-gradient( 
    90deg
    ,#cecbc8,#cecbc8 75%,transparent 75%,transparent 100%);
        background-size: 10px 10px,100% 3px;
}
.total-cart{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 22px 0 22px!important;
}
/* footer */
.footer{
    width: 100%;
    background-color: #d3a863;
    position: relative;
    background-image: url(../assets/img/honeyImg/honeyImg/Footer-default-png5.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 100% 100%!important;
}
.inFooter{
    padding: 155px 0 46px;
    width: 100%;
    margin: 0 auto;
}
.footer-text{padding: 0 15px;}
.ft-detail{
    margin-top: 25px;
}
.ft-content{margin: 30px 0;}
.ft-text a i{
    font-size: 18px;
    margin-right: 10px;
    cursor: pointer;
    transform: rotate(-90deg);
}
.ft-text a:last-child i{transform: rotate(0);}
.ft-text a{transition: all .5s ease;}
.ft-text a:hover{color: unset;}
.ft-detail:hover a{color: #720202;}
.ft-products{ margin-top: 10px;}
.ft-news > .ft-detail > h5{font-size: 22px;}
.span-news{
    color: #c74817!important;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: .1em;
    line-height: 25px;
    font-family: "Open Sans Condensed",sans-serif;
    font-weight: 700;
}
.ft-logo{
    width: 170px;
    height: 170px;
    display: block;
    position: absolute;
    border-radius: 50%;
    background-color: inherit;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 163px;
}
.ft-logo img{
    width: auto;
    height: 116px;
    object-fit: cover;
    vertical-align: middle;
}
.icon-social span{
        background-color: #c74817;
        color: #fff;
}
.icon-social span a:hover i{color: #fff!important;}
.icon-social span:hover{background-color: #b73604;}
.menu-bar .md.hydrated {transition: all .3s ease;cursor: pointer;}
.menu-bar:hover .md.hydrated{ color: #c74817!important;}
.ft-bottom-content{font-size: 12px;padding: 20px 0;}
/* back to top */
.backToTop{
    position: fixed;
    width: 40px;
    height: 40px;
    right: 2%;
    bottom: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    opacity: 0;
    justify-content: center;
    color: #fff;
    background-color: #c74817;
    transition: all .3s ease;
}
.upIcon{transition: all .5s ease;}
.active_sort,.active_back{opacity: 1;pointer-events: all;}
.active_back:hover .upIcon{transform: translateY(-2px);}
.active_back:hover{background-color:  #720202;}
@media(max-width:1367px){
    .dr-lastChild{
        right: 100%;
        left: unset;
    }
    
    .lastChild a span{order: 2;}
    .lastChild .md.hydrated{transform: rotate(180deg);}
}
@media(max-width:1230px){
    .inFooter{text-align: center;}
}
@media(max-width:1100px){
    .grid-system{width: auto;}
    .container{padding-bottom: 90px;}
}
@media(max-width:1024px){
    .items:last-child{
        order:1;
        width: 100%;
    }
    .items:first-child{
        order:2;
        width: 100%;
        margin: 40px auto;
    }
    .img{width: 21%;}
    .price-select{width: 100%;}
    .range-slide{width: 100%;}
}
@media(max-width:1023px){
    .menu-mobile{display: block;}
    .banner{height: 200px;}
    .menu-bar{display: flex;align-items: center;}
    .header-pc{height: 70px;}
    .header-sticky{display: none;}
    .header{width: 90%!important;margin:0 auto;justify-content: space-between;}
    .top-menu{display: none;}
    .shopping-cart{display: none;}
    .inFooter {
        width: 86%;
        padding: 155px 0 46px;
        margin: 0 auto!important;
        text-align: center;
    }
}
@media(max-width:768px){
    .img{width: 25%;}
    .img img{display: unset;object-fit: unset;height: auto;}
}
@media(max-width:576px){
    .row{margin: 0;}
    .items{width: 90%!important;margin: auto;}
    .showing-result{display: block;}
    .select-sorting{left: 0;}
    .sorting{padding: 10px 0;margin-left: 9px;}
}
@media(max-width:350px){
    .price-select{flex-direction: column;}
    .price-select > .button{order:1;margin-top: 20px;margin-bottom: 0;}
    .price-select > span{order:2}
    .ft-bottom-text{width: 50%;;margin: 0 auto;line-height: 24px;}
}
</style>
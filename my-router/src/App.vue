
<template>
<div class="d-100">
    <div class="nav-router">
     <header class="header-pc">
        <div class="header container">
            <a href="#" class="img">
                <img src="./assets/img/honeyImg/honeyImg/New-logo-png1.png" alt="">
            </a>
            <nav class="top-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <router-link to="/">
                            <span class="menu-text  onPage">Home</span>
                        </router-link>
                        <div class="drop-menu">
                            <ul class="sub-menu">
                                <li class="drop-menu-item">
                                    <a href="" class=" onPage">Main home</a>

                                </li>
                                <li class="drop-menu-item">
                                    <a href="">Bekeeping home</a>

                                </li>
                                <li class="drop-menu-item">
                                    <a href="">Honey shop</a>
                                </li>
                                <li class="drop-menu-item">
                                    <a href="">Landing</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="#">
                            <span class="menu-text">Pages</span>
                        </a>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item">
                                        <a href="">About us</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">Our services</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                    </li>
                    <li class="menu-item">
                        <a href="#">
                            <span class="menu-text">Products</span>
                        </a>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item ">
                                        <router-link to="/Product">Shop list </router-link>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">Shop single </a>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild">
                                        <a href="#">
                                            <span>Layouts</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Four columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Full width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild">
                                        <a href="">
                                            <span>Shop pages</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">My account</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Cart</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Checkout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </li>
                    <li class="menu-item">
                        <router-link to="/Blog">
                            <span class="menu-text">Blog</span>
                        </router-link>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item ">
                                        <a href="">Masonry</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">Right sidebar</a>
                                    </li>
                                    <li class="drop-menu-item ">
                                        <a href="">Left sidebar</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">No sidebar </a>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild ">
                                        <a href="">
                                            <span>Post types</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child dr-lastChild">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">Standard</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Gallery</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Quote</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Link</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Audio</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Video</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">No sidebar</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                    </li>
                    <li class="menu-item">
                        <a href="#">
                            <span class="menu-text">Portfolio</span>
                        </a>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item hasMenuChild lastChild">
                                        <a href="">
                                            <span>List types</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                            <div class="drop-menu-child dr-lastChild">
                                                <ul class="sub-menu">
                                                    <li class="drop-menu-item ">
                                                        <a href="">Standard</a>
                                                    </li>
                                                    <li class="drop-menu-item ">
                                                        <a href="">Gallery</a>
                                                    </li>
                                                    <li class="drop-menu-item ">
                                                        <a href="">Gallery joined</a>
                                                    </li>
                                                    <li class="drop-menu-item ">
                                                        <a href="">Masonry</a>
                                                    </li>
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild lastChild">
                                        <a href="">
                                            <span>Layouts</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child dr-lastChild">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">Two columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Four columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Four columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Five columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Five columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Six columns wide</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild lastChild">
                                        <a href="#">
                                            <span>Single types</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child dr-lastChild">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="#">Small images</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Big images</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Small gallery</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Big gallery</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Small masonry</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Big masonry</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Slider</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </li>
                </ul>
            </nav>
            <div class="shopping-cart">
                <div class="shop-cart-icon">
                    <a href="#">
                        <span class="icon-basket">
                            <i class='bx bx-basket'></i>
                            <div class="basket-count"><span>0</span></div>
                        </span>
                        <div class="drop-menu in-cart">
                            <ul class="sub-menu">
                                <li class="drop-menu-item">
                                    <p>No products in the cart.</p>

                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
                <div class="shop-cart-button">
                    <a href="#"><span>Contact</span></a>
                </div>
            </div>
            <div v-on:click="toggleIcon()" class="menu-bar" data-toggle="collapse" href="#collapseMenu" aria-expanded="true"
                aria-controls="collapseMenu">
                 <div class="shop-cart-icon">
                    <a href="#">
                        <span class="icon-basket">
                            <i class='bx bx-basket'></i>
                            <div class="basket-count"><span>0</span></div>
                        </span>
                        <div class="drop-menu in-cart">
                            <ul class="sub-menu">
                                    <div v-if="count === 0" class="empty">
                                        <li class="drop-menu-item">
                                            <p>No products in the cart.</p>

                                        </li>
                                    </div>
                                    <div v-if="listdata" class="noEmp">
                                        <li v-for="(it,index) in listdata" :key="index" class="drop-menu-item cart-its">
                                            <div class="row cart-item">
                                                <div class="col-3">
                                                    <img v-bind:src="it.img" alt="" srcset="">
                                                </div>
                                                <div class="col-8">
                                                    <p class="cart-name">{{it.title}}</p>
                                                    <p class="cart-price">{{it.quantity}} X ${{it.price.toFixed(2)}}</p>
                                                </div>
                                                <div v-on:click="deletecart(it,index)" class="col-1">
                                                    <ion-icon name="close-outline"></ion-icon>
                                                </div>
                                            </div>

                                        </li>
                                        <li class="total-cart">
                                            <h5 class="cart-name">Total :</h5>
                                            <span class="cart-price">${{total.toFixed(2)}}</span>
                                        </li>
                                    </div>
                                </ul>
                        </div>
                    </a>
                </div>
                <span class="bar-icon">
                    <ion-icon name="menu-outline"></ion-icon>
                </span>
            </div>
        </div>
    </header>
    <header class="header-sticky">
        <div class="header-sticky-header container">
            <a href="#" class="img">
                <img src="./assets/img/honeyImg/honeyImg/New-logo-png1.png" alt="">
            </a>
            <nav class="top-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <router-link to="/">
                            <span class="menu-text onPage">Home</span>
                        </router-link>
                        <div class="drop-menu">
                            <ul class="sub-menu">
                                <li class="drop-menu-item">
                                    <a href="#" class="onPage">Main home</a>

                                </li>
                                <li class="drop-menu-item">
                                    <a href="#">Bekeeping home</a>

                                </li>
                                <li class="drop-menu-item">
                                    <a href="#">Honey shop</a>
                                </li>
                                <li class="drop-menu-item">
                                    <a href="#">Landing</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="#">
                            <span class="menu-text">Pages</span>
                        </a>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item">
                                        <a href="">About us</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">Our services</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                    </li>
                    <li class="menu-item">
                        <a href="#">
                            <span class="menu-text">Products</span>
                        </a>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item ">
                                        <router-link to="/Product">Shop list </router-link>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="">Shop single </a>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild">
                                        <a href="#">
                                            <span>Layouts</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Four columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Full width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild">
                                        <a href="">
                                            <span>Shop pages</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">My account</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Cart</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Checkout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </li>
                    <li class="menu-item">
                        <router-link to="/Blog">
                            <span class="menu-text">Blog</span>
                        </router-link>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item ">
                                        <a href="#">Masonry</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="#">Right sidebar</a>
                                    </li>
                                    <li class="drop-menu-item ">
                                        <a href="#">Left sidebar</a>

                                    </li>
                                    <li class="drop-menu-item">
                                        <a href="#">No sidebar </a>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild">
                                        <a href="#">
                                            <span>Post types</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">Standard</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Gallery</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Quote</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Link</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Audio</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Video</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">No sidebar</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                    </li>
                    <li class="menu-item">
                        <a href="#">
                            <span class="menu-text">Portfolio</span>
                        </a>
                            <div class="drop-menu">
                                <ul class="sub-menu">
                                    <li class="drop-menu-item hasMenuChild lastChild">
                                        <a href="">
                                            <span>List types</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                            <div class="drop-menu-child dr-lastChild">
                                                <ul class="sub-menu">
                                                    <li class="drop-menu-item ">
                                                        <a href="">Standard</a>
                                                    </li>
                                                    <li class="drop-menu-item ">
                                                        <a href="">Gallery</a>
                                                    </li>
                                                    <li class="drop-menu-item ">
                                                        <a href="">Gallery joined</a>
                                                    </li>
                                                    <li class="drop-menu-item ">
                                                        <a href="">Masonry</a>
                                                    </li>
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild lastChild">
                                        <a href="">
                                            <span>Layouts</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child dr-lastChild">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="">Two columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Four columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Four columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Five columns</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Five columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Six columns wide</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="drop-menu-item hasMenuChild lastChild">
                                        <a href="#">
                                            <span>Single types</span>
                                            <ion-icon name="caret-forward-outline"></ion-icon>
                                        </a>
                                        <div class="drop-menu-child dr-lastChild">
                                            <ul class="sub-menu">
                                                <li class="drop-menu-item ">
                                                    <a href="#">Small images</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Big images</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Three columns wide</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Small gallery</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Big gallery</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Small masonry</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Big masonry</a>
                                                </li>
                                                <li class="drop-menu-item ">
                                                    <a href="">Slider</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </li>
                </ul>
            </nav>
            <div class="shopping-cart">
                 <div class="shop-cart-icon">
                    <a href="#">
                        <span class="icon-basket">
                            <i class='bx bx-basket'></i>
                            <div class="basket-count"><span>0</span></div>
                        </span>
                        <div class="drop-menu in-cart">
                            <ul class="sub-menu">
                                <li class="drop-menu-item">
                                    <p>No products in the cart.</p>

                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
                <div class="shop-cart-button">
                    <a href="#"><span>Contact</span></a>
                </div>
            </div>
        </div>
    </header>
    <div class="menu-mobile collapse" id="collapseMenu" role="tabpanel">
        <div class="menu-mobile-drop">
            <ul class="menu-mobile-items">
                <li class="menu-mb-item menu-item onPage">
                    <router-link to="/" class="onPage">Home</router-link>
                    <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse" href="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne"></ion-icon>
                </li>
                <div class="menu-child-mb collapse" id="collapseOne" role="tabpanel">
                    <ul class="menu-mb-ch">
                        <li class="l-items-mn menu-item">
                            <a href="#" class="onPage">Main home</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Bekeeping home</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Honey shop</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Landing</a>
                        </li>
                    </ul>
                </div>
                <li class="menu-mb-item menu-item">
                    <a href="#">Pages</a>
                    <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse" href="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo"></ion-icon>

                </li>
                <div class="menu-child-mb collapse" id="collapseTwo" role="tabpanel">
                    <ul class="menu-mb-ch">
                        <li class="l-items-mn menu-item">
                            <a href="#">About us</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Our services</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <li class="menu-mb-item menu-item">
                    <a href="#">Products</a>
                    <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                        href="#collapseThree" aria-expanded="true" aria-controls="collapseThree"></ion-icon>
                </li>
                <div class="menu-child-mb collapse" id="collapseThree" role="tabpanel">
                    <ul class="menu-mb-ch">
                        <li class="l-items-mn menu-item">
                            <router-link to="/Product">Shop list</router-link>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Shop single</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">
                                <span>Layouts</span>
                                <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                                    href="#collapseLayout" aria-expanded="true" aria-controls="collapseLayout">
                                </ion-icon>
                            </a>
                            <div class="menu-child-mb collapse" id="collapseLayout" role="tabpanel">
                                <ul class="menu-mb">
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Three columns</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Four columns</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Full width</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">
                                <span>Shop pages</span>
                                <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                                    href="#collapseSP" aria-expanded="true" aria-controls="collapseSP"></ion-icon>
                            </a>
                            <div class="menu-child-mb collapse" id="collapseSP" role="tabpanel">
                                <ul class="menu-mb">
                                    <li class="l-items-mn menu-item">
                                        <a href="#">My account</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Cart</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Checkout</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <li class="menu-mb-item menu-item">
                    <router-link to="/Blog">Blog</router-link>
                    <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                        href="#collapseBlog" aria-expanded="true" aria-controls="collapseBlog"></ion-icon>
                </li>
                <div class="menu-child-mb collapse" id="collapseBlog" role="tabpanel">
                    <ul class="menu-mb-ch">
                        <li class="l-items-mn menu-item">
                            <a href="#">Mansonry</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Right sidebar</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">Left sidebar</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">No sidebar</a>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">
                                <span>Post types</span>
                                <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                                    href="#collapsePT" aria-expanded="true" aria-controls="collapsePT"></ion-icon>
                            </a>
                            <div class="menu-child-mb collapse" id="collapsePT" role="tabpanel">
                                <ul class="menu-mb">
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Standard</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Gallery</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Quote</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Link</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Audio</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Video</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">No sidebar</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <li class="menu-mb-item menu-item">
                    <a href="#">Portfolio</a>
                    <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                        href="#collapsePortfolio" aria-expanded="true" aria-controls="collapsePortfolio"></ion-icon>
                </li>
                <div class="menu-child-mb collapse" id="collapsePortfolio" role="tabpanel">
                    <ul class="menu-mb-ch">
                        <li class="l-items-mn menu-item">
                            <a href="#">
                                <span>List types</span>
                                <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                                    href="#collapseLT" aria-expanded="true" aria-controls="collapseLT"></ion-icon>
                            </a>
                            <div class="menu-child-mb collapse" id="collapseLT" role="tabpanel">
                                <ul class="menu-mb">
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Standard</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Gallery</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Gallery joined</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Mansory</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">
                                <span>Layouts</span>
                                <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                                    href="#collapseLO" aria-expanded="true" aria-controls="collapseLO"></ion-icon>
                            </a>
                            <div class="menu-child-mb collapse" id="collapseLO" role="tabpanel">
                                <ul class="menu-mb">
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Two columns</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Three columns</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Three columns wide</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Four columns</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Four columns wide</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Five columns</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Five columns wide</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Six columns</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="l-items-mn menu-item">
                            <a href="#">
                                <span>Single types</span>
                                <ion-icon class="menuActive" name="caret-forward-outline" data-toggle="collapse"
                                    href="#collapseST" aria-expanded="true" aria-controls="collapseST"></ion-icon>
                            </a>
                            <div class="menu-child-mb collapse" id="collapseST" role="tabpanel">
                                <ul class="menu-mb">
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Small images</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Big images</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Small gallery</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Big gallery</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Small mansory</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Big mansory</a>
                                    </li>
                                    <li class="l-items-mn menu-item">
                                        <a href="#">Slider</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default{
            el: '.nav-router',
            props: [
                // 'listdata'
            ],
            
            data : ()=>{
                return{
                    
                }
            }, 
            // methods: {
            //     scroll() {
            //         const header_sticky = document.querySelector('.header-sticky');
            //         if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            //             header_sticky.classList.add("active")
            //         } else {
            //             header_sticky.classList.remove("active")
            //         }
            //     },
            //     toggleIcon() {
            //         const icon = document.querySelectorAll('.menuActive');
            //         icon.forEach((item) => {
            //             item.addEventListener('click', () => {
            //                 item.classList.toggle('active-icon')
            //             })
            //         })
            //     },
            // },
            // computed: {
            // },
            // created() {
            //     window.addEventListener('scroll', this.scroll);
            // },

        };
</script>

<style scoped>
.container{
    width: 1100px;
    margin: 0 auto;
}
img{width: 100%;transition: all .5s ease;cursor: pointer;}
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
    transition: all .3s ease;
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
.bar-icon{
    display: flex;
    align-items: center;
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
.menuActive{font-size: 18px!important;}
.md.hydrated{transition: all .5s ease;cursor: pointer;}
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
    width: 100%;
    display: inline-flex;
    position: relative;
    z-index: 1;
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
.header{padding: 0;}
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
    transition: all .3s ease;
}
a:hover span , .menu-mobile a:hover ,.onPage ,.sub-menu li:hover > a ,.menu-bar:hover .md.hydrated {
    color: #c74817!important;
    transition: all .3s ease;
}
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
.drop-menu-child{
    position: absolute;
    left: 100%;
    top: -35px;
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
.in-cart{top: 100%;right: 0;}
.in-cart p{font-size: 15px;color: unset;margin-bottom: 0;color: #383838;}
.shop-cart-icon:hover .in-cart{opacity: 1;transform: none;pointer-events: all;}
.shop-cart-icon a:hover .basket-count span{color: unset!important;}
.basket-count{
    height: 14px;
    width: 14px;
    border-radius: 50%;
    font-size: 11px;
    line-height: 14px;
    display: block;
    text-align: center;
    position: absolute;
    top: 5px;
    right: -5px;
    background: #c74817;
    color: #fff;
    font-family: "Open Sans Condensed",sans-serif;
    text-align: center;
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
.shop-cart-button a:hover span{ color: unset!important;}
.menu-bar .md.hydrated {transition: all .3s ease;cursor: pointer;}
.collapse:not(.show) {
    display: none!important;
}
@media(max-width:1367px){
    .dr-lastChild{
        right: 100%;
        left: unset;
    }
    
    .lastChild a span{order: 2;}
    .lastChild .md.hydrated{transform: rotate(180deg);}
}
@media(max-width:1100px){
    .container{width: auto;}
}
@media(max-width:1025px){
    .row{margin: 0;}
    .container{max-width: 90%;margin: 0 auto;}
}
@media(max-width:1023px){
    .menu-mobile{display: block;}
    .menu-bar{display: flex;align-items: center;}
    .header-pc{height: 70px;background-color: #fff;}
    .header-sticky{display: none;}
    .header{width: 90%!important;margin:0 auto;justify-content: space-between;}
    .top-menu{display: none;}
    .shopping-cart{display: none;}
  
}
@media(max-width:576px){
    .row{margin: 0;}
}
</style>

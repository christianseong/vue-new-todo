<template>
  <nav class="navbar-nav">
      <div class = "navbar-width-box">
        <div class= "navbar-flex-wrapper">
            <section class="navbar-routes">
                <a class="NavbarDesktop_route__1-3QK" href="/search/ranking">상품랭킹</a>
                <a class="NavbarDesktop_route__1-3QK" href="/search/newest">신상품</a>
                <a class="NavbarDesktop_route__1-3QK" href="/coordi">코디</a>
                <a class="NavbarDesktop_route__1-3QK" href="/stores">스토어</a>
                <a class="NavbarDesktop_route__1-3QK" href="/banners">이벤트</a>
            </section>


            <div class = "navbar-space-between">
                <section class="NavbarDesktop_search__W1pwx">
                    <div class="NavbarDesktop_condition-wrapper__2RaW9">
                        <button class="NavbarDesktop_product__33K4P NavbarDesktop_active__1ypDN" type="button">상품</button>
                        <button class="NavbarDesktop_store__1Ooqx" type="button">스토어</button>
                    </div>
                        
                    <div class="NavbarDesktop_keyword-wrapper__2FTWK">
                            <input class="NavbarDesktop_keyword__13zdd" placeholder="어떤 상품을 찾으시나요?" type="search" value="">
                    </div>
                    <div class="NavbarDesktop_find-wrapper__KsTun">
                        <button class="NavbarDesktop_find__2trtF" type="button">검색</button>
                    </div>
                    </section>
            </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

input{
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}

.navbar-nav{
    position : fixed;
    top : 52px;
    min-width: 783px;
    left : 0;
    width : 100%;
    z-index: 99;
    background: #f1f3f6;
}

nav{
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

.navbar-width-box{
    display: block;
    margin : 0 auto;
    max-width: 1100px;
}

.navbar-flex-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    margin-left: 12px;
}

.navbar-routes{

}

.NavbarDesktop_route__1-3QK{
    font-size: 14px;
    color : #343a40;
    margin : 16px 36px 16px 0px
}

a{
    text-decoration: none;
}

.navbar-space-between{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.NavbarDesktop_search__W1pwx{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: #fff;
    width : 400px;
    border : 1px solid #dee2e6;
    height: 40px;

}

.NavbarDesktop_condition-wrapper__2RaW9{
    background-color: #f1f3f6;
    box-sizing: border-box;
    color : #868e96;
    font-size: 12px;
    border-radius: 2px;
    margin: 5px;
}

.NavbarDesktop_product__33K4P{
    padding : 0 ;
    height: 30px;
    width: 43px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}

.NavbarDesktop_active__1ypDN{
    background-color: #fff;
    color : #4285f4;
    border : 1px solid #4285f4;
}

.NavbarDesktop_store__1Ooqx{
    padding: 0;
    height: 30px;
    width: 54px;
    -webkit-border-top-right-radius: 2px;
    -moz-border-radius-topright: 2px;
    border-top-right-radius: 2px;
    -webkit-border-bottom-right-radius: 2px;
    -moz-border-radius-bottomright: 2px;
    border-bottom-right-radius: 2px;
}

button{
    outline: 0;
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    -webkit-user-select: none
}

.NavbarDesktop_keyword-wrapper__2FTWK{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
    margin-left: 3px;
    margin-right: 12px;
    -webkit-flex: 1 1;
    -moz-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    height: 30px;
}

.NavbarDesktop_keyword__13zdd{
    width: 100%;
    height: 30px;
    font-size: 14px;
    border: 0;
    padding: 0;
    margin-right: 12px;
}

input:not(input[type=checkbox]), textarea {
    -webkit-appearance: none;
}

button, input:focus, input[type=search] {
    outline: 0;
}

input[type="search" i] {
    appearance: auto;
    box-sizing: border-box;
    padding: 1px 2px;
}
.NavbarDesktop_find-wrapper__KsTun{
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 50px;
    height: 32px;
    margin: 4px;
}

.NavbarDesktop_find__2trtF{
    cursor: pointer;
    width: 100%;
    height: 30px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background-color: #4285f4;
    font-size: 12px;
    color: #fff;
    padding: 0;
}
</style>
<template>
    <div>
    
    <header class = "navbar-header">

        <div class= "navbar-width-box">
            <div class = "navbar-flex-wrapper">
                <a class = "logo-wrapper" href="/">  
                    <img src = "https://www.lookpin.co.kr/static/media/logo-90-w.4d6f88eb.svg" alt = "LookPin"/>
                </a> 

                <div class = "navbar-gender-wrapper">
                    <button type="button" class = "navbar-button navbar-highlight"> <!--navbar highlight 기능은 눌렸을 때 안눌렸을 때 켜지는 걸 다르게 해야한다-->
                        <img src = "https://www.lookpin.co.kr/static/media/img-gnb-men-on.89a3900e.svg" alt = "Men"/>
                    </button>

                    <button type="button" class = "navbar-button">
                        <img src = "https://www.lookpin.co.kr/static/media/img-gnb-women-off.49fd73b7.svg" alt = "Women"/>
                    </button>
                </div>


                <button type ="button" class = "navbar-recents-wrapper">
                    <div class = "navbar-thumnail-wrapper">
                        <img class= "navbar-thumnail" src="https://static.lookpin.co.kr/20200908120619-ed31/b14b8f167db2d9b9fd94690540c4898b.jpg" alt="최근 본 상품">
                    </div>
                    최근 본 상품    

                </button>


                <button type ="button" class = "navbar-cart-wrapper">장바구니</button>
                <div class = "navbar-division"></div>
                <button type ="button" class = "navbar-member-wrapper">마이룩핀</button>
                <div class = "navbar-division"></div>
                <button type ="button" class = "navbar-signin-wrapper">로그인</button>

           
            
    
            </div>
        </div>
       

   


         
    </header>


  </div>
</template>

<script>

export default {
  components: {  },
    data(){
        return {
           imageURL : []
        }
    }
}
</script>

<style scoped>
.back{
    background-color: black;
}

.navbar-header{
    position : fixed;
    background: #121517;
    top : 0;
    left : 0;
    min-width: 783px;
    width : 100%;
    z-index : 100;

}

.navbar-width-box{
    display : block;
    margin : 0 auto;
    max-width: 1100px;
}


.navbar-flex-wrapper{
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin : 0 12px;
    height: 52px;
}

.navbar-gender-wrapper{
    margin-left : 24px;
}

.navbar-button{
    cursor : pointer;
    padding :0;
    height: 50px;
}

button{
    outline: 0;
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    -webkit-user-select: none;
}

.navbar-highlight{
    border-bottom: 4px solid #f23538;   
}

.navbar-recents-wrapper{
    position : relative;
    display: flex;
    align-items: center;
    color : #fff;
    cursor: pointer;
    outline: 0;
    user-select: none;
    font-size: 14px;
    flex :1 1;
    height: 100%;
    margin-left: 16px;
}

.navbar-thumnail-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #b0b8bf;
    margin-right: 8px;
    height : 20px;
    width : 20px;
    border-radius :100%;
}

.navbar-thumnail{
    user-select: none;
    height : 20px;
    width : 20px;
    border-radius :100%;
}


.navbar-cart-wrapper{
    color : #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0;
    height: 20px;
    font-size: 12px;
}

.navbar-division{
    background-color: #c7cdd4;
    box-sizing: border-box;
    opacity: .5;
    width : 1px;
    height: 18px;
    margin : 0 7px;
}

.navbar-member-wrapper{
    color: #fff;
    cursor: pointer;
    padding: 0;
    font-size: 12px;
}

.navbar-signin-wrapper{
    color: #fff;
    cursor: pointer;
    padding: 0;
    font-size: 12px;
}

</style>
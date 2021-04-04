<template>
<header>
    <div class="Background">
        <img src="@/assets/title.jpg" ondragstart="return false">
    </div>
    <div class="Nbar">
        <div class="NbarContain">
            <a class="logoholder"><router-link to="/"><img class="logo" src="@/assets/logo_white.png" alt="" ondragstart="return false"><img class="logored" src="@/assets/logo_red.png" ondragstart="return false" alt=""></router-link></a>
        </div>
        <div class="NbarContain">
        <router-link to="/serarch"><span>전적검색</span></router-link>
        </div>
        <div class="EmptyDiv"></div>
        <div class="NbarContaincat">
            <a class="NbarCat" @click="clicked" href=""><span>고양이</span></a>
            <div class="cat">
                <img ondragstart="return false" src="@/assets/cat.jpg" alt="">
            </div>
        </div>
        <div class="NbarContaincat">
            <a @click="clicked" href=""><span>노르웨이숲고양이</span></a>
            <div class="cat">
                <img ondragstart="return false" src="@/assets/nolcat.gif" alt="">
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        clicked(){
            this.$router.push('/');
            alert("미구현");
        }
    }
}
</script>

<style scoped>
a{
    display:block;
    color: white;
    cursor: pointer;
    text-decoration: none;
    text-align:center;
    min-width:80px;
    font-weight:900;
}
span{
    white-space:nowrap;
}
header{
    min-width:1100px;
    background-color: black;
    position: fixed;
    align-content:center;
    top:0;
    left:0;
    width:100%;
    z-index:100;
}
.Nbar{
    background-color: black;
    min-width:1100px;
    display:flex;
    height:70px;
    max-width: fit-content;
    margin: 0 auto;
}
.Background{
    position:absolute;
    width: 100%;
    height: 70px;
    opacity:0.19;
    overflow: hidden;
}
.Background>img{
    position: relative;
    top:-165px;
    width: 100%;
    overflow: hidden;
}
header:hover .Background{
    transition-duration: 0.5s;
    opacity:0.25;
}

.NbarContain{
    height: 100%;
    width:fit-content;
}
.NbarContaincat{
    height: 100%;
    width:fit-content;
}
.EmptyDiv{
    height: 100%;
    min-width: 800px;
}
.EmptyDiv:hover {
    transition-duration: 0.6s;
    opacity: 0.6;
    border-radius: 50px 50px 50px 50px;
    background-color: #FF4655;
}
.logo{
    position: relative;
    top:20px;
    height:27px;
}
.logored{
    position: absolute;
    left:24px;
    top:23px;
    height:27px;
}
.logoholder:hover .logored{
    transition-duration: 2s;
    transform:translateY(-3px);
    opacity: 1;
}
.NbarContain span{
    position: relative;
    top:20px;
    height:27px;
    font-size:1rem;
}
.NbarContaincat span{
    position: relative;
    top:20px;
    height:27px;
    font-size:1rem;
}
.NbarContain a{
    position: relative;
    height: 100%;
}
.NbarContaincat a{
   position: relative;
    height: 100%;
}
.logored{
    position:absolute;
    opacity: 0;
}
.NbarContain>a:hover{
    transition-duration: 0.2s;
    margin: -3px 3px 0 0 ;
    border-bottom: 2px solid #FF4655;
    color: #FF4655;
}
.NbarContaincat>a:hover{
    transition-duration: 0.2s;
    margin: -3px 3px 0 0 ;
    border-bottom: 2px solid #FF4655;
    color: #FF4655;
}
.cat{
    position: relative;
    width:0px;
    height:0px;
    opacity: 0;
}
.cat>img{
    position: relative;
    width:0px;
    height:0px;
}
.cat>img:hover{
    transition-duration:0.1s;
    border-top: 2px solid #45FF71;
}
.NbarContaincat:hover .cat>img{
    width:fit-content;
    height:fit-content;
    
}
.NbarContaincat:hover .cat{
    transition-duration:2s;
    opacity:1;
}
@media (max-width: 700px) {
    .EmptyDiv {
    max-width:100px;
    min-width:100px;
    }
    header{
    min-width:10px;
    width:1000px;
    }
    
}
</style>
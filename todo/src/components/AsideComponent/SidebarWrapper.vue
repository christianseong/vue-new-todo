<template>
<div class="categoryWrapper">
  <SideMain/>
  <SidebarSub v-for ="i in 10" :key={i}></SidebarSub>
</div>
</template>

<script>
import SidebarSub from '../AsideComponent/SidebarSub'
import SideMain from '../AsideComponent/SideMain'




export default {

    
    data(){
        return {

        }
    },

    components :{
        SidebarSub,
        SideMain
    }
}
</script>

<style>
div{
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

.sidebar_side{
    float: left;
    width: 82px;
    margin-top: 148px;
    margin-bottom: 20px;
    padding-left: 12px;
    text-align: left;
}

aside {
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    display: block;
}

.side_main{
    font-size: 20px;
    font-weight: 700;
    height: 20px;
    margin-bottom: 16px;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
     
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

ol, ul{
    list-style: none;
}

.Sidebar_category__3EcvU{
    color : #343a40;
}

a{
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    color: #868e96;
}

.sidebar_category_a{
    color: #343a40 !important;

}

.Sidebar_sub{
    font-size: 12px;
    height: 18px;
    margin-bottom: 12px;
    color: #868e96;
    
}
</style>
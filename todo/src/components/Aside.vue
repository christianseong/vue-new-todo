<template>
    <aside class = "sidebar_side">
        <ul>
            <div class="categoryWrapper">
                <li class="side_main">
                    <a class="Sidebar_category__3EcvU" href="/search/category?params">리플렉티브</a>
                </li>
            </div>

        <SidebarWrapper v-for ="(i,idx)  in 8" :key = idx>
    
        </SidebarWrapper>
            

            
        </ul>

    </aside>
</template>

<script>
import SidebarWrapper from './AsideComponent/SidebarWrapper'

export default {
    data(){
        return{
             items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    },
    components:{
        SidebarWrapper
    }
}
</script>

<style scoped>

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
    font-size: 14px;
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
    font-size: 16px;
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
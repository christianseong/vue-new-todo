<template>
    <section class="Home_popular">
      <header class="Home_popular-header">인기검색어</header>
      <hr class="Home_popular-hr">
      <div class="Home_popular-flex">
          
          <ul class="Home_column-direction">
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">1.</span>
                      <span class="Home_keyword-text">오버핏</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">2.</span>
                      <span class="Home_keyword-text">나이키</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">3.</span>
                      <span class="Home_keyword-text">맨투맨</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">4.</span>
                      <span class="Home_keyword-text">가디건</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">5.</span>
                      <span class="Home_keyword-text">셔츠</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">6.</span>
                      <span class="Home_keyword-text">슬랙스</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">7.</span>
                      <span class="Home_keyword-text">와이드</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">8.</span>
                      <span class="Home_keyword-text">니트</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">9.</span>
                      <span class="Home_keyword-text">자켓</span>
                  </li>
              </a>
              <a href="#">
                  <li class="Home_keyword">
                      <span class="Home_keyword-rank">10.</span>
                      <span class="Home_keyword-text">반팔</span>
                  </li>
              </a>
          </ul>
      </div>
    </section>
</template>

<script>
export default {
    data() {
      return {
          popular_rank:[

          ]
      }
    },

    methods: {
    
    },
}
</script>

<style scoped>
    .Home_popular {
        width: 240px;
        margin-left: 23px;
    }
    .Home_popular-header {
        text-align: left;
        font-weight: 700;
        color: #343a40;
        height: 27px;
        line-height: 27px;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .Home_popular-flex {
        display: flex;
        margin-top: 0;
    }
    .Home_column-direction {
        flex-direction: column;
        text-align: left;
    }
    .Home_keyword {
        color: #495057;
        text-decoration: none;
        height: 24px;
        line-height: 14px;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 600;
    }
    .Home_keyword-rank {
        display: inline-block;
        color: #4285f4;
        font-weight: 700;
        width: 22px;
        margin-right: 11px;
    }
    .Home_keyword-text {
        color: #495057;
    }
    .Home_popular-hr {
        margin: 0;
        border: 0;
        border-top: 1px solid #909396;
    }
</style>
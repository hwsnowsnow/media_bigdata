<template>
    <div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade"
                 :class="{'show active': index === 0}"
                 :id="`pills-${filter.text}`"
                 role="tabpanel"
                 :aria-labelledby="`pills-${filter.text}-tab`"
                 v-for="(filter, index) in filters"
                 :key="`tab-pane-${filter.id}`">
                <div class="row row--15">
                    <template v-if="filter.text === 'all'" v-for="(portfolio, index) in portfolioData">
                        <div :class="`${column} portfolio`" data-aos="fade-up">
                            <div class="rwt-card">
                                <div class="inner">
                                    <div class="thumbnail">
                                        <video :src="videoData[index].src" controls class="fixed-video"></video>
            <router-link :to="`/portfolio-details/${portfolio.id}`" class="rwt-overlay"></router-link>
                                    </div>
                                    <div class="content">
                                        <h5 class="title mb--10">
                                            <!--<router-link :to="`/${TypeId}/portfolio/${portfolio.id}`">-->
                                            <router-link :to="getPortfolioLink(TypeId, portfolio.id)">
                                                {{ portfolio.title }}
                                            </router-link>
                                        </h5>
                                        <span class="subtitle b2 text-capitalize">{{ portfolio.category }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'
    import Video from '../video/Video'
    import router from '@/router'

    export default {
        name: 'Portfolio',
        components: {Video,Icon},
        computed: {
  getPortfolioLink() {
    return (TypeId, id) => {
      if (TypeId === '视频分镜'||TypeId === '色彩分析') {
        return `/${TypeId}/portfolio/${id}`;
      } else if (TypeId === '字幕提取') {
        return `/${TypeId}/Text/${id}`;
      } else if (TypeId === '音乐分析') {
        return `/${TypeId}/Audio/${id}`;
      }else if (TypeId === '情感分析') {
        return `/${TypeId}/Emotion/${id}`;
      }else{
        return '/'
      }
      // Add more conditions for other TypeId values if needed
    };
  }
},

        mounted(){
            this.TypeId=this.$route.params.id
            //console.log()
        },
        props: {
            portfolioData: {},
            buttonClass: {
                type: String,
                default: 'btn btn-default btn-large btn-icon'
            },
            column: {
                type: String,
                default: 'col-lg-6 col-md-6 col-sm-12 col-12 mt--30'
            }
        },
        data() {
            return {
                filters: [
                    {
                        id: 1,
                        text: 'all',
                    },
                    {
                        id: 2,
                        text: 'design',
                    },
                    {
                        id: 3,
                        text: 'art',
                    },
                    {
                        id: 4,
                        text: 'development',
                    }
                ],
                activeFilter: '',
                activeTab: 0,
                TypeId:null,
                videoData: [
                    {
                        src: require('@/assets/shot&color/video/001-1.mp4'),
                    },
                    {
                        src: require('@/assets/shot&color/video/001-2.mp4'),
                    },
                    {
                        src: require('@/assets/shot&color/video/002.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/006.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/003.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/004.mp4')
                    },
                ]
            }
        }
    }
</script>
<style>
.fixed-video {
  width: 840px; /* 设置宽度 */
  height: 360px; /* 设置高度 */
}

</style>
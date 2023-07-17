<template>
    <Layout header-class="header-left-align header-transparent" nav-alignment="left" buy-button-class="btn-default btn-small" :show-top-header="false" :footer-style="2" :show-footer="false">
        <!-- Start Slider area -->
        <div class="slider-area slider-style-2 variation-3 height-850 bg_image bg_image_fixed theme-shape"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-png-01.png`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="inner text-left">
                            <h1 class="title" data-aos="fade-up" data-aos-delay="100">
                                人脸识别与<br/>
                                <span class="theme-gradient">情感分析</span>
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="150">
                                Yolov5：基于PyTorch的目标检测算法</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider area -->


       

        <div class="rwt-portfolio-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--10">
                        <SectionTitle
                            title="运行结果"
                            :section-title-style="2"
                            data-aos="fade-up"
                        />
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <video v-if="videoData[this.Index - 1]" :src="videoData[this.Index-1].src" controls class="fixed-video"></video>
                    </div>
                </div>
            </div>
        </div>

        <div class="rwt-portfolio-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            title="可视化曲线"
                            :section-title-style="2"
                            data-aos="fade-up"
                        />
                    </div>
                     <!-- Start Split Area -->
        <div class="rwt-split-area">
            <div class="wrapper">
                <Split :split-data="splitData" :split-style="3"/>
            </div>
        </div>
        <!-- End Split Area -->

                </div>
                
            </div>
        </div>

       

       

    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Split from '../../components/elements/split/Split'

    export default {
        name: 'Freelancer',
        components: {
            Split,
            SectionTitle,
            Icon,
            Layout
        },
        mounted(){
            this.Index = this.$route.params.id
            console.log(this.Index)
            console.log(this.videoData[this.Index])
            this.splitData = this.getSplitData(this.Index);
        },
        data() {
            return {
               Index:null,
               splitData:{},
               videoData: [ 
                    {
                        src: require('@/assets/shot&color/video/001-1-aa.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/001-2-aa.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/002-aa.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/006-aa.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/003-aa.mp4')
                    },
                    {
                        src: require('@/assets/shot&color/video/004-aa.mp4')
                    },
                ]
            }
        },
        methods:{
            getSplitData(id) {
    switch (id) {
        case '1':
        return {
          image: '情绪分析结果/0011.jpeg',
          title: '情感释意',
          description: 'Anticipation：state of looking forward; hoping on or getting prepared for possible future events',
        };
        case '2':
        return {
          image: '情绪分析结果/0012.jpeg',
          title: '情感释意',
          description: 'Engagement：paying attention to something; absorbed into something; curious; interested',
        };
      case '3':
        return {
          image: '情绪分析结果/002.jpeg',
          title: '情感释意',
          description: 'Affection：fond feelings; love; tenderness',
        };
      case '4':
        return {
          image: '情绪分析结果/006.jpeg',
          title: '情感释意',
          description: 'Happiness：feeling delighted; feeling enjoyment or amusement',
        };
        case '5':
        return {
          image: '情绪分析结果/003.jpeg',
          title: '情感释意',
          description: 'Annoyance：bothered by something or someone; irritated; impatient; frustrated',
        };
        case '6':
        return {
          image: '情绪分析结果/004.jpeg',
          title: '情感释意',
          description: 'Engagement：paying attention to something; absorbed into something; curious; interested',
        };
      // Add more cases for other id values if needed
      default:
        return {
          image:'split-03.jpg' ,
          title: 'Default Title',
          description: 'Default Description',
        };
    }}
        }
    }
</script>
<template>
    <Layout buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-6 shape-left inheader-not-transparent height-750">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                        <div class="inner text-left">
                            <h1 class="title color-white" data-aos="fade-up" data-aos-delay="100">
                                音乐分析
                            </h1>
                            <p class="description color-white" data-aos="fade-up" data-aos-delay="150">
                                信号处理与频谱分析
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <video :src="videoData[this.Index-1].src" controls class="fixed-video"></video>
                    </div>
                    <div class="shape-image w-auto">
                        <img src="../../assets/images/banner/white-shape.svg" alt="Banner Images"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        

        <Separator/>


        <!-- Start Split Area -->
        <div class="rwt-split-area">
            <div class="wrapper">
                <Split :split-data="splitData" :split-style="3"/>
            </div>
        </div>
        <!-- End Split Area -->

        <div class="rwt-split-area">
            <div class="wrapper">
                <Split :split-data="splitData2" :split-style="3"/>
            </div>
        </div>

       

       

        
        <Separator/>

    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Separator from '../../components/elements/separator/Separator'
   
    import Split from '../../components/elements/split/Split'
    
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    

    export default {
        name: 'EventConference',
        components: {
            
            Split,
            
            Separator,
            SectionTitle,
            Icon,
            Layout
        },
        mixins: [BlogPostMixin],
        mounted(){
            this.Index = this.$route.params.id
            console.log(this.Index)
            this.splitData = this.getSplitData(this.Index);
            this.splitData2 = this.getSplitData2(this.Index);
        },
        data() {
            return {
                Index:null,
                splitData:{},
                splitData2:{},
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
        },
        methods:{
            getSplitData(id) {
    switch (id) {
      case '3':
        return {
          image: '音频可视化结果/002.jpg',
          title: 'Mel谱图',
          description: '当信号在不同频率下随时间变化时，直观地表示信号响度或幅度的方法。',
        };
      case '4':
        return {
          image: '音频可视化结果/006.jpg',
          title: 'Mel谱图',
          description: '当信号在不同频率下随时间变化时，直观地表示信号响度或幅度的方法。',
        };
        case '5':
        return {
          image: '音频可视化结果/003.jpg',
          title: 'Mel谱图',
          description: '当信号在不同频率下随时间变化时，直观地表示信号响度或幅度的方法。',
        };
        case '6':
        return {
          image: '音频可视化结果/004.jpg',
          title: 'Mel谱图',
          description: 'Descript当信号在不同频率下随时间变化时，直观地表示信号响度或幅度的方法。ion',
        };
      // Add more cases for other id values if needed
      default:
        return {
          image:'split-03.jpg' ,
          title: 'Default Title',
          description: 'Default Description',
        };
    }},
    getSplitData2(id) {
    switch (id) {
      case '3':
        return {
          image: '音乐可视化2/002.jpg',
          title: 'Log-Mel谱图',
          description: '更好地描述音频的频率分布特征，具有更高的语音识别率。',
        };
      case '4':
        return {
          image: '音乐可视化2/006.jpg',
          title: 'Log-Mel谱图',
          description: '更好地描述音频的频率分布特征，具有更高的语音识别率。',
        };
        case '5':
        return {
          image: '音乐可视化2/003.jpg',
          title: 'Log-Mel谱图',
          description: '更好地描述音频的频率分布特征，具有更高的语音识别率。',
        };
        case '6':
        return {
          image: '音乐可视化2/004.jpg',
          title: 'Log-Mel谱图',
          description: '更好地描述音频的频率分布特征，具有更高的语音识别率。',
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
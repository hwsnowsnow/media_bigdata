<template>
    <Layout>
        <div class="rn-blog-details-area">
            <div class="post-page-banner rn-section-gapTop">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 ">
                            <div class="content text-center">
                                <div class="page-title">
                                    <h1 class="theme-gradient" >字幕提取及文本分析</h1>
                                </div>
                                <div class="row">
                                    <div class="col-lg-9">
                                <div class="thumbnail alignwide mt--0">
                                    <video :src="videoData[this.Index-1].src" controls class="fixed-video"></video></div></div>
                                    <div class="col-lg-2 d-flex align-items-start sc">
                                        <div class="scrollable-container">
                                        <p v-html="post.body"/></div>
                                    </div></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-details-content pt--60 rn-section-gapBottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="content">
                                <div class="row">
                                    
                                    <div class="col-lg-12">
                                        <!-- Start Split Area -->
        <div class="rwt-split-area">
            <div class="wrapper">
                <Split :split-data="splitData" :split-style="3"/>
            </div>
        </div> </div>
        <!-- End Split Area -->
                                    </div>
                               
                                

                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
 
<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import Icon from '../components/icon/Icon'
    import BlogPostMixin from '../mixins/BlogPostMixin'
    import Split from '../components/elements/split/Split'
    

    export default {
        name: 'BlogDetailsPage',
        components: {Split,Icon, Layout, Breadcrumb},
        mixins: [BlogPostMixin],
        data() {
            return {
                id: this.$route.params.id,
                post: {},
                Index:null,
                splitData:{},
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
        methods: {
            getPost(postId) {
                this.post = this.posts.find(item => item.id == postId);
            },
            getSplitData(id) {
    switch (id) {
      case '1':
        return {
          image: '字幕可视化结果/001-1.jpeg',
          title: '情感倾向置信度',
          description: '分镜情感分析图',
        };
      case '2':
        return {
          image: '字幕可视化结果/001-2.jpeg',
          title: '情感倾向置信度',
          description: '分镜情感分析图',
        };
      // Add more cases for other id values if needed
      default:
        return {
          image:'split-03.jpg' ,
          title: 'Default Title',
          description: 'Default Description',
        };
    }}
        },
        mounted() {
            this.getPost(this.id);
            
            this.Index = this.$route.params.id
            console.log(this.Index)

            this.splitData = this.getSplitData(this.Index);
            
        }
    }
</script>

<style scoped>
.scrollable-container {
  max-height: 360px; /* 设置容器的最大高度 */
  overflow-y: scroll; /* 添加垂直滚动条 */
  
}
.sc{
    background-color: #F5F8FA;
}
</style>
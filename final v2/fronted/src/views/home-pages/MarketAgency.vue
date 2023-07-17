<template> 
    <Layout :topbar-style="2" :footer-style="2">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 bg-transparent variation-2 height-750">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                        <div class="inner text-left">
                            <h1 class="title theme-gradient display-two" data-aos="fade-up" data-aos-delay="100">
                                《过春天》 <br/>+
                                <vue-typed-js class="d-inline-block"
                                              :strings="['视频分镜', '色彩分析', '字幕提取', '音乐分析', '情感分析']"
                                              :loop="true"
                                              :type-speed="80"
                                              :start-delay="1000"
                                              :back-speed="50">
                                    <span class="typing"></span>
                                </vue-typed-js>
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="150">
                                20数科 江婷 周睿 雷若兰
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 order-1 order-lg-2">
                        <div class="thumbnail" data-aos="fade-up" data-aos-delay="250">
                            <img src="../../assets/images/bg/bg-image-16.png" alt="Banner Images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->



        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-advance-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle=""
                            title="功能概览"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <AdvancedTab :tab-data="tabData"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        
    </Layout>
</template>

<script>
    import Layout from "../../components/common/Layout";
    import Separator from "../../components/elements/separator/Separator";
    import SectionTitle from "../../components/elements/sectionTitle/SectionTitle";
    import Icon from "../../components/icon/Icon";
    import ServiceFour from "../../components/elements/service/ServiceFour";
    import AdvancedTab from "../../components/elements/tab/AdvancedTab";
    import AdvancePricing from "../../components/elements/pricing/AdvancePricing";
    import Brand from "../../components/elements/brand/Brand";

    export default {
        name: 'MarketAgency',
        components: {Brand, AdvancePricing, AdvancedTab, ServiceFour, Icon, SectionTitle, Separator, Layout},
        data() {
            return {
                tabData: {
                    tabContent: [
                        {
                            id: 1,
                            menu: 'market-research',
                            title: '视频分镜',
                            description: '',
                            image: require(`@/assets/images/tab/tabs-01.jpg`),
                        },
                        {
                            id: 2,
                            menu: 'corporate-report',
                            title: '色彩分析',
                            description: '',
                            image: require(`@/assets/images/tab/tabs-02.jpg`),
                        },
                        {
                            id: 3,
                            menu: 'app-development',
                            title: '字幕提取',
                            description: '',
                            image: require(`@/assets/images/tab/tabs-03.jpg`),
                        }
                        ,
                        {
                            id: 4,
                            menu: 'corporate-report',
                            title: '音乐分析',
                            description: '',
                            image: require(`@/assets/images/tab/tabs-04.jpg`),
                        },
                        {
                            id: 5,
                            menu: 'app-development',
                            title: '情感分析',
                            description: '',
                            image: require(`@/assets/images/tab/tabs-05.jpg`),
                        }
                    ]
                },
                brandList: [
                   
                ],
            }
        }
    }
</script>
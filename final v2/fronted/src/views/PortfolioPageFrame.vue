<template>
    <Layout>
        <div class="rwt-portfolio-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="选择可跳转至色彩分析"
                            title="视频分镜"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <PortfolioFrame class="mt--20" :portfolio-data="portfolioItems" column="col-lg-3 col-md-4 col-sm-6 mt--30"/>
            </div>
        </div>

    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import PortfolioFrame from '../components/elements/portfolio/portfolioFrame'
    import PortfolioItemMixinFrame from '../mixins/PortfolioItemMixinFrame'

    export default {
        name: 'PortfolioPageFrame',
        components: {PortfolioFrame, SectionTitle, Layout, Breadcrumb},
        mixins: [PortfolioItemMixinFrame],
    }
</script>
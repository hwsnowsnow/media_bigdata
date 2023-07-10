<template>
    <Layout>
        <div class="rwt-portfolio-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle=""
                            title="选择片段"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Portfolio class="mt--20" :portfolio-data="portfolioItems"/>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Portfolio from '../components/elements/portfolio/Portfolio.vue'
    import PortfolioItemMixin from '../mixins/PortfolioItemMixin'

    export default {
        name: 'PortfolioPage',
        components: {Portfolio, SectionTitle, Layout, Breadcrumb},
        mixins: [PortfolioItemMixin], 
    }
</script>
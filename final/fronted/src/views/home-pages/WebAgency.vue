<template>
    <Layout buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-8 height-350">
            <div class="single-slide">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="inner text-center">
                                <h1 class="subtitle theme-gradient" data-aos="fade-up" data-aos-delay="150">
                                    色彩分析
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Counterup Area -->
        <div class="our-counterup-area">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="thumbnail" data-aos="fade-up">
            <img class="radius w-100" :src="getPicFromSection(this.$route.params.Typeid,this.$route.params.id)" alt="/"/>
        </div>
        
      </div>
    </div>
  </div>
</div>

        <!-- End Counterup Area -->

        <div class="color-blocks" >
    <div class="color-block" v-for="color in colors" :style="{ backgroundColor: color }"></div>
  </div>
        <Separator/>

        

    </Layout>
</template>

<script>
    import Layout from "../../components/common/Layout";
    import Separator from "../../components/elements/separator/Separator";
    import SectionTitle from "../../components/elements/sectionTitle/SectionTitle";
    import PortfolioItemMixinFrame from '../../mixins/PortfolioItemMixinFrame'
    import axios from 'axios'

    export default {
        name: 'WebAgency',
        components: {  SectionTitle, Separator, Layout},
        mixins: [PortfolioItemMixinFrame], 
        mounted(){
           //console.log(this.$route.params.Typeid)
           //console.log(this.$route.params.id)
           this.fetchRGBValues();
           //console.log(this.colors)
        },
        data() {
            
            return {
                selectedSection:null,
                section:{},
                pic:null,
                colors: [],
                rgbValues: []
            }
        },
        methods:{
            getPicFromSection(section, id) {
      const selectedSection = this.portfolioItems.find(item => item.section === section);
      //console.log(selectedSection)
      if (selectedSection) {
        const selectedItem = selectedSection.items.find(item => item.id == id);
        //console.log(selectedItem)
        if (selectedItem) {
          return selectedItem.portfolioImage;
        }
      }
      return [];
    },
    fetchRGBValues() {
  const Typeid = this.$route.params.Typeid;
  const id = this.$route.params.id;
  const url = `/${Typeid}output.txt`;

  axios
    .get(url)
    .then(response => {
      const data = response.data;
      const regex = new RegExp(`image${id}\\.jpg:\\s*\\[([^\\]]+)\\]`);
      const match = data.match(regex);

      if (match) {
        const rgbString = match[1];
        console.log('rgbString:', rgbString);
        const rgbValues = rgbString.match(/\d+/g);
        console.log('rgbValues:', rgbValues);
        const rgbArray = [];

        for (let i = 0; i < rgbValues.length; i += 3) {
          const r = parseInt(rgbValues[i]);
          const g = parseInt(rgbValues[i + 1]);
          const b = parseInt(rgbValues[i + 2]);

          if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            const rgbString = `rgb(${r}, ${g}, ${b})`;
            rgbArray.push(rgbString);
          } else {
            console.error('RGB值格式不正确:', `${r}, ${g}, ${b}`);
          }
        }

        console.log('rgbArray:', rgbArray);
        this.colors = rgbArray;
      } else {
        console.error('无法找到对应的RGB值');
      }
    })
    .catch(error => {
      console.error('获取文档内容失败', error);
    });
}


        }
    }
</script>
<style>


.color-blocks {
  display: flex;
  justify-content: center; /* 在主轴上居中对齐 */
  margin-top: 20px; /* 色块与上方内容的间距 */
  margin-bottom: 20px; /* 色块与上方内容的间距 */
}

.color-block {
  width: 150px;
  height: 80px;
  margin-right: 10px; /* 色块之间的间距 */
  /* 添加适当的样式，如间距、边框等 */
}
</style>
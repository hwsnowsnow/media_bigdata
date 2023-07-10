<template>
    <div>
      <div class="row row--15"></div>
      <div class="tab-content" id="pills-tabContent">
        <div
          v-if="SectionRoute"
          class="tab-pane fade"
          :class="{'show active': index === 0}"
          :id="`pills-${filter.text}`"
          role="tabpanel"
          :aria-labelledby="`pills-${filter.text}-tab`"
          v-for="(filter, index) in filters"
          :key="`tab-pane-${filter.id}`"
        >
          <div class="row row--15">
            <div
              v-if="filter.text === 'all'"
              v-for="(portfolio, index) in getSectionItems(SectionRoute)"
              :key="index"
              :class="`${column} portfolio`"
              data-aos="fade-up"
            >
              <div class="rwt-card">
                <div class="inner">
                  <div class="thumbnail">
                    <figure class="card-image">
                      <router-link :to="`/web-agency/${SectionRoute}/${portfolio.id}`">
                        <img class="img-fluid" :src="portfolio.portfolioImage" alt="Portfolio-01" />
                      </router-link>
                    </figure>
                    <router-link :to="`/portfolio-details/${portfolio.id}`" class="rwt-overlay"></router-link>
                  </div>
                  <div class="content">
                    <h5 class="title mb--10">
                      <router-link :to="`/portfolio-details/${portfolio.id}`">
                        {{ portfolio.title }}
                      </router-link>
                    </h5>
                    <span class="subtitle b2 text-capitalize">{{ portfolio.category }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :src="require(`@/assets/shot&color/${this.SectionRoute}.png`)" alt="/"/>
    </div>
  </template>
  
  <script>
  import Icon from '../../icon/Icon'
  import Split from '../split/Split'
  
  export default {
    name: 'PortfolioFrame',
    components: { Split, Icon },
    mounted() {
      var tempID = this.$route.params.id
      console.log(tempID)
      switch (tempID) {
        case '1':
          this.SectionRoute = '001-1'
          //console.log(this.SectionRoute)
          break;
        case '2':
          this.SectionRoute = '001-2'
          //console.log(this.SectionRoute)
          break;
        case '3':
          this.SectionRoute = '002'
          //console.log(this.SectionRoute)
          break;
        case '4':
          this.SectionRoute = '006'
          //console.log(this.SectionRoute)
          break;
        case '5':
          this.SectionRoute = '003'
          //console.log(this.SectionRoute)
          break;
        case '6':
          this.SectionRoute = '004'
          //console.log(this.SectionRoute)
          break;
      }
      console.log(this.SectionRoute)
    
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
        htmlContent: '',
        splitOneData: {
          image: 'split-01.jpg',
          title: '分镜可视化',
        },
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
        SectionRoute: null,
        CountFrame: null,
      }
    },
    methods: {
      getSectionItems(section) {
        const selectedSection = this.portfolioData.find(item => item.section === section);
        if (selectedSection) {
          return selectedSection.items;
        } else {
          return [];
        }
      }
    }
  }
  </script> 
  
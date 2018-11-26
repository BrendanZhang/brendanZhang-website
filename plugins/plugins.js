import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
import 'normalize.css'
import echarts from 'echarts'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper/dist/vue-awesome-swiper'

export default () => {
  Vue.use(Element, { locale })
  Vue.use({ swiper, swiperSlide })
}

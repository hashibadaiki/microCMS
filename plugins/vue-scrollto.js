import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

// 目次に使われている指定位置まで移動するplugin

export default function vueScrollTo(context, inject) {
  inject('scrollTo', VueScrollTo.scrollTo);
}

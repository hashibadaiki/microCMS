import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

// 恐らくpageTopに戻るみたいなpluginっぽい
// TODO: 要確認

export default function vueScrollTo(context, inject) {
  inject('scrollTo', VueScrollTo.scrollTo);
}

import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'

import StatusComponet from './Status.vue'

Vue.config.productionTip = false

//전역변변수 처리 : 콤포넌크명, 옵션
Vue.component('statusComponet', StatusComponet)

// child 간 통신을 위한 인스턴스 생성
// export const eventBus = new Vue();
export const eventBus = new Vue({
    methods: {
      userWasEdited(date){
        this.$emit("userWasEdited", date)
      }
    },
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

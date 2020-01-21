import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'

Vue.use(VueRouter)
/* 
const user = () => { 
   return  import("./components/User")
}
 */
const user = () => import("./components/User")
const params = () => import("./components/Params")
const userView = () => import("./components/UserView")
const E404 = () => import("./components/E404")

export const router = new VueRouter({
    mode : 'history',                   //  해시태그(#) 제거
    base : process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name : 'home',
            component : Home
        }, {
            path: '/user',
            name : 'user',
            //component : User
            
            //lazy-loaded when the route is visited, 주소입력시 컴포넌트 호출
            // component : () => import("./components/User")
            component : user,
            children : [
                {
                    path : 'view/:seqNo',
                    name : 'user-view',
                    component : userView
                }
                
            ]
  
        }, {
            path: '/params/:userId',
            name : 'params',
            component : params
        }, {
            path: '/query',
            name : 'query',
            component : params
        }, {
            path: '/404',
            name : '404',
            component : E404
        }, {
            path: '/*',     //router path에 정의 되지 않은 경로
            redirect : {name : '404'}
        },
    ]
})  

<template>
    <div>
        <h1>부모컴포넌트</h1>        
        <p>이름 : {{ name }}</p>       
        <p>createAt : {{ getDateAndTime(createAt) }}</p>       
        <p>mixinData : {{ getMixinData }}</p>       
         <button @click="changeName()">이름변경</button> 
        <hr>

         <user-detail 
            :userDetailName="name" 
            apiUrl="http://www.google.com"
            :hasGirl="hasGirl">
        </user-detail>
        <hr>
         <user-form 
            :userFormName="name"
            @sendUser='setUser'
             :hasGirl="hasGirl">
        </user-form>


        <hr>
        <router-view></router-view>

    </div>
</template>


<script>
import UserDetail from './UserDetail.vue'
import UserForm from './UserForm.vue'
import { dateFormat } from "../mixins/dateFormat"

export default {
    components : {
        UserDetail,
        UserForm
    },
    data() {
        return {
            name : "변경 전 이름",
            apiUrl : "http://www.google.com",
            hasGirl : "N",
            createAt : null
        }
    },
    computed: {
        getMixinData(){
            return this.mixinData + " 출력"
        }
    },
    created() {
        this.createAt = new Date()
    },
    methods: {
         changeName(){
            this.name = "변경 후 이름"
        }, 
        setUser(user){
            // eslint-disable-next-line no-console
            console.log("child 에서 받음 : " + user.hasGirl);
            this.name = user.name
            this.hasGirl = user.hasGirl
        },
     
    }, 
    mixins : [dateFormat]
}
</script>

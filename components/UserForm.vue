<template>
    <div style="border:1px solid blue">
        <h1>자식컴포넌트 2</h1>        
        <p>이름1 :    <input type="text" v-model="user.name"></p>
        <p>이름2 :    {{ userFormName }}</p>
        <p>여친 있음 : <input type="radio" value="Y" name="hasGirl" v-model="user.hasGirl"></p>
        <p>여친 없음 : <input type="radio" value="N" name="hasGirl" v-model="user.hasGirl"></p>

        <button @click="changeUser()">수정</button>

    </div>
</template>

<script>

//child 통신위 위한 import main.js 에 인스턴스 생성되어 있음
import { eventBus } from "../main";

export default {

    props : ['userFormName','hasGirl'],

    data() {
        return {
            user : {
            }
        }
    },
    created(){
        this.user.name = this.userFormName
        this.user.hasGirl = this.hasGirl
    },
    methods : {
        changeUser() {

            //부모에서 @sendUser='parents' 속성으로 받으며 부모는 setUser 함수를 실행한다. 
            this.$emit('sendUser', this.user)

            // child 간 통신 UserDetail 에 전달
            // eventBus.$emit("userWasEdited", new Date())
            eventBus.userWasEdited(new Date())

        }
    }
}
</script>

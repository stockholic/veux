<template>
    <div style="border:1px solid blue">
        <h1>자식컴포넌트 1</h1>        
        <p>이름 : {{ userDetailName }}</p>       
        <p>URL : {{ url }}</p>       
        <p>여친유무 : {{ isGirl }}</p>  
        <p>수정일자 : {{ getDateAndTime(date) }}</p>          

        <status-componet></status-componet>
    </div>
</template>


<script>
import { eventBus } from "../main"
import { dateFormat } from "../mixins/dateFormat"

export default {
    props : ['userDetailName','apiUrl','hasGirl'],

    data() {
        return {
            url : this.apiUrl,
            date : null
        } 
    },
    computed: {
         isGirl(){
            return this.hasGirl === 'Y' ? "있음" : "없음"
         }
    },
    created() {
        // event Listener 역활, UserForm 'userWasEdited' 에서 보낸 값을 Listen 한다.
        // 전달받은명, 콜백함수 
        eventBus.$on("userWasEdited", date => {
            this.date = date 
        })
    },
    mixins : [dateFormat]
}
</script>

<template>
    <div>
        <h1>HOME</h1>    
         
        <router-link :to="{name : 'user'}">
        <p>User Link</p>    
        </router-link> 

        <router-link :to="{
                name : 'user-view',
                params : {
                    seqNo : 1234
                }
            }
        ">
        <p>Child User Link 1</p>    
        </router-link> 

        <p @click="$router.push({
                    name : 'user-view',
                    params : {
                        seqNo : 1234
                    }
                })" 
        style="cursor:pointer">Child User Link 2</p>     

       <!--  <p @click="$router.push('/user')" style="cursor:pointer">User Link</p>   -->      
       <!-- <a href="/user">User</a> -->        

        <!-- 파라미터를 통한 전달 -->
       <p @click="$router.push({
                    name : 'params',
                    params : {
                        userId : 'merong', 
                        userNm : '메롱'
                    }
                })" 
        style="cursor:pointer">Params Link</p>       

        <!-- 쿼리를 통한 전달 -->
        <p @click="$router.push({
                    name : 'query',
                    query : {
                        userId : 'merong', 
                        userNm : '메롱'
                    }
                })" 
        style="cursor:pointer">Query Link</p>  

    </div>
</template>


<script>
export default {

    methods: {
        gotoUser() {

        }
    },

}
</script>

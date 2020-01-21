<template>
    <div>
        <h1>Child link  UserView</h1>
        <p>params : {{ getParam }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        getParam(){
            return this.$route.params
        }
    }
}
</script>

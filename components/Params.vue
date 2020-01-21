<template>
    <div>
        <h1>Param</h1>
        <p>params : {{ $route.params }}</p>
        <p>ex) /xxx/1234 : {{ getParam }} userId :  {{ getParam.userId }}</p>

        <hr>

        <h1>Query</h1>
        <p>query : {{ $route.query }} userId :  {{ $route.query.userId }}</p>
        <p>ex) /xxx?useId=merong</p>


    </div>
</template>

<script>
export default {
    computed: {
        getParam(){
            return this.$route.params
        }
    },
    created() {
        // eslint-disable-next-line no-console
        console.log("router", this.$router)
        // eslint-disable-next-line no-console
        console.log("route", this.$route)
    },
}
</script>

<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!-- <p>Loaded ID: {{ id }}</p> -->
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
    methods: {
        navigateToHome() {
            // this.$router.push('/');

            // A BETTER WAY THAN THE ABOVE ONE,PASSING AN OBEJCT WITH NAME PROPERTY(NAME OF THE ROUTE)
            this.$router.push({name: 'home'});
        }
    }
}
</script>

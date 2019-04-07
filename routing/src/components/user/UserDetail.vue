<template>
    <div>
        <p>User has Loaded ID: {{ $route.params.id }} </p>
        <h3>Some User Details</h3>
        <router-link 
            tag="button" 
            class="btn btn-primary" 
            :to ="link"
            >Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale:'en', q: 100
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            if(true) {
                next();
            }else {
                next(false);
            }
        }
    }
</script>


// ANOTHER OPTION IS THE BELOW, BUT FOR LONG LINKS THERE IS A BETTER WAY, THE ONE SHOWN ABOVE.
//  :to="'/user/' + $route.params.id + '/edit'"


//I HAVE STORED THIS OBJECT BELLOW, INTO A DATA PROPERTY ABOVE
:to="{name: 'userEdit' , params:{id: $route.params.id}, query: {locale:'en', q: 100}}"
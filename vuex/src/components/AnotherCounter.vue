<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex';
    export default {
        // methods: {
        //     increment() {
        //         this.$store.state.counter++;
        //     },
        //     decrement() {
        //         this.$store.state.counter--;
        //     }
        // }

        // methods: {
        //     increment() {
        //         this.$store.commit('increment');
        //     },
        //     decrement() {
        //         this.$store.commit('decrement');
        //     }
        // }
        
        // methods: {
        //     ...mapMutations([
        //         'increment',
        //         'decrement'
        //     ])
        // }

        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>
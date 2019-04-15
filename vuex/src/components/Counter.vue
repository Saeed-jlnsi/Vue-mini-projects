<template>
    <div>
        <!-- IF WE WANT TO PASS MORE THAN JUST ONE ARGUMENT TO THE FUNCTION(via actions), 
            WE SHOULD PASS AN OBJECT OF KEY-VALUE PAIR(compare this with the Counter component) -->
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Async Decrement</button>
    </div>
</template>

<script>
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

        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>
<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                // WE DON'T EXECUTE THE FUNCTION => doubleCounter();
                // THE VUEX WILL EXECUTE IT FOR US(so don't need '()' in front of the function).
                return this.$store.getters.doubleCounter;
            } 
        }
    }
</script>
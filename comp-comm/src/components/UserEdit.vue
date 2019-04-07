<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age is: {{ userAge }}</p>
        <button @click="editAge">Eddit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
   export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                // this.$emit('ageWasEdited', this.userAge);

                 // ------- How to centralize code in an event bus --------
                // eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
   }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

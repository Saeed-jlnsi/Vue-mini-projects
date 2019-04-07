<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
        <p>User Age is: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name 2</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            // ------- different Props Validation --------
            // myName: {
            // type: String,
            // default: 'Saeed'
            // }
            // ------- different Props Validation --------
            // myName: {
            //     type: Object,
            //     default: function() {
            //         return {
            //             name: 'Saeed'
            //         }
            //     }
            // },
            myName: {
                type: String
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            reverseName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Saeed';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Counter is: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        // computed: {
        //     counter() {
        //         // WE DON'T EXECUTE THE FUNCTION => doubleCounter();
        //         // THE VUEX WILL EXECUTE IT FOR US(so don't need '()' in front of the function).
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }

        // INSTEAD OF DOING THE ABOVE FOR EACH GETTER, WE CAN USE THE 'mapGetters' TO USE ALL THE GETTERS WE NEED IN THE COMPONENT 
        // computed: mapGetters([
        //         'doublerCounter',
        //         'stringCounter'
        //     ])

        computed: {
            // WE USE THE SPREAD OPERATOR TO BE ABLE TO DEFINE OUR OWN COMPUTED PROPERTIES ALONGSIDE THE MAPGETTERS METHOD
            // TO USE THE SREAD OPERATOR WE SHOULD INSTALL A DEPENDENCY 'npm install --save-dev babel-preset-stage-2'
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            // ourOwn() {
            //    //NOW WE CAN DEFINE OUR OWN COMPUTED PROPERTY
            // }
        }
    }
</script>
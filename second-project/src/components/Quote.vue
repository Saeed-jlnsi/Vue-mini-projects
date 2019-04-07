<template>  
    <div class="row all-quotes-style">
        <div class="col-lg-3">
            <p>Just a Quote to start with something</p>
        </div>
        <div class="col-lg-3" v-for="item in listOfQuote" @click="removeQuote(item)">
            <p>{{ item }}</p>
        </div>
    </div>    
</template>

<script>

    import { eventBus } from '../main';
    export default {

        props: ['quotesCounter', 'quote'],

        // props: {

        //     quotesCounter : Number,
        //     quote : String
            
        // },

        data: function() {
            return {
                listOfQuote: '',
                showQuote: true,
                myCounter: this.quotesCounter,
                currentQuote: this.quote
                
            }
            
        },
        created() {
            eventBus.$on('quotesAddedList', (list) => {
                this.listOfQuote = list;
            });
        },
        methods: {
            removeQuote(itemQuote) {

                // console.log(this.quotesCounter);
                // console.log(this.myCounter);

                for(var i=0; i < this.listOfQuote.length; i++) {

                    if(this.listOfQuote[i] == itemQuote) {

                        this.myCounter = this.quotesCounter;
                        this.listOfQuote.splice(i,1);
                        this.myCounter--;
                        this.$emit('quoteWasRemoved', this.myCounter);

                        // console.log(this.quotesCounter);
                        // console.log(this.myCounter);

                        // this.$emit('quoteWasAdded', this.counter);
                        // console.log(this.listOfQuote);
                        break;
                    }
                }
            }
        }
    }

</script>

<style scoped>

    div.all-quotes-style {
        margin-top: 10px;
        clear: both;
    }

    .all-quotes-style div {
        height: auto;
        float: left;
        text-align: justify;
        /* border: 1px solid red; */
    }

    p {
        word-wrap: break-word;
        height: auto;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 5px;
        font-family: Arizonia;
        font-size: 2em;
        color: rgb(104, 104, 104);
        /* text-align: justify; */
    }

    p:hover {
        background-color: #f8d7da;
    }

    /* class=" alert alert-danger"
       class= "alert alert-light"
     */

</style>

<template>
    <div class="row">
        <div class="new-quote-style">
            <p>Quote</p>
        <textarea name="testarea" id="text-area" cols="60" rows="4" v-model="currentQuote"></textarea>
        <button class="btn btn-primary" @click="addQuote">Add Quote!</button>
        </div>
    </div> 
</template>


<script>

    import { eventBus } from '../main';
    export default {
        props: {

            quotesCounter: Number,
            quote: String
        },

        data: function() {
            return {
                quotesList: [],
                counter: this.quotesCounter,
                currentQuote: this.quote
            };
        },
        methods: {
            addQuote() {
                this.counter = this.quotesCounter;
                if(this.counter < 10) {
                
                    this.quotesList.push(this.currentQuote);
                    eventBus.$emit('quotesAddedList', this.quotesList);
                    this.counter++;
                    this.$emit('quoteWasAdded', this.counter);

                }else  {
                    alert('Remove some Quote to add new ones');
                    console.log(this.counter);
                    console.log(this.quotesCounter);
                }
            }
        }
    }
</script>

<style scoped>
    .new-quote-style {
        margin: auto;
        width: 526px;
    }

    #text-area {
        display: block;
        margin: auto;
        border: 2px solid #ddd;
        border-radius: 5px;
        padding: 5px 10px;
    }

    button {
        display: block;
        margin: 20px auto;
    }
</style>

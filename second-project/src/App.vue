<template>
    <div class="container">
        <header-quote :maxQuotes="maxQuotes" :quotesCounter="quotesCounter"></header-quote>
        <new-quote :quotesCounter="quotesCounter" @quoteWasAdded="quotesCounter = $event"></new-quote>
           <single-quote :quotesCounter="quotesCounter" @quoteWasRemoved="quotesCounter = $event"></single-quote>

        <div class="row">
            <div class="alert alert-info footer">
            <p>info: Click on a Quote to delete it</p>  
        </div> 
        </div>
        
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import NewQuote from './components/NewQuote.vue';
    // import Quotes from './components/AllQuotes.vue';
    import Quote from './components/Quote.vue';
        
    export default {
        data: function() {
            return {
                maxQuotes: 10,
                quotesCounter: 1,
                quote: ''
            }
        },
        components: {
            headerQuote : Header,
            newQuote : NewQuote,
            // allQuote : Quotes,
            singleQuote : Quote 
        }
    }
</script>

<style scoped>
    
    .footer {
        margin-top: 60px;
        width: 100%;
        display: inline-block;

    }

    .footer p {
        text-align: center;
    }

</style>

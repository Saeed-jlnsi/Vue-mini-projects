<template>
    <div class="row">
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" :style="barWidth">
                {{ quotesCounter }} / {{ maxQuotes }}
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props : ['maxQuotes', 'quotesCounter'],

    computed: {
        barWidth: function() {
            return {
                width : this.quotesCounter * 10 + '%' 
            };
        } 
    }
}
</script>

<style scoped>
    
</style>

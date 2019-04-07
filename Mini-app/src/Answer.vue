<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="alert alert-success">
                <h1>That's Correct!</h1>
                <hr>
                <button class="btn btn-primary" @click="newQuestion">New Question</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['selectedComponent'],
    methods: {
        newQuestion() {
            this.selectedComponent = 'appQuestion';
            this.$emit('showNewQuestion', this.selectedComponent);
        }
    }
}
</script>



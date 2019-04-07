<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>The Super Quize</h1>
            </div>
        </div>
        <hr>
        <transition enter-active-class="animated flipInY" leave-active-class="animated flipOutY" mode="out-in">
            <component
                appear
                :is="selectedComponent"
                @questionAnswered="selectedComponent = $event"
                @showNewQuestion="selectedComponent = $event">
            </component>
        </transition>
    </div>
</template>

<script>
    import Question from './Question.vue';
    import Answer from './Answer.vue';
    export default {
        data() {
            return {
                selectedComponent: 'appQuestion',
            }
        },
        components: {
            appAnswer : Answer,
            appQuestion : Question
        }
    }
</script>

<style>
    * {
        text-align: center;
    }

    .container {
        padding-top: 50px;
    }

</style>

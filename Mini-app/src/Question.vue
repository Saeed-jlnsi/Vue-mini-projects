<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">What's {{ firstNumber }}{{ operatorSign }}{{ secondeNumber }}?</div>
                <div class="panel-body ">
                    <span 
                        class=" col-lg-6" 
                        style="cursor:pointer" 
                        @click="checkAnswer(possibleAnswer)"
                        v-for="(possibleAnswer,index) in possibleAnswers" 
                        :key="index"><span class="label label-primary">{{ possibleAnswer }}</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectedComponent'],
        data() {
            return {
                firstNumber: 0,
                secondeNumber: 0,
                operatorSign: '',
                answer: 0,
                possibleAnswers: [],
                randomNumber: 0,
                option: 0,
                componetSelected: this.selectedComponent
            }
        },
        created() {
            this.firstNumber = Math.floor(Math.random() * 100 + 1);
            this.secondeNumber = (Math.random() < 0.5 ? 1:-1) * (Math.floor(Math.random() * 100 + 1));
            this.answer = this.firstNumber + this.secondeNumber;

            while(this.possibleAnswers.length < 3) {

                this.randomNumber = (Math.random() < 0.5 ? 1:-1) * Math.floor(Math.random() * 10 + 1);
                this.option = this.answer + this.randomNumber;

                var pos = Math.floor(Math.random() * 3);

                if(!(this.possibleAnswers.includes(this.option))) {
                    this.possibleAnswers.splice(pos, 0, this.option);
                }
                //Also : I counld this IndexOf() Arraymethod, but includes() return a boolean, and in this case is better.
                //Like ==> if(this.possibleAnswers.indexOf(this.option) == -1) {DO SOMETHING...}
            }

            pos = Math.floor(Math.random() * 3);
            this.possibleAnswers.splice(pos, 0, this.answer);
            console.log(this.possibleAnswers);

            this.operatorSign = this.secondeNumber > 0 ? "+":"";
        },
        methods: {
        
            checkAnswer(item) {
                if(this.answer == item) {
                    this.componetSelected = 'appAnswer';
                    this.$emit('questionAnswered', this.componetSelected);
                    console.log(this.selectedComponent);
                }else {
                    alert('My dear friend, your answer is bullshit. Try again!');
                }
            } 
        }
    }
</script>


<style scoped>

    span {
        font-size: 1.2em;
    }

    .panel-body span {
        margin: 20px 0;
    }


</style>


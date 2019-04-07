<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- <app-quote :quote="'A Wonderful Quote'"></app-quote> -->
                <!-- <app-quote quote="A Wonderful Quote"></app-quote> -->

                <!-- <app-quote>
                    <h1>{{ quoteTitle }}</h1>
                    <p>A Wonderful Quote!</p>
                </app-quote> -->

                <!-- <app-quote>
                    <h1 slot="title">{{ quoteTitle }}</h1>
                    <p slot="content">A Wonderful Quote!</p>
                </app-quote> -->

                <!-- <app-quote>
                    <h1 slot="title">{{ quoteTitle }}</h1>
                    <p>A Wonderful Quote!</p>
                </app-quote> -->
                <button @click="selectedComponent = 'appQuote'">Quote‍</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
‍                
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>The Default Content</p>
                    </component>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent : 'appQuote',
                
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>

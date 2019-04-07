<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <hr>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <hr>
                <button class="btn btn-primary" @click="submit">Sumbit</button>
                <hr>
                <input class="form-control" type="text" v-model="node">
                <br><br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="form-group">
                    <li class="form-control" v-for="u in users" :key="u">{{u.username}}-{{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                username: '',
                email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            };
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                //         .then(response => {
                //             console.log(response);
                //         },error => {
                //                 console.log(error);
                //         });

                // this.resource({}, this.user);

                this.resource.saveAlt(this.user);

            },
            fetchData() {
                // this.$http.get('data.json')
                    // .then(response =>{
                    //     response.json();
                    // })
                    // .then(data => {
                    //     const resultArray = [];
                    //     for(let key in data) {
                    //         resultArray.push(data[key]);
                    //     }                        
                    //     this.users = resultArray;
                    // });
                    this.resource.getData({node: this.node})
                        .then(response =>{
                            response.json();
                        })
                        .then(data => {
                            const resultArray = [];
                            for(let key in data) {
                                resultArray.push(data[key]);
                            }                        
                            this.users = resultArray;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt : {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>

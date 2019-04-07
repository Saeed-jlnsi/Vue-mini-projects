import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-a3537.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    //We overwrite the respon.json below, But don't do it in your App, it will affect all your requests.
    response.json = () => {return {message : response.body}};
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})


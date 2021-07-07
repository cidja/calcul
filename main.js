const App = {
    data(){
        return {
            carburants : ['Gazole','Sans Plomb 95','Sans Plomb 98', 'GPL', 'E85'],
            message: "hello world"
        }
    }
}

Vue.createApp(App).mount('#app')
var app = new Vue ({
    el: "#app",
    data : {
        albumsList: [],
    },
    methods: {
    creaAlbums: function () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((resp) => {
                this.albumsList = resp.data.response;
        })    
    },
}
});
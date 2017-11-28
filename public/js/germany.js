Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Germany!'
    }
});


var addlinks = new Vue({
    el: '#addLinks',
    data: {
        linkList: [
            {
                id: 0,
                link: '/',
                buttonText: 'Go Home'
            },
            {
                id: 1,
                link: '/greece',
                buttonText: 'Back to Greece'
            },
            {
                id: 2,
                link: '/japan',
                buttonText: 'Next Exotic Location'
            },

        ]
    }
})

var greeceImg = new Vue({
    el: '#germany-Img',
    data: {
        url: 'http://www.eurovelo.com/en/eurovelos/eurovelo-6/countries/germany/image2'
    }
})


alert('Welcome to Germany - Grab a beer and have some fun!')

Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Greece!'
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
                link: '/aspen',
                buttonText: 'Back to Aspen'
            },
            {
                id: 2,
                link: '/germany',
                buttonText: 'Next Exotic Location'
            },

        ]
    }
})

var greeceImg = new Vue({
    el: '#greece-Img',
    data: {
        url: 'http://www.greektravel.com/naxos-fantasy.jpg'
    }
})


alert('Welcome to Greece');

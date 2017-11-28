Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Alaska!'
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
                buttonText: 'Next Exotic Location'
            },

        ]
    }
})

var greeceImg = new Vue({
    el: '#alaska-Img',
    data: {
        url: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1491246915/denali-national-park-alaska-AKROUTE0417.jpg?itok=VNS3mYBx'
    }
})

alert('Welcome to Alaska');

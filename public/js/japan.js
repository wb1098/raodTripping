Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Japan!'
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
                link: '/germany',
                buttonText: 'Back to Germany'
            }

        ]
    }
})

var greeceImg = new Vue({
    el: '#japan-Img',
    data: {
        url: 'http://www.telegraph.co.uk/content/dam/Travel/leadAssets/32/84/Temple-Gate-Kyoto-_3284637a-xlarge.jpg'
    }
})


alert('Welcome to Japan - Be sure to enjoy the rising sun!')

Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Aspen Colorado!'
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
                link: '/alaska',
                buttonText: 'Back to Alaska'
            },
            {
                id: 2,
                link: '/greece',
                buttonText: 'Next Exotic Location'
            },

        ]
    }
})

var greeceImg = new Vue({
    el: '#aspen-Img',
    data: {
        url: 'http://www.aspentimes.com/wp-content/uploads/2017/04/mammoth-atd-041317-2-2.jpg'
    }
})


alert('Going to Aspen - Be sure to check in with Hunter S Thompson')

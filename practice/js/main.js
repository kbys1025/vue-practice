Vue.filter('readMore', function(text, length, suffix) {
    return text.substring(0, length) + suffix;
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Helleo Vue.js!',
        basePrice: 100
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        taxIncludedPrice: {
            get: function() {
                return parseInt(this.basePrice * 1.08);
            },
            set: function(taxIncludedPrice) {
                this.basePrice = Math.ceil(taxIncludedPrice / 1.08);
            }
        },
        computedNumber: function() {
            console.log('computed!');
            return Math.random();
        }
    },
    methods: {
        methodsNumber: function() {
            console.log('methods!');
            return Math.random();
        }
    }
})
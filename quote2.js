new Vue({
    el: '#app',
    data: {
        quotes,
        currentQuotes: quotes[0],
        animating: false
            //show: false
    },
    methods: {
        //newQuote is the function to get random quotes
        newQuote: function() {
            const num = Math.floor(Math.random() * quotes.length)
            this.currentQuotes = quotes[num]
                //this.show = !this.show
        }
    },
    updated: function() {
        this.animating = true
        setTimeout(() => {
            this.animating = false
        }, 1000)
    }
})
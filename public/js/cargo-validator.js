console.log('cargo-validator up and running');

var mainVM = new Vue({
    el: '#app',
    beforeCreate() {
        $.get('/cargo', function (dataBack) {
            mainVM.products = dataBack;
        })
    },
    data: {
        products: [],
        overage: null,
        isButtonDisabled: false,
        isRemoveBtnDisabled: false,
        message: ''
    },
    computed: {
        calcTotalPrice: function () {
            var runningTot = null;
            this.products.forEach(function (element) {
                runningTot += element.totalPrice;
            });

            this.overage = runningTot;
            return (runningTot);
        },
        calcTotalWeight: function () {
            var runningTot = null;
            this.products.forEach(function (element) {
                runningTot += element.totalWeight;
            });
            return (runningTot);
        },
        updatedisplay: function () {
            if (this.overage >= 200) {
                this.isButtonDisabled = true;
                return ({
                    updateDisplayFont: true
                });
            } else {
                this.isButtonDisabled = false;
                return ({
                    updateDisplayFont: false
                });
            }

            if (this.overage <= 0) {
                this.isRemoveBtnDisabled = true;
            }
        }
    },

    methods: {
        increaseCount: function (prod) {
            prod.count++;
            prod.totalPrice = prod.count * prod.cost;
            prod.totalWeight = prod.count * prod.weight;
            return (prod);
        },
        decreaseCount: function (prod) {
            if (prod.count > 0) {
                prod.count--;
                prod.totalPrice = prod.count * prod.cost;
                prod.totalWeight = prod.count * prod.weight;
            }
            return (prod);
        },
        validateData: function (products) {
            var productList = {
                parts: products
            }

            $.post('/validate', productList, (dataBack) => {
                if (dataBack.result === 'success') {
                    this.message = 'Success - Enjoy your trip!'
                }
                if (dataBack.result === 'FAILED') {
                    this.message = 'Sorry your cargo is INVALID'
                }

            })
        }

    }

})

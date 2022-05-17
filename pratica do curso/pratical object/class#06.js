// App store - Orientação a Objeto

class MyStore {
    constructor(itemProduct, theAmount) {
        this.itemProduct = itemProduct;
        this.price = 0 || undefined
        this.theAmount = theAmount
        this.category = '';  
    }

    InfoProduct () {
        console.log('__________________________________')
        console.log(`Produto---------: ${this.itemProduct}`); 
        console.log(`Categoria-------: ${this.category}`);
        console.log(`Quantidade------: ${this.theAmount}`);
        console.log(`Preço do produto: R$ ${this.price}`);
    }

    set addPrice(valueProduct) {
        this.price = valueProduct
    }
}

class ProductCategory extends MyStore {
    constructor (itemProduct, theAmount) {
        super(itemProduct, theAmount); 
    }
    set getCategory (optionCategory) {
        if (optionCategory == 1) {
            this.category = "Roupas"

        } else if (optionCategory == 2) {
            this.category = "Calçados"

        } else if (optionCategory = 3) {
            this.category = "Acessórios"
        }
    }
}

class ProductResult extends ProductCategory {
    constructor (itemProduct, theAmount) {
        super(itemProduct, theAmount); 
    }
    TotalPayable () {
        console.log(`TOTAL A PAGAR---: R$ ${this.price * this.theAmount}`); 
    }
}

const product1 = new ProductResult("Nike Jordan", 2)
product1.getCategory = 2
product1.price = 1260.02
product1.InfoProduct()
product1.TotalPayable()

const product2 = new ProductResult("Bobojaco Lacoste", 1)
product2.getCategory = 1
product2.price = 587.22
product2.InfoProduct()
product2.TotalPayable()

const product3 = new ProductResult("Relógio SmartWat", 3)
product3.getCategory = 3
product3.price = 1930.80
product3.InfoProduct()
product3.TotalPayable()
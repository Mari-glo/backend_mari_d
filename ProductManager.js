class ProductManager {
    constructor(){
        this.productos =[]
    }
    static id= 0

    addProductos (title, description, price, img, code, stock) {
        for (let i = 0; i < this.productos.length; i++){
            if (this.productos[i].code === code) {
                console.log(`el código ${code} no se debe repetir`);
                break;
            }
        }
        const nueoProducto = {
            title, description, price, img, code, stock,

        };
        if (!Object.values(nueoProducto).includes(undefined)){
            ProductManager.id++;
            this.productos.push ({ ... nueoProducto, id:ProductManager.id,});

        }else{
            console.log ("se deben ingresar todos los datos")
        }
        
    }

    getProductos (){
        return this.productos;
    }

    validar(id){
        return this.productos.find ((producto) => producto.id === id)
    }

    getProductById (id){
        !this.validar(id) ? console.log("Producto NO encontrado") : console.log(this.validar(id));
        }
    }


const productos = new ProductManager();
console.log (productos.getProductos());

productos.addProductos("producto prueba", "Este es un producto de prueba", 2000, "sin imagen","mari123", 25);
productos.addProductos("producto prueba 2", "Este es un producto de prueba otra vez", 3000, "sin imagen 2","mari1234", 35);

console.log (productos.getProductos());

//prueba con code repetido
productos.addProductos("producto prueba 3", "Este es un producto de prueba que tiene que fallar", 4000, "sin imagen 3","mari123", 45);
//prueba que pasa si faltan datos
productos.addProductos("producto prueba 3", "esta debe fallar porque faltan datos","sin imagen 3", 45);

//busca el producto por "id" correcto
productos.getProductById(2)

//busca el producto por "id" incorrecto
productos.getProductById(9)
       

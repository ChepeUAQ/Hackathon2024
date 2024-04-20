const clientesInput = document.getElementById('clientes_input');


clientesInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const numClientes = parseInt(clientesInput.value); // Obtener el número ingresado como entero
        console.log('Número de clientes:', numClientes);

        const contenido = document.getElementById('contenido');
        contenido.innerHTML = ''; // Limpiar contenido anterior

        function generarTextoAleatorio(longitud) {
            let resultado = '';
            const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
            for (let i = 0; i < longitud; i++) {
                const indice = Math.floor(Math.random() * caracteres.length);
                resultado += caracteres.charAt(indice);
            }
        
            return resultado;
        }

        // Crear y agregar elementos según el número ingresado
        for (let i = 1; i <= numClientes; i++) {
            const contenedorGrande = document.createElement('div');
            contenedorGrande.classList.add('contenedor-grande');

            const contenedor1 = document.createElement('div');
            contenedor1.classList.add('contenedor-divs');
            const cliente = document.createElement('h3');
            cliente.innerText = `Cliente ${i}`;
            contenedor1.appendChild(cliente);
          

            const contenedor2= document.createElement('div')
            contenedor2.classList.add('contenedor-divs');
            const numpedido = document.createElement('h3');
            numpedido.innerText ='No. Pedido: ' + generarTextoAleatorio(10);
            contenedor2.appendChild(numpedido)
            
            const contenedor3= document.createElement('div')
            contenedor3.classList.add('contenedor-divs');
            const nombre = document.createElement('h3');
            nombre.innerText = 'Nombre:';
            const nombreI = document.createElement('input');
            nombreI.setAttribute('type', 'text');
            nombreI.setAttribute('placeholder', 'Ingrese el nombre');
            contenedor3.appendChild(nombre)
            contenedor3.appendChild(nombreI)

            const contenedor4=document.createElement('div')
            contenedor4.classList.add('contenedor-divs');
            const cantidad = document.createElement('h3');
            cantidad.innerText = 'Cantidad de producto:';
            const cantidadI = document.createElement('input');
            cantidadI.setAttribute('type', 'text');
            cantidadI.setAttribute('placeholder', 'Cantidad');
            
            const contenedor5=document.createElement('div')
            contenedor5.classList.add('contenedor-divs');
            const contenedor6=document.createElement('div')
            contenedor6.classList.add('contenedor-divs');
            const codigo = document.createElement('h3');
            codigo.innerText = 'Código de Producto:';
            const codigoI = document.createElement('input');
            codigoI.setAttribute('type', 'text');
            codigoI.setAttribute('placeholder', 'Ingrese el código');
            contenedor6.appendChild(codigo);
            contenedor6.appendChild(codigoI)

            const contenedor7=document.createElement('div')
            contenedor7.classList.add('contenedor-divs');
            const peso = document.createElement('h3');
            peso.innerText = 'Peso:';
            const pesoI = document.createElement('input');
            pesoI.setAttribute('type', 'text');
            pesoI.setAttribute('placeholder', 'Ingrese el peso');
            contenedor7.appendChild(peso);
            contenedor7.appendChild(pesoI);
            contenedor5.appendChild(contenedor6)
            contenedor5.appendChild(contenedor7)

            const contenedor8=document.createElement('div')
            contenedor8.classList.add('contenedor-divs');
            const unidad = document.createElement('h3');
            unidad.innerText = 'Tipo de unidad:';
            const unidadI = document.createElement('input');
            unidadI.setAttribute('type', 'text');
            unidadI.setAttribute('placeholder', 'Ingrese la unidad de transporte');
            contenedor8.appendChild(unidad)
            contenedor8.appendChild(unidadI)

            const contenedor9=document.createElement('div')
            contenedor9.classList.add('contenedor-divs');
            const contenedor10=document.createElement('div')
            contenedor10.classList.add('contenedor-divs');
            const destinatario= document.createElement('h3')
            destinatario.innerText = 'Destinatario:';
            const destinatarioI = document.createElement('input');
            destinatarioI.setAttribute('type', 'text');
            destinatarioI.setAttribute('placeholder', 'Ingrese el nombre del destinatario');
            contenedor10.appendChild(destinatario);
            contenedor10.appendChild(destinatarioI);

            const contenedor11=document.createElement('div')
            contenedor11.classList.add('contenedor-divs');
            const calle=document.createElement('h3')
            calle.innerText = 'Calle:';
            const calleI = document.createElement('input');
            calleI.setAttribute('type', 'text');
            calleI.setAttribute('placeholder', 'Ingrese el nombre de la calle'); 
            contenedor11.appendChild(calle)
            contenedor11.appendChild(calleI)
            contenedor9.appendChild(contenedor10)
            contenedor9.appendChild(contenedor11)
           

            const contenedor12=document.createElement('div')
            contenedor12.classList.add('contenedor-divs');
            const contenedor13=document.createElement('div')
            contenedor13.classList.add('contenedor-divs');
            const num=document.createElement('h3')
            num.innerText = 'Numero:';
            const numI = document.createElement('input');
            numI.setAttribute('type', 'text');
            numI.setAttribute('placeholder', 'Ingrese el numero de edifico');
            contenedor13.appendChild(num)
            contenedor13.appendChild(numI)

            const contenedor14=document.createElement('div')
            contenedor14.classList.add('contenedor-divs');
            const colonia=document.createElement('h3')
            colonia.innerText = 'Colonia:';
            const coloniaI = document.createElement('input');
            coloniaI.setAttribute('type', 'text');
            coloniaI.setAttribute('placeholder', 'Ingrese el nombre de la colonia');
            contenedor14.appendChild(colonia)
            contenedor14.appendChild(coloniaI)

            const contenedor15=document.createElement('div')
            contenedor15.classList.add('contenedor-divs');
            const cp=document.createElement('h3')
            cp.innerText = 'Codigo Postal:';
            const cpI = document.createElement('input');
            cpI.setAttribute('type', 'text');
            cpI.setAttribute('placeholder', 'Ingrese el código postal');
            contenedor15.appendChild(cp)
            contenedor15.appendChild(cpI)
            contenedor12.appendChild(contenedor13)
            contenedor12.appendChild(contenedor14)
            contenedor12.appendChild(contenedor15)

            const contenedor16=document.createElement('div')
            contenedor16.classList.add('contenedor-divs');
            const contenedor17=document.createElement('div')
            contenedor17.classList.add('contenedor-divs');
            const municipio=document.createElement('h3')
            municipio.innerText = 'Municipio:';
            const municipioI = document.createElement('input');
            municipioI.setAttribute('type', 'text');
            municipioI.setAttribute('placeholder', 'Ingrese el municipio');
            contenedor17.appendChild(municipio) 
            contenedor17.appendChild(municipioI)

            const contenedor18=document.createElement('div')
            contenedor18.classList.add('contenedor-divs');
            const estado=document.createElement('h3')
            estado.innerText = 'Estado:';
            const estadoI = document.createElement('input');
            estadoI.setAttribute('type', 'text');
            estadoI.setAttribute('placeholder', 'Ingrese el estado');
            contenedor18.appendChild(estado)
            contenedor18.appendChild(estadoI)
            contenedor16.appendChild(contenedor17)
            contenedor16.appendChild(contenedor18)

            

            contenedorGrande.appendChild(contenedor1);
            contenedorGrande.appendChild(contenedor2);
            contenedorGrande.appendChild(contenedor3)
            contenedorGrande.appendChild(contenedor4)
            contenedorGrande.appendChild(contenedor5)
            contenedorGrande.appendChild(contenedor8)
            contenedorGrande.appendChild(contenedor9)
            contenedorGrande.appendChild(contenedor12)
            contenedorGrande.appendChild(contenedor16)
            

            contenido.appendChild(contenedorGrande);
            
        }
        const boton =document.createElement('button')
        boton.innerText = 'Generar factura';
        body.appendChild(boton);
    }
});

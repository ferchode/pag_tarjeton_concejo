const body = document.querySelector('body')
const cuerpo = document.querySelector('.contenedor');
const tarjeta_celebracion = document.querySelector('#filtro_tarjeta');
const tarjeta_incorrecta = document.querySelector('#filtro_tarjeta_incorrecta');


let seleccion_partido = false

function generar_tarjeton(lista_tarjetones){
    
    lista_tarjetones.forEach(tarjeton => {
        
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeton');

        const nombre = document.createElement('p');
        nombre.textContent = `${tarjeton.nombre_partido}`;
        nombre.classList.add('nombre_partido');

        const img = document.createElement('img');
        img.src = `${tarjeton.logo}`;
        img.setAttribute('id', `${tarjeton.nombre_partido}`);
        img.classList.add('logo-img');

// Accion para seleccionar partido politico

        if (tarjeton.nombre_partido == 'PARTIDO POLÍTICO CREEMOS') {

            img.addEventListener('click', (event) => {
                
                seleccion_partido = true
                img.src = 'imgs/logos-partidos/creemos_marcado.png'
                
                const cont = document.createElement('div');
                cont.classList.add('cont_popup')
                cont.style.display = "grid";

                setTimeout(() => {
                    cont.style.display = "none"

                }, 3000);
                
                const icon = document.createElement('img');
                icon.classList.add('icon_popup')
                icon.src = 'imgs/fireworks.png'
                
                const text = document.createElement('p');
                text.classList.add('text_popup')
                text.textContent = '¡Vas por un excelente camino!'

                cont.append( icon, text);
                body.append(cont)
            })
            
        } else {
            
            img.addEventListener('click', (event) => {
                
                const cont = document.createElement('div');
                cont.classList.add('cont_popup')
                cont.style.display = "grid";

                setTimeout(() => {
                    cont.style.display = "none"

                }, 3000);
                
                const icon = document.createElement('img');
                icon.classList.add('icon_popup')
                icon.src = 'imgs/sad-face.png'
                
                const text = document.createElement('p');
                text.classList.add('text_popup')
                text.textContent = 'Este no es el camino correcto para votar por Sara Restrepo'

                cont.append( icon, text);
                body.append(cont)
            })
        }

        const tipo = document.createElement('p');
        tipo.textContent = `${tarjeton.tipo}`;
        tipo.classList.add('tipo-partido');

        const container_opciones = document.createElement('div');
        container_opciones.classList.add('opciones_cont');

// Generador de opciones del tarjeton   
        let lista = []
        for (let i = 0; i < tarjeton.opciones; i++) {
            lista.push(i+1)
        }

        lista.forEach(num => {
            const opcion = document.createElement('div');
            opcion.textContent = num.toString();
            opcion.classList.add('num_opcion')

            opcion.addEventListener('click', () => {

                if (seleccion_partido == !true){
                    const cont = document.createElement('div');
                    cont.classList.add('cont_popup')
                    cont.style.display = "grid";
    
                    setTimeout(() => {
                        cont.style.display = "none"
    
                    }, 3000);
                    
                    const icon = document.createElement('img');
                    icon.classList.add('icon_popup')
                    icon.src = 'imgs/thinking.png'
                    
                    const text = document.createElement('p');
                    text.classList.add('text_popup')
                    text.textContent = 'Debes seleccionar primero un partido'
    
                    cont.append( icon, text);
                    body.append(cont)
                }
                else if(tarjeton.nombre_partido == 'PARTIDO POLÍTICO CREEMOS' && num == 4){
                    tarjeta_celebracion.classList.toggle('inactivo');
                }
                else{
                    tarjeta_incorrecta.classList.toggle('inactivo');
                }
            })

            container_opciones.append(opcion)
        });

        tarjeta.append(nombre, img, container_opciones, tipo);
        cuerpo.append(tarjeta);
        
    });
}

generar_tarjeton(tarjetones);


const cerrar_icono = document.querySelector('.cerrar_icono');
cerrar_icono.addEventListener('click', () => {
    tarjeta_celebracion.classList.toggle('inactivo');
})

const cerrar_icono_incorrecto = document.querySelector('#icono_cerrar_incorrecto');
cerrar_icono_incorrecto.addEventListener('click', () => {
    tarjeta_incorrecta.classList.toggle('inactivo');
})
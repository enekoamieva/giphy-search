import { useState, useEffect, useRef } from 'react';


//Pasamos como parámetros la distancia para empezar a cargar. Por defecto si no recibe, la ponemos a 100p
function LazyLoadComponent({ rootMargin } = { rootMargin: '100px' }) {

    //USE REF
    const elementRef = useRef();

    //STATE
    const [show, setShow] = useState(false);

    //USE EFFECT
    useEffect(() => {

        const onChange = (entries, observer) => {
            //console.log(entries);
            const elemento = entries[0];
            //console.log(elemento.isIntersecting);
            if (elemento.isIntersecting) {
                setShow(true);
                //Una vez se ha hecho la interseccion para cargar los componentes lazy, desconectamos
                observer.disconnect();
            }
        }

        const observer = new IntersectionObserver(onChange, {
            //Distancia a la cual comenzará a mostrar el contenido cuando nos acercecemos
            //Por defecto lo hemos establecido en 100px en los parámetros
            rootMargin
        });

        //Observamos el DIV que apunta a la referencia creada
        observer.observe(elementRef.current);

        //Desconectamos del todo el elemento una vez se haya cargado para evitar problemas
        return () => observer.disconnect();

    }, [])

    return ({ show, elementRef })
}

export default LazyLoadComponent;
import React from 'react';

const ConceptosScreen = () => {
    return (
        <div className="container">
            {/* TODO: navbar / tabs */}
            <h3>Conceptos</h3>
            <hr />

            {/* TODO: agregar como subtitulo */}
            <h4>Árboles binarios - Árbol de decisiones</h4>

            <ul>
                <li>
                    Nodo.
                    <p>Cada elemento del árbol.</p>
                </li>
                <li>
                    Nodo hijo.
                    <p>Cualquier nodo apuntado por otro nodo del árbol.</p>
                </li>
                <li>
                    Nodo padre.
                    <p>Nodo que apunta a nodos hijo</p>
                </li>
                <li>
                    Nodo raíz.
                    <p>Nodo que no tiene padre.</p>
                </li>
                <li>
                    Nodo hoja.
                    <p>Nodo que no tiene hijos.</p>
                </li>
                <li>
                    Orden.
                    <p>Número potencial de hijos que puede tener cada elemento.</p>
                </li>
                <li>
                    Grado.
                    <p>Número de hijos que contiene el elemento con más hijos.</p>
                </li>
                <li>
                    Nivel.
                    <p>Distancia desde la raíz a sus elementos. Raíz -> 0.</p>
                </li>
                <li>
                    Altura.
                    <p>Mayor nivel del árbol.</p>
                </li>
            </ul>
        </div>
    );
}

export default ConceptosScreen;
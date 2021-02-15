import React from 'react';
import binary_tree from '../assets/binary_tree.jpg';

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const RecorridosScreen = () => {

    const tree = new TreeNode(
        4,
        new TreeNode(
            2,
            new TreeNode(1),
            new TreeNode(3)
        ),
        new TreeNode(7)
    );

    console.log('tree', tree);

    return (
        <div className="container">
            <h3>Recorridos</h3>

            <div className="row">
                <div className="col-sm">
                    <img className="img-fluid" src={binary_tree} alt="binary_tree" />
                </div>
                <div className="col-sm">
                    <ul>
                        <li>
                            Preorden: raíz, izquierda, derecha.
                            <p>4, 2, 1, 3, 7</p>
                        </li>
                        <li>
                            Inorden: izquierda, raíz, derecha.
                            <p>1, 2, 3, 4, 7</p>
                        </li>
                        <li>
                            Postorden: izquierda, derecha, raíz.
                            <p>1, 3, 2, 7, 4</p>
                        </li>
                        <li>
                            {JSON.stringify(tree)}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default RecorridosScreen;
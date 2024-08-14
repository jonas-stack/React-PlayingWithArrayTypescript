import React, { useEffect, useState } from 'react';
import { MyModel } from './MyModel';

const App: React.FC = () => {
    const [myArray, setMyArray] = useState<number[]>([]);

    const myFunction = (): MyModel => {
        const myObject: MyModel = {
            myProperty: "value"
        };
        return myObject;
    };

    const logArrayElements = () => {
        const array = [1, 2, 3, 4, 5];

        // Iterate
        array.forEach(element => {
            console.log(element);
        });

        // Replace an element (replace 3 with 30)
        const indexToReplace = array.indexOf(3);
        if (indexToReplace !== -1) {
            array[indexToReplace] = 30;
        }

        // Add an element (add 6)
        array.push(6);

        // Remove last element
        array.pop();

        // Find an element (find 4)
        const foundElement = array.find(element => element === 4);
        console.log(foundElement);

        // Remove a specific item (remove 2)
        const itemToRemove = 2;
        const filteredArray = array.filter(element => element !== itemToRemove);

        console.log(array);
        console.log(filteredArray);

        setMyArray(array);
    }

    useEffect(() => {
        logArrayElements();
    }, []);

    return (
        <div>
            <h1>Hello, React with TypeScript!</h1>
            <h2>myArray</h2>
            <ul>
                {myArray.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
            <p>{myFunction().myProperty}</p>
        </div>
    );
};

export default App;
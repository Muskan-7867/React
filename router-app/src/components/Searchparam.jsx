import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Searchparam = () => {
    const [searchParams] = useSearchParams();
    const age = searchParams.get('age');
    const city = searchParams.get('city');

    return (
        <div>
            <h1>My age is:{age}</h1>
            <h1>My city is :{city}</h1>
        </div>
    );
};

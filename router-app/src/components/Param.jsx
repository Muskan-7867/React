import { useParams } from 'react-router-dom';

export const Param = () => {
    const params = useParams();
    const{name} = params;


    return (
        <div>
            <h1>This is {name} page</h1>
        </div>
    );
};

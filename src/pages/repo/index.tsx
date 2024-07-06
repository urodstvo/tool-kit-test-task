import { useParams } from 'react-router-dom';

export default function Repo() {
    const { id } = useParams();
    return <div>{id}</div>;
}

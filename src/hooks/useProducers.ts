import { useState, useEffect } from "react";
import { loadProducers } from "../service/loadData";

export default function useProducers() {

    const [title, setTitle] = useState('');
    const [producersList, setProducersList] = useState<Producer[]>([]);

    useEffect ( () => {
        const result = loadProducers();
        console.log(result);
        setTitle(result.title);
        setProducersList(result.list);
    }, []);

    return [title, producersList];
}
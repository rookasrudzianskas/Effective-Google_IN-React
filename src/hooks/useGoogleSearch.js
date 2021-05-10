import React, {useEffect, useState} from 'react';
import API_KEY from "../keys";

// it tells google which search engine to use
const CONTEXT_KEY = "41d3eac0d47fdca20";

const useGoogleSearch = (term) => {
    // custom hook
    // this hook is going to have it is own piece of state to store the data
    const [data, setData] = useState();

    useEffect(() => {
        // we pass the term, and then the term changes, we fire this code

    }, [term])
};

export default useGoogleSearch;

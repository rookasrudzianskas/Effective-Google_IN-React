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
        const fetchData = async() => {
            // this is endpoint, which connects to the Google search API
            // then we get the response, we make the json from it
            // and setting that json to the useGoogleSearch hook state, to the json object
            // we set the data to the result, which is the Json object the response
            await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then(response => response.json()).then(result => {
                setData(result)
            })
        }
        // and we fire the fetchData
        fetchData();

    }, [term])
    // returning the data object
    return { data }
};

export default useGoogleSearch;

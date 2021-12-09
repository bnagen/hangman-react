import React from 'react'
import axios from 'axios'

const FetchData = async () => {
    const result = await axios('https://random-word-api.herokuapp.com/word?number=1');

    return result.data;
}
export default FetchData

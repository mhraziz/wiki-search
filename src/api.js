import axios from "axios";
//axios concept instead of fetch
//
 const Search= async(searchTerm)=>{
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srsearch=${searchTerm}`;

    const response=await axios.get(url);
    const results=await response.data
    return results.query.search;
};

// const Search= async(searchTerm)=>{
//     const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srsearch=${searchTerm}`;

//     const response=await fetch(url);
//     const results=await response.json();
//     return results.query.search;
// };

export default Search;


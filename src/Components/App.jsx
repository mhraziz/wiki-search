import { useState } from "react";
import Search from '../api';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList';
//import './App.css';
//import logo from './wikipedia-logo.png';


const App=()=>{
    const [articles,setArticles]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const handleSearch = async (searchTerm) => {
        setIsLoading(true);
        try{
        const results = await Search(searchTerm);
        setArticles(results);
        }catch(err){
            setError("Something went wrong ,try again");
        }finally{
            setIsLoading(false);
        }
      };

      return(
        <>
        <header>
            {/* <img src={logo} alt="wikipedia"/> */}
            <h1>Wikipedia Search</h1>
            <SearchBar onSearch={handleSearch}/>
        </header>

        <main id="searchResult">
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
            <ArticleList articles={articles}/>
        </main>
        </>
      );
};

export default App;


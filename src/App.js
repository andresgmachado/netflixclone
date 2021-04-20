import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [FeatureData, setFeaturedata] = useState(null);
  useEffect(()=>{
      const LoadAll = async() =>{
        //Pegando a lista TOTAL
        let list = await Tmdb.getHomeList();
        setMovieList(list);
       // console.log(list);

        // pegando Feature
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        //console.log(chosen);
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        console.log(chosenInfo);
        setFeaturedata(chosenInfo);
      }

      LoadAll();
  }, []);

  return(
    <div className="page">
      <header></header>

    {FeatureData &&
    <FeatureMovie item={FeatureData} />
    }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
        </section>
    </div>
  );
}
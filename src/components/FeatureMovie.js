import React from 'react';
import './FeatureMovie.css';

export default ({item}) =>{
    return (
        <section className="featured" style={{
            background: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{item.first_air_date} Lançamento</div>
                        <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's': ''}</div>
                    </div>
                </div>
            </div>

        </section>
    );

}
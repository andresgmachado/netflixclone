const API_KEY = '8b2e3d6fe125e581fc7671795943e1ce';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados trending
- em alta
- ação
- comédia
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {



    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                //https://api.themoviedb.org/3/tv/213?api_key=8b2e3d6fe125e581fc7671795943e1ce&language=pt-BR
              // items: await basicFetch(`/tv/213?api_key=8b2e3d6fe125e581fc7671795943e1ce&language=en-US`)
               items: await basicFetch(`/discover/tv?api_key=${API_KEY}&language=pt-br`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/discover/movie/?api_key=${API_KEY}&language=pt-br`)
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-br`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-br`)
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-br`)
            },
            {
                slug: 'Science Fiction',
                title: 'Ficção Cientifica',
                items: await basicFetch(`/discover/movie?with_genres=878&api_key=${API_KEY}&language=pt-br`)
            },
            {
                slug: 'Music',
                title: 'Musical',
                items: await basicFetch(`/discover/movie?with_genres=10402&api_key=${API_KEY}&language=pt-br`)
            },


        ];
    },
    getMovieInfo: async (movieId, type) =>{
            let info = {};

            if(movieId){
                switch(type){
                   case 'movie':
                       info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
                       break;
                    case 'tv':
                        info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
                        break ;
                }
            }
            return info;
    }

}
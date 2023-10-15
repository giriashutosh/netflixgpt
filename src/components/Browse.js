import { useSelector } from 'react-redux'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useUpcomingMovies } from '../hooks/useUpcomingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GPTSearchPage from './GPTSearchPage'

const Browse = () => {
  const showGptPage = useSelector(store => store.gptsearch.showGPTSuggestions)
  console.log(showGptPage)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (

    <div>
      <Header />
      {showGptPage ? <GPTSearchPage /> : <><MainContainer />
        <SecondaryContainer /></>}

    </div>
  )
}

export default Browse
import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
  }
  getGenres() {
    axios.get('http://127.0.0.1:3000/genres')
    .then((result)=>{
      //this.genres = result.data.genres;
      this.setState({genres : result.data.genres});
    })
    .catch((err)=>{console.log(err)});
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  console.log(this.genres);
  //this.render();
  }


  render() {
    this.getGenres();
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
        
        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select id='genresList'>
          {/*<option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option>
          <option value="myway">My Way</option>*/}
          {this.state.genres.map(function(style){return <option>{style.name}</option>})}
        </select>
        <script></script>
        <br/><br/>

        <button onClick={()=>{this.getGenres()}}>Search</button>

      </div>
    );
  }
}

export default Search;
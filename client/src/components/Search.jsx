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
      this.genres = result.data.genres;
    })
    .catch((err)=>{console.log(err)});
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  console.log(this.genres);
  this.render();
  }


  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
        
        <div>sdlfhdjasjjjjjjfhasdlskadbvljdsfhisaufhlsdkjfl</div>
        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select id='genresList'>
          <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option>
          <option value="myway">My Way</option>
        </select>
          <div>ss{this.genres}aa</div>
        <script></script>
        <br/><br/>

        <button onClick={()=>{this.getGenres()}}>___</button>

      </div>
    );
  }
}

export default Search;
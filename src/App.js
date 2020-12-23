import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="app">      
      {/* Header */}
       <div className="app__header"> {/*following BEM naming convention */}
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""/>
      </div>

      <Post imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
      caption="#GGMU Manchester_United_FC_crest "/>
      <Post imageUrl="" caption=""/>
      <Post />
      {/* posts */}
      {/* posts */}
    </div>
  );
}

export default App;

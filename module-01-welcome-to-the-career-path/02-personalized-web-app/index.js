const { useState, useEffect, useRef } = React;
const clientID = "CLIENT_ID";
const utm = "UTM";
var API_KEY = "API_KEY";

const loadData = (options) => {
  fetch(options.url)
    .then(function(response){
      return response.json()
    })
    .then(function(data){ 
      if (options.onSuccess) options.onSuccess(data)
    })
}

const App = (props) => {
  let [photos, setPhotos] = useState([]);
  
  // CHALLENGE:
  // Change the query to one of your interests
  let [query, setQuery] = useState("vampire");
  const queryInput = useRef(null);

  const numberOfPhotos = 20;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;

    loadData({
      url: photosUrl,
      onSuccess: res => {
        setPhotos(res);
      }
    });
  }, [query, url]);

  const searchPhotos = e => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };
  
  return (
    <div className="box">
      <h2>{props.emoji}</h2>
      <h1>{props.name}'s website</h1>
      <div className="grid">
      { query ?
          photos.map(photo => {
          return (
            <div key={photo.id} className="item">
              <img
                className="img"
                src={photo.urls.regular}
              />
              <div className="caption">
                <span className="credits">Photo by 
                  <a href={photo.user.links.html + utm}>   {photo.user.name} 
                  </a>
                  <span> on </span> 
                  <a href={"https://unsplash.com" + utm}>
                    Unsplash
                  </a>
                </span>
              </div>
            </div>
            );
        }) : ""}
      </div>
    </div>
  );
};

// CHALLENGE: add your own name and emoji to the website
ReactDOM.render(<App name="Klaos" emoji="🧛‍♂️"/>, document.getElementById("root"));

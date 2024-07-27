import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [showModel, setShowModel] = useState(false);
  const [responseData, setResponseData] = useState();

  function modelToggle() {
    setShowModel(!showModel);
  }

  useEffect(() => {
    async function fetchData() {
      const NasaKey = import.meta.env.VITE_NASA_API_KEY;
      URL = `https://api.nasa.gov/planetary/apod?api_key=${NasaKey}`;

      const today = (new Date()).toDateString()
      const localKey = `nasaData-${today}`
      if (localStorage.getItem(localKey)) {
        setResponseData(JSON.parse(localStorage.getItem(localKey)));
        console.log("data from local storage");
        return
      }
      localStorage.clear()

      try {
        const response = await fetch(URL);
        const data = await response.json();
        localStorage.setItem(localKey, JSON.stringify(data));
        setResponseData(data);
        console.log("data from API"); // Check the console to see the data
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    console.log("fetching data");
  }, []);

  return (
    <>
      {responseData ? (<Main responseData={responseData} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && (
        <SideBar responseData={responseData} modelToggle={modelToggle} />
      )}
      {responseData && (
        <Footer responseData={responseData} modelToggle={modelToggle} />
      )}
    </>
  );
}

export default App;

// {
//   "date": "2024-07-15",
//   "explanation": "Why does this galaxy have such a long tail?  In this stunning vista, based on image data from the Hubble Legacy Archive, distant galaxies form a dramatic backdrop for disrupted spiral galaxy Arp 188, the Tadpole Galaxy. The cosmic tadpole is a mere 420 million light-years distant toward the northern constellation of the Dragon (Draco). Its eye-catching tail is about 280 thousand light-years long and features massive, bright blue star clusters. One story goes that a more compact intruder galaxy crossed in front of Arp 188 - from right to left in this view - and was slung around behind the Tadpole by their gravitational attraction. During the close encounter, tidal forces drew out the spiral galaxy's stars, gas, and dust forming the spectacular tail. The intruder galaxy itself, estimated to lie about 300 thousand light-years behind the Tadpole, can be seen through foreground spiral arms at the upper right. Following its terrestrial namesake, the Tadpole Galaxy will likely lose its tail as it grows older, the tail's star clusters forming smaller satellites of the large spiral galaxy.   APOD in world languages: Arabic (IG), Bulgarian, Catalan, Chinese (Beijing), Chinese (Taiwan), Czech, Dutch, Farsi, French, German, Hebrew, Japanese, Portuguese, Russian, Serbian, Slovenian,  Spanish, Taiwanese, Turkish, and  Ukrainian",
//   "hdurl": "https://apod.nasa.gov/apod/image/2407/TadpoleGalaxy_HubblePathak_3751.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "The Tadpole Galaxy from Hubble",
//   "url": "https://apod.nasa.gov/apod/image/2407/TadpoleGalaxy_HubblePathak_960.jpg"
// }

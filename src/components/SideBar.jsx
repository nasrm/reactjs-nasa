export default function SideBar(props) {
    const { modelToggle, responseData } = props

  return (
    <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>
                {responseData.title}
            </h2>
            <div className="descriptionContainer">
                    <p className="descriptionTitle">{responseData?.date}</p>
                    <p>{responseData?.explanation}</p>
                </div>
            <button onClick={() => modelToggle()}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}


// {
//   "date": "2024-07-15",
//   "explanation": "Why does this galaxy have such a long tail?  In this stunning vista, based on image data from the Hubble Legacy Archive, distant galaxies form a dramatic backdrop for disrupted spiral galaxy Arp 188, the Tadpole Galaxy. The cosmic tadpole is a mere 420 million light-years distant toward the northern constellation of the Dragon (Draco). Its eye-catching tail is about 280 thousand light-years long and features massive, bright blue star clusters. One story goes that a more compact intruder galaxy crossed in front of Arp 188 - from right to left in this view - and was slung around behind the Tadpole by their gravitational attraction. During the close encounter, tidal forces drew out the spiral galaxy's stars, gas, and dust forming the spectacular tail. The intruder galaxy itself, estimated to lie about 300 thousand light-years behind the Tadpole, can be seen through foreground spiral arms at the upper right. Following its terrestrial namesake, the Tadpole Galaxy will likely lose its tail as it grows older, the tail's star clusters forming smaller satellites of the large spiral galaxy.   APOD in world languages: Arabic (IG), Bulgarian, Catalan, Chinese (Beijing), Chinese (Taiwan), Czech, Dutch, Farsi, French, German, Hebrew, Japanese, Portuguese, Russian, Serbian, Slovenian,  Spanish, Taiwanese, Turkish, and  Ukrainian",
//   "hdurl": "https://apod.nasa.gov/apod/image/2407/TadpoleGalaxy_HubblePathak_3751.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "The Tadpole Galaxy from Hubble",
//   "url": "https://apod.nasa.gov/apod/image/2407/TadpoleGalaxy_HubblePathak_960.jpg"
// }


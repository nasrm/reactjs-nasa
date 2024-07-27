export default function Main(props) {
    const { responseData } = props
    return (
        <div className="imgContainer">
            <img src={responseData.hdurl} alt={responseData.title || 'bg-img'} className="bgImage" />
        </div>
    )
}

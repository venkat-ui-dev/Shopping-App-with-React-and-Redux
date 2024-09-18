import loaderImage from '../../assets/loader.svg';
import './Spinner.css'

export const Spinner = () => {
    return (
        <div id="loaderContainer">
            <img className="loader" src={loaderImage} />
        </div>
    )
}

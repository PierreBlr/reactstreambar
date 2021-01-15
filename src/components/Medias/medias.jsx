import './medias.css';

const Medias = ({icon, color, title, name, desc}) => (

        <div className="medias" style={{backgroundColor:color}}>
            <div className="medias-icon">
                <img src={icon} alt="ytb"/></div>
            <div className="medias-text">
                <div>
                    {title} <span>{name}</span>
                </div>
                <div className="social-desc">{desc}</div>
            </div> 
        </div>
    )
export default Medias;
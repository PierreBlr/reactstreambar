import './streambar.css' ;

const Streambar = ({nickname, viewerCount, children}) =>
(
    <div className="streambar">
      <div className="pseudo">{nickname}</div>
        <div>Viewers : {viewerCount}</div>
      {children}
    </div>
    
);


export default Streambar;
var btnText = 'Bouton';
var boxText = 'du texte, blablabla etc ☺';

ReactDOM.render(
    <div className="box">
        <div>
            <a href="#" className="button">{btnText}</a>
            <div>{boxText}</div>
        </div>
    </div>,
    document.getElementById('container')
);


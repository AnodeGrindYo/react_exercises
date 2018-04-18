var ChildComponent = React.createClass({
    render: function() {
        return (
            <div>
                <div className="prompt">Add a click handler</div>
                <button onClick={this.props.onMagicClick}>Do magic!</button>
            </div>
        );
    }
});

var ParentComponent = React.createClass({
    performMagic: function(){
        alert('HEY!!!');
    },
    
    render: function(){
        return (
            <div>
                <ChildComponent onMagicClick={this.performMagic} />
            </div>
        );
    }
});

ReactDOM.render(
    <ParentComponent />,
    document.getElementById('container')
);
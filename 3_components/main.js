var VacancySign = React.createClass({
    render: function() {
        var text;
        if (this.props.hasvacancy) {
            text = 'Vacancy';
        } else{
            text = 'No Vacancy';
        }
        return (
            <div>{text}</div>
        );
    }
});

ReactDOM.render (
    <div>
        <VacancySign hasVacancy={false} />
    </div>,
    document.getElementById('container')
);
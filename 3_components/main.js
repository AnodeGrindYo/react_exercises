var VacancySign = React.createClass({
    render: function() {
        var text;
        if (this.props.hasvacancy) {
            text = 'Vacancy';
        } else{
            text = 'No Vacancy';
        }
        return <div>{text}</div>;
    }
});

ReactDOM.render (
        <VacancySign hasVacancy={false} />,
    document.getElementById('container')
);
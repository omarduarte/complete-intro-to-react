var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render() {
		return (
			div(null, 
				h1({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstcomponent = (
	div(null,
		MyTitleFact({title: 'Props are this best', color: 'rebeccapurple'}),
		React.createElement(MyTitle, {title: 'use props everywhere!', color: 'mediumaquamarine'}),
		ce(MyTitle, {title: 'Yo yo props in the house', color: 'peru'})
	)
)

ReactDOM.render(MyFirstcomponent, document.getElementById('app'))
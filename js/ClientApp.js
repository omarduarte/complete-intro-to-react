var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render() {
		return (
			div(null, 
				h1(null, 'Check out this other thing')
			)
		)
	}
})

var MyFirstcomponent = (
	div(null,
		React.createElement(MyTitle, null)
	)
)

ReactDOM.render(MyFirstcomponent, document.getElementById('app'))
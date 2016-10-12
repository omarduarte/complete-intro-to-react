var div = React.DOM.div
var h1 = React.DOM.h1

var MyFirstcomponent = (
	div(null,
		h1(null, 'This is a component')
	)
)

ReactDOM.render(MyFirstcomponent, document.getElementById('app'))
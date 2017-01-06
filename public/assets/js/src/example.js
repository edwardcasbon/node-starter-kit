const React = require("react");
const ReactDOM = require("react-dom");

const App = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
});

ReactDOM.render(
    <App content="Blah" />,
    document.getElementById("app")
);

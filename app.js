const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "c1"},
            [
                React.createElement(
                    "h1",
                    {id: "c1h1"},
                    "H1 under child1",
                ),
                React.createElement(
                    "h2",
                    {id: "c1h2"},
                    "H2 under child1",
                ),
                
            ],
        ),
        React.createElement(
            "div",
            {id: "c2"},
            [
            React.createElement(
                "h1",
                {id: "c2h1"},
                "H1 under child2",
            ),
            React.createElement(
                "h2",
                {id: "c2h2"},
                "H2 under child2",
            ),

            ]
        ),
    ],
);

console.log(parent);

const shurokaro = ReactDOM.createRoot(document.getElementById("root"));

shurokaro.render(parent);
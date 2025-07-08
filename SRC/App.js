import React from 'react';


class MyStyling extends React.Component {

    render() {

        const myheaderstyle = {

            color: "green",

            backgroundColor: "skyblue",

            fontFamily: "Arial",

            padding: "5px"

        };

        const mystyle = {

            color: "blue",

            backgroundColor: "pink",

            fontFamily: "Times New Roman",

            padding: "10px"

        };

        return (

            <div>

                <h1 style={myheaderstyle}>Hi</h1>

                <p style={mystyle}>How are you</p>

            </div>

        );

    }

}

export default MyStyling;
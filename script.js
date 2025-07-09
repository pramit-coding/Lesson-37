class MyStyling extends React.Component {
    render() {
        const mytitlestyle = {
            color: "light-blue",
            fontFamily:"Aptos",
           padding: "15px"
        }
        const myheaderstyle = {
            color: "blue",
            backgroundColor: "skyblue",
            fontFamily: "Arial",
            padding: "5px"
        };
        const mybodystyle = {
            color: "blue",
            backgroundColor: "light-grey",
            fontFamily: "Times New Roman",
            padding: "10px"

        };

        return (
            <div>
                <h1 style={mytitlestyle}><b> Resume </b></h1>
                <h4 style={myheaderstyle}>Hi I am Pramit</h4>
                <p style={mybodystyle}>I am 14 years old</p>
            </div>
        );
    }
}

export default MyStyling;
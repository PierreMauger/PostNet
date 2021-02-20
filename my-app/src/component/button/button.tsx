import React from "react"

class Button extends React.Component {
    handleClick() {
        console.log('this vault :', this);
    }
    render() {
        return (
            <button onClick={() => this.handleClick()}>
                Clique ici
            </button>
        );
    }
}
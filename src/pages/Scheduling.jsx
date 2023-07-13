import React, { Component } from "react";
import PaginaInicial from "../Components/PaginaInicial";
import { InlineWidget } from "react-calendly";

export default class Scheduling extends Component {
    render() {
        return (
            <div>
                <PaginaInicial />
                <h1>Agendamento</h1>

                <InlineWidget
                    url = "https://calendly.com/veronicaterapeuta/60min"
                    styles = {{
                        height: "1000px"
                    }}
                />
            </div>
        );
    }
}
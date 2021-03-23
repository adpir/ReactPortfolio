/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import data from "../data.json";

class Portfolio extends Component {
    state = {
        data
    };

    render() {
        return (
            <Wrapper>
                <Title>Projects</Title>
                {this.state.data.map(name => (
                    <PortfolioCard
                        projects={name.projects}
                        images={name.images}
                        team={name.team}
                        description={name.description}
                        deployment={name.deployment}
                    />
                ))}

            </Wrapper>

        );
    }
}
export default Portfolio;















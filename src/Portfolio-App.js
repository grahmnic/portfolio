import React, { Component } from 'react';
import Banner from './components-portfolio/banner/banner.js';
import Project from './components-portfolio/project/project.js';
import Header from './components-portfolio/header/header.js';
import Footer from './components-portfolio/footer/footer.js';
import Tree from './components-portfolio/tree/tree.js';
import Summary from './components-portfolio/summary/summary.js';
import './Portfolio-App.css';

class PortfolioApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderProjects: true
    }
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.setState({
      renderProjects: true
    });
  }

  render() {
    return (
      <div className="pApp">
        
        <Header />
        <Tree />
        <Summary />
        {this.state.renderProjects ? <div className="pApp-projects">
          <div id="pprojects" className="pApp-projects-banner">
            Projects
          </div>
          <hr className="pprojects-divider"></hr>
          <Project title="playground.io" description="An experimental environment for learning React." status="WIP" image='react-playground' link='http://www.playground.nickschen.com' exp="react"/>
          <Project title="resume.io" description="My updated resume since January '18" status="DONE" image='resume' exp="word" link='resume'/>
          <Project title="home_inspection.io" description="This is a site developed using wordpress for a home inspection startup." status="DONE" image='homeinspection' exp="wordpress" link='http://www.bestnjhomeinspections.com'/>
          <Project title="OTPS.io" description="A redesign of the old budgeting system used by the Bureau of Wastewater Treatment. This project was completed during my BWT-OIT Summer Internship at DEP." status="DONE" image="" exp="angular,netcore,sql,scrum" />
          <Project title="lasso.io" description="An attempt on designing a community based social media site using React and Semantic-UI." status="WIP" image="lasso" exp="react,semantic-ui"/>
          <Project title="lolesports.io" description="A CRUD application based on lolesports.com created for the CSE 305 (Database Management) final project assignment." status="WIP" image="league" exp="angular,netcore,sql" status="DONE" link='https://lolesportsdb.azurewebsites.net'/>
          <Footer />
        </div> : null}
      </div>
    );
  }
}

export default PortfolioApp;

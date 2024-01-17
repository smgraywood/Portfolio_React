import HeaderImg from "../../Components/HeaderImg/HeaderImg";
import bash from "../../Images/skill_svg/bash-original.svg";
import bootstrap from "../../Images/skill_svg/bootstrap-plain.svg";
import canva from "../../Images/skill_svg/canva-original.svg";
import codepen from "../../Images/skill_svg/codepen-plain.svg";
import css3 from "../../Images/skill_svg/css3-plain.svg";
import digitalocean from "../../Images/skill_svg/digitalocean-plain.svg";
import docker from "../../Images/skill_svg/docker-plain.svg";
import eslint from "../../Images/skill_svg/eslint-original.svg";
import express from "../../Images/skill_svg/express-original.svg";
import figma from "../../Images/skill_svg/figma-plain.svg";
import flask from "../../Images/skill_svg/flask-original.svg";
import git from "../../Images/skill_svg/git-plain.svg";
import github from "../../Images/skill_svg/github-original.svg";
import gitlab from "../../Images/skill_svg/gitlab-plain.svg";
import grafana from "../../Images/skill_svg/grafana-original.svg";
import heroku from "../../Images/skill_svg/heroku-plain.svg";
import html5 from "../../Images/skill_svg/html5-original.svg";
import javascript from "../../Images/skill_svg/javascript-plain.svg";
import jest from "../../Images/skill_svg/jest-plain.svg";
import jira from "../../Images/skill_svg/jira-plain.svg";
import jquery from "../../Images/skill_svg/jquery-plain.svg";
import less from "../../Images/skill_svg/less-plain-wordmark.svg";
import linux from "../../Images/skill_svg/linux-plain.svg";
import materialui from "../../Images/skill_svg/materialui-plain.svg";
import mongodb from "../../Images/skill_svg/mongodb-plain.svg";
import mysql from "../../Images/skill_svg/mysql-plain.svg";
import nginx from "../../Images/skill_svg/nginx-original.svg";
import node from "../../Images/skill_svg/nodejs-original.svg";
import npm from "../../Images/skill_svg/npm-original-wordmark.svg";
import pandas from "../../Images/skill_svg/pandas-original.svg";
import php from "../../Images/skill_svg/php-plain.svg";
import postgres from "../../Images/skill_svg/postgresql-plain.svg";
import prometheus from "../../Images/skill_svg/prometheus-original.svg";
import python from "../../Images/skill_svg/python-plain.svg";
import react from "../../Images/skill_svg/react-original.svg";
import sass from "../../Images/skill_svg/sass-original.svg";
import trello from "../../Images/skill_svg/trello-plain.svg";
import vscode from "../../Images/skill_svg/vscode-plain.svg";



const Technologies = () => {
	return (
		<div className="Technologies">
			<h1>Technologies</h1>
			<HeaderImg />
			<div className="technologies-div">
				<div className="infodiv">
					<img className="logo" src={bash} alt="bash logo"></img>
					<img className="logo" src={bootstrap} alt="bootstrap logo"></img>
					<img className="logo" src={canva} alt="canva logo"></img>
					<img className="logo" src={codepen} alt="codepen logo"></img>
					<img className="logo" src={css3} alt="css3 logo"></img>
					<img className="logo" src={digitalocean} alt="digitalocean logo"></img>
					<img className="logo" src={docker} alt="docker logo"></img>
					<img className="logo" src={eslint} alt="eslint logo"></img>
					<img className="logo" src={express} alt="express logo"></img>
					<img className="logo" src={figma} alt="figma logo"></img>
					<img className="logo" src={flask} alt="flask logo"></img>
					<img className="logo" src={git} alt="git logo"></img>
					<img className="logo" src={github} alt="github logo"></img>
					<img className="logo" src={gitlab} alt="gitlab logo"></img>
					<img className="logo" src={grafana} alt="grafana logo"></img>
					<img className="logo" src={heroku} alt="heroku logo"></img>
					<img className="logo" src={html5} alt="html5 logo"></img>
					<img className="logo" src={javascript} alt="javascript logo"></img>
					<img className="logo" src={jest} alt="jest logo"></img>
					<img className="logo" src={jira} alt="jira logo"></img>
					<img className="logo" src={jquery} alt="jquery logo"></img>
					<img className="logo" src={less} alt="less logo"></img>
					<img className="logo" src={linux} alt="linux logo"></img>
					<img className="logo" src={materialui} alt="materialui logo"></img>
					<img className="logo" src={mongodb} alt="mongodb logo"></img>
					<img className="logo" src={mysql} alt="mysql logo"></img>
					<img className="logo" src={nginx} alt="nginx logo"></img>
					<img className="logo" src={node} alt="node logo"></img>
					<img className="logo" src={npm} alt="npm logo"></img>
					<img className="logo" src={pandas} alt="pandas logo"></img>
					<img className="logo" src={php} alt="php logo"></img>
					<img className="logo" src={postgres} alt="postgres logo"></img>
					<img className="logo" src={prometheus} alt="prometheus logo"></img>
					<img className="logo" src={python} alt="python logo"></img>
					<img className="logo" src={react} alt="react logo"></img>
				</div>
				<div>
					<img className="logo" src={sass} alt="sass logo"></img>
					<img className="logo" src={trello} alt="trello logo"></img>
					<img className="logo" src={vscode} alt="vscode logo"></img></div>
			</div>
		</div>
	);
};

export default Technologies;

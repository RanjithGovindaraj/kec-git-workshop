import React,{useState} from "react";
import "./App.css";
import CodeComponent from "./components/CodeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => setDark(prev => !prev)
	return (
		<div className={dark ? "App dark" : "App"}>
			<div className="App-content">
				<HeaderComponent toggle={toggleTheme} />
				<div>
					<h1>Initialize repository</h1>
					<p>
						To use git in our repository we have to "bless" our
						folder/directory with the <code>git init</code> command
					</p>
					<CodeComponent>git init</CodeComponent>
					<div className="divider"></div>
					<h1>Display Status</h1>
					<p>
						The command <code>git status</code> displays the state
						of the working directory and the staging area. It lets
						you see which changes have been staged, which haven't,
						and which files aren't being tracked by Git.It also
						displays the branch you are working on
					</p>
					<CodeComponent>git status</CodeComponent>
				</div>
			</div>
			<FooterComponent />
		</div>
	);
}

export default App;

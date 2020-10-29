import React, { useState } from "react";
import "./App.css";
import CodeComponent from "./components/CodeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
// { "comments": "#dd8888" }
function App() {
	const [dark, setDark] = useState(false);

	const toggleTheme = () => setDark((prev) => !prev);
	return (
		<div className={dark ? "App dark" : "App"}>
			<div className="App-content">
				<HeaderComponent toggle={toggleTheme} />
				<div>
					{/* git init */}
					<div>
						<h1>Initialize repository</h1>
						<p>
							To use git in our repository we have to "bless" our
							folder/directory with the <code>git init</code>{" "}
							command. It creates a <code>.git</code> folder
							inside our folder
						</p>
						<CodeComponent>git init</CodeComponent>
					</div>
					<div className="divider"></div>
					{/* .git */}
					<div>
						<h1>.git folder</h1>
						<p>
							<code>.git</code> directory is where almost
							everything that Git stores and manipulates is
							located. If you want to back up or clone your
							repository, copying this single directory elsewhere
							gives you nearly everything you need.
						</p>
					</div>
					<div className="divider"></div>
					{/* git add */}
					<div>
						<h1>Saving Changes - step I</h1>
						The <code>git add</code> command adds a change in the
						working directory to the staging area. It tells Git that
						you want to include updates to a particular file in the
						next commit.
						<CodeComponent>git add</CodeComponent>
					</div>
					<div className="divider"></div>
					{/* git commit */}
					<div>
						<h1>Saving Changes - step II</h1>
						<p>
							The <code>git commit</code> command captures a
							snapshot of the project's currently staged changes.
							Committed snapshots can be thought of as <b>safe</b>{" "}
							versions of a project
						</p>
						<CodeComponent>
							git commit -m "YOUR_MESSAGE_HERE"
						</CodeComponent>
					</div>
					<div className="divider"></div>
					{/* .gitiginore */}
					<div>
						<h1>.gitignore</h1>
						<p>
							A <code>.gitignore</code> file is a plain text file
							where each line contains a pattern for
							files/directories to ignore. Generally, this is
							placed in the root folder of the repository
						</p>
					</div>
					<div className="divider"></div>
					{/* git status */}
					<div>
						<h1>Display Status</h1>
						<p>
							The command <code>git status</code> displays the
							state of the working directory and the staging area.
							It lets you see which changes have been staged,
							which haven't, and which files aren't being tracked
							by Git. It also displays the branch you are working
							on.
						</p>
						<CodeComponent>git status</CodeComponent>
					</div>
					<div className="divider"></div>
					{/* git reset */}
					<div>
						<h1>git reset</h1>
						<p>
							<code>Reset staging area</code> to match most recent
							commit, but leave the working directory unchanged.
						</p>
						<CodeComponent>git reset</CodeComponent>
						<p>
							<code>
								Reset staging area and working directory
							</code>{" "}
							to match most recent commit and overwrites all
							changes in the working directory
						</p>
						<CodeComponent>git reset --hard</CodeComponent>
					</div>
					<div className="divider"></div>
				</div>
			</div>
			<FooterComponent />
		</div>
	);
}

export default App;

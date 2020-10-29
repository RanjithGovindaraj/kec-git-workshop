import React, { useState } from "react";
import "../css/CodeComponent.css";
function CodeComponent(props) {
	const { children } = props;
	const [copyState, setCopyState] = useState("copy");
	const copyCodeToClipboard = () => {
		var dummy = document.createElement("textarea");
		document.body.appendChild(dummy);
		dummy.value = children.replace(",", "\n");
		dummy.select();
		document.execCommand("copy");
		setCopyState("copied");
		document.body.removeChild(dummy);
	};

	const genKey = (element, i) => `${element}_${i}_${Date.now()}`;

	return (
		<div className="code-container" onClick={copyCodeToClipboard}>
			<div>
				{children.split(",").map((element, i) => (
					<p key={genKey(element, i)}>{element}</p>
				))}
			</div>
			<button className="copy-button">{copyState}</button>
		</div>
	);
}

export default CodeComponent;

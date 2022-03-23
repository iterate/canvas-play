const main = () => {
	const canvas = document.createElement('canvas');
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	document.body.appendChild(canvas);
}

main();

import AudioDraw from './modules/audioDraw.js';

const main = () => {
	const canvas = document.createElement('canvas');
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	document.body.appendChild(canvas);

	run(canvas);
}

const run = async (canvas) => {
	const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
	new AudioDraw(canvas, audioStream);
};

main();

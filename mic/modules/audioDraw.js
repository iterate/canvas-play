// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission

export default class AudioDraw {
	constructor(canvas, audioStream) {
		window.localStream = audioStream;
		this.animationId = window.requestAnimationFrame(this.visualizerLoop);
		this.canvas = canvas;

		const audioCtx = new AudioContext();
		const audioSrc = audioCtx.createMediaStreamSource(audioStream);
		const analyser = audioCtx.createAnalyser();

		audioSrc.connect(analyser)
		analyser.fftSize = 2048; // should be default, but just in case

		this.state = {
			analyser,
			samplesBuffer: new Uint8Array(analyser.fftSize),
			frequencyBuffer: new Uint8Array(analyser.fftSize),
			ctx: canvas.getContext('2d'),
			sampleResolution: canvas.width / analyser.fftSize,
			frequencyResolution: canvas.width / analyser.frequencyBinCount,
			center: {
				x: canvas.width/2,
				y: canvas.height/2
			}
		};
	}

	visualizerLoop = () => {
		this.animationId = window.requestAnimationFrame(this.visualizerLoop);
		this.state.analyser.getByteFrequencyData(this.state.frequencyBuffer);
		this.state.analyser.getByteTimeDomainData(this.state.samplesBuffer);
		this.render();
	};

	clear = () => {
		this.state.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	render = () => {
		this.clear();

		this.state.ctx.beginPath();

		// samplesBuffer contains values from 0 to 255, centering it in canvas on y axis
		this.state.ctx.moveTo(0, this.state.samplesBuffer[0] + this.state.center.y - 128);
		this.state.samplesBuffer
			.slice(1) // skip first element of samplesBuffer
			.forEach((y, i) => {
				this.state.ctx.lineTo((i + 1)*this.state.sampleResolution, y + this.state.center.y - 128);
			});

		this.state.ctx.stroke();
		this.state.ctx.closePath();
	};
}

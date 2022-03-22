const rng = (min, max) => {
	return min + Math.floor(Math.random() * (max - min + 1))
};

export default class MouseDraw {
	constructor(canvas) {
		this.state = {
			ctx: canvas.getContext("2d"),
			draw: false,
			previous: null,
			current: null
		};

		canvas.addEventListener('mousedown', this.beginDrawing);
		canvas.addEventListener('mouseup', this.stopDrawing);
		canvas.addEventListener('mousemove', this.draw);
	}

	beginDrawing = () => this.state.draw = true;

	stopDrawing = () => this.state.draw = false;

	draw = (e) => {
		this.state.current = {
			x: e.clientX,
			y: e.clientY
		};

		if (this.state.draw && this.state.previous != null) {
			this.state.ctx.beginPath(); 

			this.state.ctx.strokeStyle = `rgb(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)})`;
			this.state.ctx.moveTo(this.state.previous.x, this.state.previous.y); 
			this.state.ctx.lineTo(this.state.current.x, this.state.current.y);
			this.state.ctx.stroke();

			this.state.ctx.closePath();
		}

		this.state.previous = { ...this.state.current };
	};
}

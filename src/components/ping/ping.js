import React from 'react';
import './ping.css';
import pingGame from './ping-game.js';
import Draggable from 'react-draggable';
import { MuiThemeProvider } from '@material-ui/core/styles';

class PingModal extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        var e = document.getElementById("mh-ping");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        e = document.getElementById("mm-ping");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        this.props.modalToTop(this.ref);

        const canvas = document.getElementById("ping");
        const ctx = canvas.getContext("2d");

        const user = {
            x: 0,
            y: canvas.height / 2 - (100/2),
            width: 10,
            height: 100,
            color: "WHITE",
            score: 0
        }

        const com = {
            x: canvas.width - 10,
            y: canvas.height / 2 - (100/2),
            width: 10,
            height: 100,
            color: "WHITE",
            score: 0
        }

        const ball = {
            x: canvas.width/2,
            y: canvas.height/2,
            radius: 10,
            speed: 4,
            velocityX: 4,
            velocityY: 4,
            color: "WHITE"
        }

        const net = {
            x: canvas.width/2 - 1,
            y: 0,
            width: 2,
            height: 10,
            color: "WHITE"
        }

        function drawNet() {
            for(let i = 0; i <= canvas.height; i+=15) {
                drawRect(net.x, net.y + i, net.width, net.height, net.color);
            }
        }

        function drawRect(x,y,w,h,color) {
            ctx.fillStyle = color;
            ctx.fillRect(x,y,w,h);
        }

        function drawCircle(x,y,r,color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x,y,r,0,Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
        }

        function drawText(text,x,y,color) {
            ctx.fillStyle = color;
            ctx.font = "45px fantasy";
            ctx.fillText(text,x,y);
        }

        function render() {
            drawRect(0, 0, canvas.width, canvas.height, "BLACK");
            drawNet();
            drawText(user.score, canvas.width / 4, canvas.height / 5, "WHITE");
            drawText(com.score, 3 * canvas.width/4, canvas.height/5, "WHITE");
            drawRect(user.x, user.y, user.width, user.height, user.color);
            drawRect(com.x, com.y, com.width, com.height, com.color);
            drawCircle(ball.x, ball.y, ball.radius, ball.color);
        }

        function collision(b,p) {
            p.top = p.y;
            p.bottom = p.y + p.height;
            p.left = p.x;
            p.right = p.x + p.width;
            
            b.top = b.y - b.radius;
            b.bottom = b.y + b.radius;
            b.left = b.x - b.radius;
            b.right = b.x + b.radius;
            
            return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
        }
        
        const userSpeed = 5;

        const keyState = {
            userUp: false,
            userDown: false,
            comUp: false,
            comDown: false
        }

        function movePaddle(e) {
            e = e || window.event;
            if (e.keyCode == '38') {
                keyState.comDown = false;
                keyState.comUp = true;
            } else if (e.keyCode == '40') {
                keyState.comUp = false;
                keyState.comDown = true;
            } else if (e.keyCode == '87') {
                keyState.userDown = false;
                keyState.userUp = true;
            } else if (e.keyCode == '83') {
                keyState.userUp = false;
                keyState.userDown = true;
            }
        }

        function stopPaddle(e) {
            e = e || window.event;
            if (e.keyCode == '38') {
                keyState.comUp = false;
            } else if (e.keyCode == '40') {
                keyState.comDown = false;
            } else if (e.keyCode == '87') {
                keyState.userUp = false;
            } else if (e.keyCode == '83') {
                keyState.userDown = false;
            }
        }

        canvas.addEventListener('keydown', movePaddle, false);
        canvas.addEventListener('keyup', stopPaddle, false);

        function resetBall() {
            ball.x = canvas.width/2;
            ball.y = canvas.height/2;
            ball.speed = 4;
            ball.velocityX = ball.velocityX > 0 ? -4 : 4;
            ball.velocityY = ball.velocityY > 0 ? -4 : 4;
        }

        function update() {
            if (ball.x - ball.radius < 0) {
                com.score++;
                resetBall();
            } else if (ball.x + ball.radius > canvas.width) {
                user.score++;
                resetBall();
            }

            ball.x += ball.velocityX;
            ball.y += ball.velocityY;
            if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
                ball.velocityY = -ball.velocityY;
            }

            let player = (ball.x < canvas.width/2) ? user : com;

            if(collision(ball, player)) {
                // we check where the ball hits the paddle
                let collidePoint = (ball.y - (player.y + player.height/2));
                // normalize the value of collidePoint, we need to get numbers between -1 and 1.
                // -player.height/2 < collide Point < player.height/2
                collidePoint = collidePoint / (player.height/2);
                
                // when the ball hits the top of a paddle we want the ball, to take a -45degees angle
                // when the ball hits the center of the paddle we want the ball to take a 0degrees angle
                // when the ball hits the bottom of the paddle we want the ball to take a 45degrees
                // Math.PI/4 = 45degrees
                let angleRad = (Math.PI/4) * collidePoint;
                
                // change the X and Y velocity direction
                let direction = (ball.x + ball.radius < canvas.width/2) ? 1 : -1;
                ball.velocityX = direction * ball.speed * Math.cos(angleRad);
                ball.velocityY = ball.speed * Math.sin(angleRad);
                
                // speed up the ball everytime a paddle hits it.
                ball.speed += 0.25;
            }   

            if (keyState.userDown) {
                user.y += userSpeed;
            } else if (keyState.userUp) {
                user.y -= userSpeed;
            }
            if (keyState.comDown) {
                com.y += userSpeed;
            } else if (keyState.comUp) {
                com.y -= userSpeed;
            }
        }

        function game() {
            update();
            render();
        }

        const framesPerSecond = 50;
        setInterval(game, 1000/framesPerSecond);
    }

    render() {
        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 50, y: -500 }}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="pingmodal" ref={this.ref}>
                    <div id="mh-ping" className="handle modalHandle">
                        PING V1.0
                        <div className="modalBar">
                            <div className="modalBtn" onClick={this.props.minimize}>
                                -
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>
                    </div>
                    <div id="mm-ping">
                        <canvas id="ping" tabIndex='1' width="600" height="400" className="pingCanvas">
                        </canvas>
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default PingModal;
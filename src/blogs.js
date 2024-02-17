const blogs = [
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
        date: '07.02.2024',
        tags: ['code']
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
        date: '14.02.2024',
        code: function (output) {
            //create canvas
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext('2d');
            canvas.fillStyle = "#FFFFFF";
            //obs
            canvas.addEventListener('click', function(evt) {
                const mousePos = getMousePos(canvas, evt);

                if (isInside(mousePos, rect)) {
                    alert('clicked inside rect');
                } else {
                    alert('clicked outside rect');
                }
            }, false);
            //button
            function getMousePos(canvas, event) {
                const rect = canvas.getBoundingClientRect();
                return {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                };
            }

            function isInside(pos, rect) {
                return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
            }

            const rect = {
                x: 100,
                y: 100,
                width: 200,
                height: 100,
            };
            function Playbutton(rect, lWidth, fillColor, lineColor) {
                ctx.beginPath();
                ctx.rect(rect.x, rect.y, rect.width, rect.height);
                ctx.fillStyle = 'rgba(225,225,225,0.5)';
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#000000';
                ctx.stroke();
                ctx.closePath();
                ctx.font = '40pt Kremlin Pro Web';
                ctx.fillStyle = '#000000';
                ctx.fillText('Start', rect.x + rect.width / 4, rect.y + 64);
            }
            Playbutton(rect);

            output.appendChild(canvas)
        },
        tags: ['code']
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
        date: '14.02.2024',
        code: function () {

        },
        tags: ['music']
    },

]
export default blogs;
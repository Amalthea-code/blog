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
        code: function (output, event) {
            //create canvas
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext('2d');
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

// Function to check whether a point is inside a rectangle
            function isInside(pos, rect) {
                return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
            }

// The rectangle should have x,y,width,height properties
            const rect = {
                x: 100,
                y: 100,
                width: 200,
                height: 100,
            };


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
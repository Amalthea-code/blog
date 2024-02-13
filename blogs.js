const blogs = [
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
        code: function () {
            function getRandomNumber(seed) {
                const x = Math.sin(seed) * 10000;
                return x - Math.floor(x);
            }

            while (true) {
                const seed = new Date().getTime(); // использование времени как семени
                const randomNum = getRandomNumber(seed);
                console.log(randomNum);
            }
        },
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
    },
    {
        title: 'Hello, World!',
        description: 'Information about my activities will periodically appear here, it is not yet known how long I will last, in time or desire, but I think something like this should have been done even earlier, and not by 4 years of programming experience. Thank you!',
    },
]
export default blogs;
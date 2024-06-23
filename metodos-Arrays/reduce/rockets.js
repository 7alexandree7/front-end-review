const rockets = [
    {
        country: 'Russia',
        launches: 32
    },

    {
        country: 'US',
        launches: 23
    },

    {
        country: 'China',
        launches: 16
    },

    {
        country: 'Europe',
        launches: 7
    },

    {
        country: 'Indian',
        launches: 4
    },

    {
        country: 'Japan',
        launches: 3
    }
]

const totalRockets = rockets.reduce((prevValue, value) => prevValue + value.launches, 0);
console.log(totalRockets)

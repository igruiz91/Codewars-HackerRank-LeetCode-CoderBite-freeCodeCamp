const compose = (f,g) => (...args) => f(g(...args))

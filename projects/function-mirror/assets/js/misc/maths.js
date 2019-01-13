/*jshint esnext: true */
var computeEulerMascheroni = function(limit = 50000000) {
  var sum = 0;
  for(i = 1; i <= limit; i++) {
    sum += 1/i;
  }
  return sum - (Math.log(limit));
};

var computePi = function(limit = 100000) {
  return Math.sqrt((zeta.mobius(2,limit)*6));
};

/*jshint esnext: true */
const e = Math.E;
const pi = Math.PI;
const tau = pi*2;
const root2 = Math.SQRT2;
const root5 = Math.sqrt(5);
const root3 = Math.sqrt(3);
const phi = {
  big: (1+root5)/2,
  little: (1-root5)/2,
};
const eulerMascheroni = computeEulerMascheroni();

/*jshint esnext: true */
var factorial = function(num) {
    if (num % 1 !== true) {
        return gamma(num);
    } else {
        if (num == 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
};

var factors = function(num) {
    var factors = [];
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

var isPrime = {
    factors: function(num) {
        if (factors(num).reduce((a, b) => a + b) == num + 1) {
            return true;
        } else {
            return false;
        }
    },
    totient: function(num) {
        if (totient(num) === num - 1) {
            return true;
        } else {
            return false;
        }
    },
};

var nextPrime = function(num) {
    var next = 0;
    for (var i = num + 1; i > -1; i++) {
        if (isPrime(i) === true) {
            next = i;
            break;
        }
    }
    return next;
};

var nthDigitPrime = function(num, freeze = false) {
    if (num > 7 && freeze === false) {
        console.error('This will take too long to compute.');
        return;
    } else {
        var check = Math.pow(10, num);
        return nextPrime(check);
    }
};

var createArray = function(upperLimit, lowerLimit = 1, rate = 1, negatives = false) {
    var array = [];
    if (negatives === false) {
        for (var i = lowerLimit; i < (upperLimit + 1); i += rate) {
            array.push(i);
        }
    } else {
        for (var j = lowerLimit; j < (upperLimit + 1); j++) {
            if (j % 2 === 0) {
                array.push(-1 * j);
            } else {
                array.push(j);
            }
        }
    }
    return array;
};

hasDuplicates = function(array) {
    return (new Set(array)).size !== array.length;
};

var mobius = function(num) {
    if (hasDuplicates(primeFactors(num)) === true) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return Math.pow((-1), (primeFactors(num).length));
    }
};

var mertens = function(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        sum += mobius(i);
    }
    return sum;
};

var zeta = {
    sum: function(num, limit = 1000) {
        var sum = 0;
        for (var i = 1; i <= limit; i++) {
            sum += 1 / Math.pow(i, num);
        }
        return sum;
    },
    primeProduct: function(num, limit = 1000) {
        var product = 1;
        var primes = sieve(limit);
        for (var i = 0; i < primes.length; i++) {
            product *= 1 / (1 - Math.pow(primes[i], (-num)));
        }
        return product;
    },
    mobius: function(num, limit = 1000) {
        var sum = 0;
        for (var i = 1; i <= limit; i++) {
            sum += mobius(i) / Math.pow(i, num);
        }
        return 1 / sum;
    },
    avg: function(num, limit = 1000) {
        return ((this.sum(num, limit)) + (this.primeProduct(num, limit)) + (this.mobius(num, limit))) / 3;
    },
};

var bionomalCoefficent = function(a, b) {
    return factorial(a) / (factorial(a - b) * factorial(b));
};

var triangle = function(num) {
    return (num * (num + 1)) / 2;
};

var ruler = function(num) {
    var count = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            count++;
            num = num / 2;
        } else {
            break;
        }
    }
    return count;
};

var sigmoid = function(num) {
    return 1 / (1 + Math.pow(e, num));
};

var totient = function(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        sum += gcd(i, num) * Math.cos((tau * i) / num);
    }
    return Math.round(sum);
};

var sumFactors = function(num, prime = false) {
    if (prime === false) {
        return factors(num).reduce((a, b) => a + b);
    } else {
        return primeFactors(num).reduce((a, b) => a + b);
    }
};

var powerArray = function(limit, power = 2) {
    var array = [];
    for (var i = 0; i < limit; i++) {
        array.push(Math.pow(power, i));
    }
    return array;
};

var arrayOfNthPrimes = function(num) {
    var array = [];
    for (var i = 0; array.length !== num; i++) {
        array = sieve(i);
    }
    return array;
};

var nthPrime = function(num) {
    return arrayOfNthPrimes(num)[num - 1];
};

var lambertW = function(num, limit, approx) {
    var previous = approx;
    var next = 0;
    for (var i = 0; i < limit; i++) {
        next = previous - (previous * Math.pow(e, previous) - num) / (Math.pow(e, previous) * (previous + 1));
        previous = next;
    }
    var answer = previous;
    return answer;
};

var nthHarmonic = function(num, other = false) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += 1 / i;
    }
    return sum;
};

var derivativeOfATerm = function(arr) {
    var one = arr[0];
    var two = arr[1];
    var derivative = [];
    if (two <= 0) {
        return [0, 0];
    } else {
        derivative.push(one * two);
        derivative.push(two - 1);
        return derivative;
    }
};

var derivativeOfPolynomial = function(arr, order = 1) {
    var derivative = [];
    for (var i = 0; i < arr.length; i++) {
        derivative.push(derivativeOfATerm(arr[i]));
    }
    if (order === 1) {
        return derivative;
    } else {
        return derivativeOfPolynomial(derivative, order - 1);
    }
};

var runPolynomial = function(poly, num) {
    var array = [];
    for (var i = 0; i < poly.length; i++) {
        array.push(Math.pow(num, poly[i][1]) * poly[i][0]);
    }
    return array.reduce((a, b) => a + b);
};

var newtonRootFind = function(polynomial, guess, limit = 10) {
    var derivative = derivativeOfPolynomial(polynomial);
    var previous = guess;
    var next;
    for (var i = 0; i < limit; i++) {
        next = previous - (runPolynomial(polynomial, previous)) / (runPolynomial(derivative, previous));
        previous = next;
    }
    return previous;
};

var isSimplified = function(numerator, denom) {
    divisor = gcd(numerator, denom);
    if (numerator / divisor === numerator) {
        return true;
    } else {
        return false;
    }
};

var divisorSigma = function(num, power = 1) {
    var sum = 0;
    var numFactors = factors(num);
    for (var i = 0; i < numFactors.length; i++) {
        sum += Math.pow(numFactors[i], power);
    }
    return sum;
};

var stackPower = function(num, amount) {
    var answer = num;
    for (var i = 1; i <= amount; i++) {
        answer = Math.pow(answer, num);
    }
    return answer;
};

var tan = function(x) { return Math.tan(x); };
var sin = function(x) { return Math.sin(x); };
var cos = function(x) { return Math.cos(x); };

var log = function(x) { return Math.log(x); };
var log10 = function(x) { return Math.log10(x); };
var log2 = function(x) { return Math.log2(x); };

var exp = function(x) { return Math.exp(x); };
var sqrt = function(x) { return Math.sqrt(x); };
var round = function(x) { return Math.round(x); };
var floor = function(x) { return Math.floor(x); };
var ceil = function(x) { return Math.ceil(x); };

var power = function(x,y) { return Math.pow(x, y); };

function gamma(z) {

    var g = 7;
    var C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];

    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    else {
        z -= 1;

        var x = C[0];
        for (var i = 1; i < g + 2; i++)
        x += C[i] / (z + i);

        var t = z + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
    }
}

function sieve(max) {var sieve = [], i, j, primes = [];for (i = 2; i <= max; ++i) {if (!sieve[i]) {// i has not been marked -- it is prime
            primes.push(i);for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;}}}return primes;}


function primeFactors(num){
  var root = Math.sqrt(num);
  var result = arguments[1] || [];
  var x = 2;

  if(num % x) {
   x = 3;
   while( (num % x) && ( (x = x + 2) < root) ){

   }
  }

  x = (x <= root) ? x : num;
  result.push(x);

  return (x === num) ? result : primeFactors(num/x, result) ;
}

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

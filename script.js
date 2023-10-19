function equial () //header function
{
  const btn = document.getElementById('btn'); //initialise
  
  const evclide = (a, p) => //return NoD from 2 values
  {
    if (a === 0)
    {
      return p;
    }
    if (p === 0)
    {
      return a;
    }
    else 
    {
      return a > p ? evclide(a % p, p) : evclide(a, p % a); //recursive division until one (a or p) is't equal to 0 
    }
  }
  
  const isPrime = (a, p) => //proove 2 values on Prime (true/false)
  {
    return evclide(a, p) === 1;
  }

  const calculate = (a, p, b) => //function calculator of equal
  {
    let result = '';

    if (isPrime(a, p) === true)
    {
      if (a === 1 && b < p)
      {
        result += b;
      }
      else
      {
        let aInverse = 0; //expand algoritm of Evclide (1/a(mod(p)))
          for (let i = 1; i < p; i++)
            {
              if ((a * i) % p === 1)
              {
                aInverse = i;
                break;
              }
            }
        let x = (aInverse * b) % p; //x = (1/a * b(mod(p)));
        result += x;
      }
      return `X = ${result}`;
    }
    else
    {
      return `${result += 'Два числа не взаимнопросты!'}`;
    }
  }

  btn.addEventListener('click', function()
	{
    const inpA = parseInt(document.querySelector('#inp_a').value); //initialise values
    const inpP = parseInt(document.querySelector('#inp_p').value);
    const inpB = parseInt(document.querySelector('#inp_b').value);
		const result = document.getElementById('output');

		result.textContent = `Результат: ${calculate(inpA, inpP, inpB)}`
	});  
}
equial();

/*example: (a = 14), (b = 3), (p = 33):
1. (a) and (p) is prime, because NOD === 1;
2. (1/a) = (14 * 26(mod(p)) = 1 - it's inverse;
3. (26 * 3(mod(p))) = 12;
4. x = 12; easy
VLADisLOVE
*/

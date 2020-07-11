// NOTE: Besure to write a proper syntax to avoid unexpected error.
// What I did was writing "return" in a wrong syntax and
// the programm did not run and produced error.

function countBs (str)
{
	let count = 0;
	for(let n = 0; n < str.length; n++)
	{
		if ( str[n] === "B")
		{
			count++;
		}
	}
	return count;
}

function countChar (str, char)
{
	let count = 0;
	for(let n = 0; n < str.length; n++)
	{
		if ( str[n] === char)
		{
			count++;
		}
	}
	return count;
}

console.log(countBs("BumbleBBBBBBee"));
// → 7
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkkerlak", "k"));
// → 5
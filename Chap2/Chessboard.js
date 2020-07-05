let res = "";

// 8 can be binding to a variable name size for dynamic changing
for(let len = 0; len < 8; len++ )
{
	// run the first line of # # # # # # from positon 0 to 7
	for(let wid = 0; wid < 8; wid++)
	{
		if((len + wid) % 2 == 0)
		{
			res += " ";
		}
		else 
		{
			res += "#";
		}
	}
	// break the line and start a new iteration
	res += "\n"
}

// print the board
console.log(res);
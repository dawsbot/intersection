walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// https://github.com/laurenorsini/caaaaarbs/blob/master/myscript.js
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;s
	v = v.replace(/\bnerd\b/g, "smarty");/*
	v = v.replace(/\bloser\b/g, "caaaaarbs");
	v = v.replace(/\bfreak\b/g, "Caaaaarbs");
	v = v.replace(/\bScones\b/g, "Caaaaarbs");
	v = v.replace(/\bBuns\b/g, "Caaaaarbs");
	v = v.replace(/\bspaghetti\b/g, "caaaaarbs");
	*/
	textNode.nodeValue = v;
}
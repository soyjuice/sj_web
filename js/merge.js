function merge_code(a)
{
	document.getElementById('code_pre'+a).style.display="inline";
	document.getElementById('code_re'+a).style.display="none";
	document.getElementById('code_set'+a).style.display="none";
}
function open_code(a)
{
	document.getElementById('code_pre'+a).style.display="none";
	document.getElementById('code_re'+a).style.display="inline";
	document.getElementById('code_set'+a).style.display="block";
}
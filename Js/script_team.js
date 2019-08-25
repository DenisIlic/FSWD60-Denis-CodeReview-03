var real = document.getElementById("real");
console.log(teamMembers);


for (let i = 0; i < teamMembers.length ; i++) {

	show(teamMembers[i], i);


}



function show(a, b){

	var url = a.image
	var name = a.name
	var mail = a.email
	document.getElementById("photo"+b).src += url;
	document.getElementById("fn"+b).innerHTML += name;
	document.getElementById("mail"+b).innerHTML += mail;
	
}
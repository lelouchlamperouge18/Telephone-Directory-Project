var readlineSync = require('readline-sync');

var fs = require('fs');
var contacts = [];

function loadData(){
	var fileContent = fs.readFileSync('./data.json');
	contacts = JSON.parse(fileContent);
}

function showMenu(){
	console.log('|CHOOSE YOUR ACTION|');
	console.log('1. Show all contacts');
	console.log('2. Add contact');
	console.log('3. Delete contact');
	console.log('4. Find contact');
	console.log('5. Save and Exit');
	var option = readlineSync.question('> ');
	switch (option) {
		case '1':
			showContacts();
			showMenu();
			break;
		case '2':
			addContact();
			showMenu();
			break;
		case '3':
			deleteContact();
			showMenu();
			break;
		case '4':
			findContact();
			showMenu();
			break;
		case '5':
			saveAndExit();
			break;
		default:
			console.log('Wrong option!');
			showMenu();
			break;
	}
}
function showContacts(){
	for (var contact of contacts) {
		console.log(contact.name1, contact.phone);
	}
}
function addContact(){
	var name1 = readlineSync.question('Name: ');
	var phone1 = readlineSync.question('Phone: ');
	var contact = {
		name1: name1,
		phone: parseInt(phone1)
	};
	contacts.push(contact);
}
function deleteContact(){
	var position = readlineSync.question('Put position of contact you want to delete: ');
	contacts.splice(position,1);
}
function findContact(){
	var name2 = readlineSync.question('Name: ');
	var phone2 = readlineSync.question('Phone: ');
	const result1 = contacts.filter(contact => contact.name1 === name2);
	const result2 = contacts.filter(contact => contact.phone === parseInt(phone2));
	console.log(result1);
	console.log(result2);
}
function saveAndExit(){
	var content = JSON.stringify(contacts);
	fs.writeFileSync('./data.json',content,{encoding:'utf8'});
}
function main() {
	// body...
	loadData();
	console.log(contacts);
	showMenu();

}
main();

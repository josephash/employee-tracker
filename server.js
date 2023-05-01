const inquirer = require('inquirer');
const mysql = require('mysql2');

async function startApp() {
	let cont = true;
	while (cont) {
		let data = await inquirer.prompt([
			{
				type: 'list',
				name: 'command',
				message: 'What do you want to do?',
				choices: [
					'View all departments',
					'View all roles',
					'View all employees',
					'Add a department',
					'Add a role',
					'Add an employee',
					'Update an employee\'s role',
					'Exit'
				]
			}
		]);
		if (data.command === 'View all departments') {
			
		} else if (data.command === 'View all roles') {
			
		} else if (data.command === 'View all employees') {
			
		} else if (data.command === 'Add a department') {
			
		} else if (data.command === 'Add a role') {
			
		} else if (data.command === 'Add an employee') {
			
		} else if (data.command === 'Update an employee\'s role') {
			
		} else {
			cont = false;
		}
	}
	console.log('Closing app');
	return;
}

startApp();
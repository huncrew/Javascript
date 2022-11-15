/*
Email class object that acts as an email client, storing and updating email information.
The program has many methods, the object will create and store many emails, and the user can select to read emails,
send, mark as spam, delete, view read/unread. The object and it's data will be updated based on the input.
the users input is managed with a while/if statement code at the end of the program;
*/
class Email {
    constructor(fromAddress, emailContents) {
        this.fromAddress = fromAddress;
        this.emailContents = emailContents;
        this.hasBeenRead = false;
		this.isSpam = false;
		this.emailInbox = [];
    } // changes read boolean
    markAsRead(emailNumber) {
		this.emailInbox[emailNumber - 1].hasBeenRead = true;
    } // changes spam boolean
	markAsSpam(emailNumber) {
		this.emailInbox[emailNumber - 1].isSpam = true;
		return this.emailInbox[emailNumber - 1];
	} // adds email instance
	addEmail(fromAddress, emailContents) {
		let email = new Email(fromAddress, emailContents);
		this.emailInbox.push(email);
		let message = 'Email stored';
		return message;
	} // counts inbox
	getCount() {
		let message = `Inbox count: ${this.emailInbox.length}`;
		return message;
	} // gets a single email and changes boolean
	getEmail(emailNumber) {
		let email = this.emailInbox[emailNumber - 1].emailContents;
		this.emailInbox[emailNumber - 1].hasBeenRead = true;
		return email;
	} // unreads
	getUnreadEmail() {
		const unread = this.emailInbox.filter(email => email.hasBeenRead == false);
		return unread;
	} // get spam email
	getSpamEmails() {
		const spam = this.emailInbox.filter(email => email.isSpam == true);
		return spam;
	} // delete email
	delete(emailNumber) {
		this.emailInbox.splice(emailNumber, 1);
	}
}

// adding some emails for testing
let emailClient = new Email();
emailClient.addEmail('abc@gmail.com', 'Hello, can you send me money please?');
emailClient.addEmail('prince@gmail.com', 'Hi, I am a prince can you please send me money to reclaim my throne?');
emailClient.addEmail('aqueen@gmail.com', 'Hey Im a queen, I need money');
emailClient.addEmail('ivention@gmail.com', 'You have been awarded the invention of the century plaque');
emailClient.addEmail('solid@gmail.com', 'You have won a lot of money');
console.log(emailClient.getUnreadEmail());

// User inputs
let userChoice = "";
while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	if(userChoice == "1"){
		let emailCount = emailClient.getCount();
		let choice = Number(prompt(`You have this many emails: ${emailCount}, please enter a number to select which email to view`));
		// get email and print
		console.log(emailClient.getEmail(choice));
		// mark email as read
		emailClient.markAsRead(choice)
	}else if(userChoice == "2"){
		let emailCount = emailClient.getCount();
		let choice = Number(prompt(`Choose an email to mark as spam - You have this many emails: ${emailCount}, please enter a number to mark as spam`));
		console.log(emailClient.getEmail(choice));
		// mark email as spam
		emailClient.markAsSpam(choice);
		let spam = emailClient.getSpamEmails()
		// consoling spam emails
		spam.forEach(element => {
			console.log('spam emails...',element);	
		})
	}else if(userChoice == "3"){
		// constructs email based on data provided.
		let sendEmailAddress = prompt('To send an email, please enter your email address:');
		let content = prompt('Now please enter your message');
		let recipient = prompt('Finally enter the recipients address');
		console.log(`message: ${content} sent to ${recipient}`);
		// delete an email
	}else if(userChoice == "4"){
		let emailCount = emailClient.getCount();
		let choice = Number(prompt(`To delete an email, enter a number. You have this many emails: ${emailCount}`));
		console.log('This is the email thats being deleted',emailClient.getEmail(choice));
		emailClient.delete(choice);
		console.log('you have deleted the email');
	}else if(userChoice == "5"){
		let spam = emailClient.getSpamEmails();
		// consoling spam emails
		spam.forEach(element => {
			console.log('Here are the emails marked as Spam:',element);	
		})
	}else if(userChoice == "6"){
		let unread = emailClient.getUnreadEmail();
		// consoling spam emails
		unread.forEach(element => {
			console.log('Here are the emails marked as unread:',element);	
		})
		//	Place your logic here
	}else if(userChoice == "7"){
		console.log("Goodbye");
	}else{
		console.log("Oops - incorrect input");
		
	}
}

# DU Lite Website Project

##Intro
	This is the official lite version website for the digitizingu.com digital platform 


###Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


#### Prerequisites

Things you need to install before setting up the 


```
NPM (Install with NodeJs package)
Git Version Control (Install from the Git website)
The Respository (Clone from URL: https://github.com/DigitizingU/DU-Lite.git)


```
#### These steps will get the project setup on your machine for development / distribution

Run These from a Linux / Git Bash Command Line (for windows find equivalent commands)

1. CD to project folder
2. Run `npm install bower -g`
3. Run `npm install gulp -g`
4. Run `npm install`
5. Run `bower install`



### Running

These steps will run the project in appropriate linux server environment

#### For Launching a Web server which is a Proxy Server mirroring your Local Linux Server Environment

These steps will launch a web server which will refresh on detecting file changes in your working directory

1. change the proxy address to resonate to your local server port number

	```
		browserSync.init({
	        proxy: "localhost:your-port-number/DU-Lite" // change this to your server proxy address
	    });

	```

2. run command `gulp run`
  

#### For Using your own Local Linux Server Environment but compiles your files on file change

These steps compile necessary files again on detecting file changes in your working directory

1. change the proxy address to resonate to your local server port number


2. run command `gulp`
  
## Nothing beyond this point is updated at the moment

####Deployment

#####Add additional notes about how to deploy this on a live system

####Built With

#######will list later

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors

Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License

This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments

Hat tip to anyone who's code was used
Inspiration
etc


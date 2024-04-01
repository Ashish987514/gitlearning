// terminal commands

//different terms 

//command line-where we type commands
//terminal-type of command line ,,which present in mac and linux
//console-a command line 

//shell-a program running on terminal

//bash-a popular shell on mac,linux,online compiler 
//z-shell-another shell,defualt type in mac


/*
git version
ls-list all files and folders in the directory
pwd-directory path
clear-clear terminal
"~"-home directory
"/"-root directory

cd-change directory("cd foldername")
cd .. =goind out of that folder(one step back)
cd ../.. =two steps back

use tab for using command suggestions

cd foldername =relative path (no slash at start)
cd /c/Users/Dell =absolute path(slash at start)

"cd ~"
"cd /"

mkdir foldername- make directory(makes folders)
mkdir /absolulte path -make directory at a specfic path 

ls -l =list names in long string format(means give complete file/folder name)
ls -a =list additional folders/files
ls -la =list hidden file as well as information
q -quit from jo bhi ho raha ho
*/

//flags -extra things we pass with commands ,to modify their behaviour

//touch commands-create new files ,it basically edits the time when a file is created
/*
touch index.html -created a html file

man commandname -shows all commands with this commandname 

*/


//deleting files/folders-it directly deletes the thing,,and we cant restore it
//so its very sensitive 

/*
"rm filename1 filename2" ..-reomves file
rmdir -removes empty folders wali directory only
rm -rf =removes any folder(recursive_delete force)
*/

//git and github  

//git-free/open source "version control system"
//tool which helps to track changes in the code 
//with it we can work collabratively

//github-we can make profile,store code/repositories,host the program

//add and commit
//add-means we edited any file 
//commit-we saved that edited change,,commit means hpw many edits done to the code





//using git-by cmd or by ide extension or by gui

//configuring git-setting username and email
/*
git config --global user.name "myname"
git config --gloal user.email "someone@gamil.com"
git config --list
*/

/*
git clone paste_your_link -downloading/copying files from github to vs code
git status 
*/
//status- untracted unmodified(commit) modified staged(add)

/*
git add file_name
git add . =add/stage all files 

git commit -m "some_message" -commit files we are added but havent commited

*/
//note-git and github stores files at different place ,they are not one 
//we cloned from github to vd code ,and commited new files to git not github


//push-commiting vs code changes to github/updating cvs code changes to github
/*
git push origin main 
*/

//clear github credentials to solve error while pushing,,go to control panel>user accounts>windows credentials >remove git hub credentials 
//then type the push command again,and sigin in a account


//init-used to create a new git/github repository via vs code
 
/*
git init-for creating new repo,go the the path where u created the folder,then type this command 
*/

/*
git remote add origin paste_link -add repo link in vs code,
//this link is called origin 
git remote set-url origin paste_link -making a repo as main for u[adting things,paste link of the repo u want to set 

git remote -v =to verify remote,,from which repo vs code is fetching snd pushing things

git branch -to check branch

git branch -M new_name = to rename branch 

*/
/**
git push --set -upstream origin feature

git diff branch_name- to compare commits/branchesfiles and more

git merge branch_name -to merge 2 branches 


 */
//now go github, a new compare pull request option will be appear at the top
//there may be a request willl appear if we have same files in both branches 
//if not we can directly merge both the files


//if we have something extra or differrent on github we van also pull 
/*
git pull origin main
*/

//merge conflicts -when github is unable to resolve differences in code between two commits

######################
Introduction to Gerrit
######################

Gerrit Overview
===============

Gerrit is a web based code review and repository management system for the Git
version control system.

With Gerrit it is possible to implement a review and refine workflow where a
patch is continuously refined until it is approved by maintainers for merge.
The advantage of this workflow is that it allows the commit message to
meaningfully describe the contribution and the commit to represent a complete
feature or fix.


Gerrit Account Configuration
============================

For projects that use a centralized authentication service such as LDAP Gerrit
does not know your account exists until you login for the first time.

While it is possible to use a username / password combination to fetch and push
patches to Gerrit, SSH key based authentication is a bit more secure and easier
as you do not need to save your password on your system. GitHub has a pretty
decent documentation on how to Generate SSH key pair if you are interested in
trying this method https://help.github.com/articles/generating-ssh-keys

If you would like to use SSH then you must upload your SSH public key to the
Gerrit server.

#. Login to Gerrit
#. Click your name at the top right
#. Click **Settings > SSH Public Keys**
#. Click **Add Key …**
#. Paste the text of your public key into the text box
#. Click **Add**

Clone a Gerrit Project
======================

To clone a Gerrit project ``git clone <gerrit-url>``. The clone URL can be
found in Gerrit by navigating to:

#. Click **Projects** at the top menu bar
#. Click on the project you wish to clone
#. Click **General**
#. Choose a clone method (preferrably SSH)
#. Copy the command and run it

Push patch to Gerrit
====================

Pushing for Review is a feature of Gerrit which allows you to push a patch online for developers to review. This is the
method you should use to push if you are not a committer on the project or if you'd like a second opinion on your patch
before it goes live.

Gerrit provides a special refspec to push your changes to which will instead of merging into the upstream repository
commits it to be reviewed. This refspec is **refs/for/\*** if where the \* tells Gerrit which branch you want your patch
to be reviewed against. For example if you'd like to push your patch to be reviewed against the **master** branch then
you push to **refs/for/master**. Change master to be any other existing branch online for it to be reviewed against
another branch.

In the example below we are pushing a special Git keyword called **HEAD**. In this case this simply means the latest
commit on the current branch you are on.

**Using Git CLI**

    git push origin HEAD:refs/for/master

Change **master** to whichever branch you want to push to.

**Using EGit**

1. Navigate to the Git perspective (Window > Open Perspective > Other > Git)
2. Right click on the repo you are making changes to
3. Click **Remote > Push…**
4. Select **Configure Remote Repository** and choose **origin**
5. Click **Next**
6. Set **Source ref** to **HEAD**
7. Set **Destination ref** to **refs/for/master** (Change master to the branch you want the patch to be reviewed against)
8. Click **Add Spec**
9. Click **Finish**

![EGit Refspec](gerrit-egit-refspec.png "EGit Refspec")

**Note:** After you push Gerrit will provide you with a link to your review. Note this down as it will be the link to
          your patch should you need it. If you are working on a Bug it is good practice to link to this URL in the
          Bug. The URL should look similar to this https://git.eclipse.org/r/24873/


## Updating a patch for Review

When your code is reviewed you might have some feedback asking you to address some issues with your code. In this case
you will need to update your patch with a new version that addresses feedback comments.

The Gerrit way to update patches is to amend your existing patch commit continuously until it is accepted. When you
amend your patch though you need to ensure that your commit message contains the correct **Change-Id** field. This
field is how Gerrit knows that you are updating an existing Gerrit review. This is a unique string that helps Gerrit
identify an existing Review and update it. You can find the **Change-Id** on the review page for your patch near the
top you should see a box similar to this:

![Change-Id](gerrit-change-id.png "Change-Id")

**Using Git CLI**

    git add <files>
    git commit --amend

**Using EGit**

1. Navigate to the Git perspective (Window > Open Perspective > Other > Git)
2. Right click on the repo you are making changes to
3. Click **Commit…**
4. Select the files you modified
5. Check the **Amend Previous Commit** button

![EGit Amend](gerrit-egit-amend.png "Egit Amend")

**Amended Commit message**

Your amended commit message should look similar to the following:

    Bug 420891 - [CBI] Builds too many projects

    According discussions in Bug 420891 it seems CBI build is building too
    many projects in JSDT. This patch removes the development directory from
    the build list which does not need to be built.
    Change-Id: I5bc9dfe47569e854b40d4fe9a400bb1dd16781d6
    Signed-off-by: Thanh Ha <thanh.ha@eclipse.org>

Once amended you can push using the same method as in the previous section **Push to Gerrit for Review**.

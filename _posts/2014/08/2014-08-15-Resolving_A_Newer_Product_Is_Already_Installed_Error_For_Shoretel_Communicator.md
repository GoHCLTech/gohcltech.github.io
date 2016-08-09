---
title: Resolving "A newer product is already installed" error for Shoretel Communicator
layout: post
category: ['shoretel']
author: chris
img: images/solved.jpg
comments: true
---

It seems as though most of the times we have a Shoretel Communicator update we end up seeing the following error:

    Installer Prerequisites Incomplete
    The following prerequisites must be met before a successful install can occur.
    A newer product is already installed. Downgrading is not supported.

The only option was to close the window and the app would then crash. This was originally thought to be due to Configuration Manager attempting to push out Shoretel Communicator repeatedly but, after deleting all deployments we noticed this would just happen randomly.  It continued to happen to users we would uninstall and reinstall Communicator as well as any new setups that used the latest available software.

Luckily, we were able to come up with a solution that will usually get a user back into the phone system with a little effort.  This method does require editing inside of your registry so, as always, it is recommended to perform a backup before continuing.

1. Our fist step is to uninstall Shoretel Communicater inside of Programs and Features.
2. Open the Registry Editor as an administrator and drill down to `HKEY_CLASSES_ROOT/Installer/Products`
3. While the Products directory is still selected, perform a search (ctrl-f) for “Shoretel Communictor.”
4. Delete  the folder that the search reveals and press F3 to find the next item in the search. If it takes you out of the Products folder you can close the registry and continue. If the search takes you to another item inside of the products folder delete that one as well.
5. Install Shoretel Communicator again.
6. Setup as normal and Communicator should work as it did before! We have not found a need for a reboot after install.

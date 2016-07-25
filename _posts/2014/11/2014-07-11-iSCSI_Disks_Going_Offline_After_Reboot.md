---
title: iSCSI Disks Going Offline After Reboot
layout: post
category: ['iscsi', 'windows']
author: Scott Harkless
---

We were having issues when we would reboot a server that was connected to our iSCSI SAN the drives would show offline.  After a lot of searching i came across this article on [Dell’s site](http://www.dell.com/support/troubleshooting/bb/en/bbdhs1/KCS/KcsArticles/ArticleIframeView?docid=600688&doclang=EN#Issue5).  This fix worked on our Windows 2012 servers as well.

The problem is generally expressed as “my drives do not automatically come online after I reboot Windows”. Occasionally with W2K8 R2 or W2K8 iSCSI volumes may come up OFFLINE on a system restart or power up for various reasons. In general they can be set online. However, if a specific setting is changed, they may fail to come online when attempted to set online.

On system boot up, the OS will scan the iSCSI disks and restore the mount points if the disks have been formatted and mounted on this system before. In the iSCSI initiator panel of Windows Server 2008, this is configured in the tab called “Volumes and Devices”. After the user has mounted the iSCSI disks first time, they can click the Auto configure button in this label tab and the action will bind the device id of iSCSI disk with the drive letter (or mount point).This will assist the OS to restore the mount point when the system boots. But each time the users change the iSCSI disk mount point setting, they must update this setting again.If the above has been done and there is still an issue that the iSCSI volume will not allow placing ONLINE it is possible that the SAN policy for the OS has been set to “Offline Shared”. Changing the configuration to “OnlineAll” will resolve this and allow the volume to be placed ONLINE. This is a function of Diskpart and can be changed via Windows command line.

SAN policy has been introduced in Windows Server 2008 to protect shared disks accessed by multiple servers. The first time the server sees the disk, it’ll be offline, but after being brought online once, should be online even after reboot.

You can use POLICY=OnlineAll setting to get around this, but it must be very clear that if the disks are shared among servers that are not using a clustering file system, this can lead to data corruption. Users are encouraged to use the proper SAN policy to protect data.

Procedure:

1. Check the current SAN policy of the servers disks. From a Windows command prompt type: diskpart. Once at the Diskpart prompt type `SAN`.
2. If the current policy shows the following `SAN Policy: Offline Shared` this means the disks will not come online by default even if they have been set using AutoConfigure in the MS initiator.
3. Change the policy using: `SAN Policy=OnlineAll`
4. Now run SAN again to check.
5. If a specific disk is having an issue coming online it may be necessary to select the disk first using the disk select option under Diskpart before issuing an “online disk” command at the Diskpart prompt.
6. Type `Exit` to exit the Diskpart application.
7. Go back in the MS initiator after closing it and reopening and click the Autoconfig button option again to make sure all iSCSI targets are updated. Now restart the host to check that all disks come online.

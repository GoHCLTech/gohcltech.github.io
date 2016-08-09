---
title: Exchange 2010 - A restart from a previous installation is pending.
layout: post
category: ['exchange']
author: chris
img: images/please-stand-by.jpg
comments: true
---

As I find myself building yet another system for myself I run into a familiar "friend."  I should know it’s coming. I’ve done this probably 4 times in the past year. The error is, "A restart from a previous installation is pending" from inside of the Exchange 2010 SP3 setup.

I’ve found a simple enough solution to solve the issue. Once again we will be editing our registry. Back ups are recommended as a precaution.

1. If you are like me then you are installing a lot of items that may or may not require restarts at one time. If this is the case then you may want to try the restart first. I usually do even though I know my error will return. If it does not return then you are complete. If it does return move on trucking to step 2.
2. Open you registry editor as an administrator and drill down to `HKLM\System\CurrentControlSet\Control\Session Manager`
3. In the right side pane we are looking for PendingFileRenameOperations. Right click this key and select delete.
4. Move back over to your exchange install if you still have it open and click Retry. The install should then continue.

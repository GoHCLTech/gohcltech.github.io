---
title: Shoretel Communicator & Lync 2013
layout: post
category: ['shoretel']
author: scott
img: images/crashed.jpg
comments: true
---

We were having issues with Lync 2013 crashing on start up after Shoretel Communicator was installed. Finally a fix that worked for us!!

1. In the `C:\Program Files (x86)\Shoreline Communications\ShoreWare Client` folder, replace `UccApi.dll` with the one found in `C:\Program Files (x86)\Microsoft Office\Office15`.
2. Open the `ShoreTel.exe.manifest` file in notepad and replace the "dependency" section with an empty tag so it looks like this:

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
  <assemblyIdentity
      version="1.0.0.0"
      processorArchitecture="x86"
      name="ISVName.ISVDivision.ISVapp"
      type="win32"
/>
  <description>IM Tester</description>
  <dependency/>
</assembly>
```

3. Reboot Computer

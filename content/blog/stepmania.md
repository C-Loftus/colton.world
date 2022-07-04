---
title: "How to Setup Stepmania on Linux"
date: 2022-06-21T20:10:41-04:00
draft: false
tags: ["games", "stepmania", "ddr"]
summary: "In this article I will show how to install stepmania and get it set up with the proper files for characters and songs"
---
First you should install flatpak. If you are unfamiliar flatpak is a way to package Linux applications for easier use across distributions. You can also build from source but you are more likely to run into an issue and not all distributions are well documented for building. To install flatpak go to https://flatpak.org/setup/ . Then  once you have flatpak installed run the following command.
```
flatpak install flathub com.stepmania.StepMania
```
To run simply type the following in the terminal.
```
flatpak run com.stepmania.StepMania
```
Navigate with your keyboard to Options->ConfigKey/Joy Mappings. Here you will set up  your controller or dance pad.
If for some reason your controller is not being recognized even though it is plugged in and detected by the Kernel,  try running
```
flatpak run --device=all com.stepmania.StepMania
```
That command will run the application  with greater OS  privileges for controller access.

## Installing songs and themes

The flatpak version of Stepmania  has its home directory located at
`~/.var/app/com.stepmania.Stepmania/.stepmania-5.1`
(Version 5.1  and thus the final portion of the path will obviously not be the same for future updates)
To install songs packs place them in `~/.var/app/com.stepmania.Stepmania/.stepmania-5.1/Songs`.  Each folder in this directory should be a song pack with the corresponding audio files inside.

To install song packs go to `https://search.stepmaniaonline.net/` . Download the zip file and extract the song pack folder into your stepmania song directory listed above.  However, this can get tedious after a while so I recommend writing a small script for it. The following fish shell script allows you to automatically download and unzip the song pack you want.
To download the song pack you want find it at the link above **but make sure to use the "Mirror" link if you are using the script below.** The mirror link provides a static version of the zip  that can be downloaded with the script,  otherwise it will fail with the default link.
```
# Defined in ~/.config/fish/config.fish 
function ddr
set url $argv[1]
set step ~/.var/app/com.stepmania.StepMania/.stepmania-5.1/Songs
cd $step
wget -qO- $url | busybox unzip -
end
```

To install themes,  simply download your desired theme file as a zip and extract it into the theme directory located at`~/.var/app/com.stepmania.Stepmania/.stepmania-5.1/Themes` .  I suggest searching on Reddit or Github  to find themes you want. Many of the themes posted on the old Stepmania forums are not up to date for the most recent version of  Stepmania. 

### Adding Dancing Characters
Many players enjoy  the nostalgia of seeing the classic DDR models. Stepmania  however does not provide any models out of the box. You have to download  them yourself. in order to do this, you first have to download the 'bones' which are used to give structure to the models.Download `bones+helper.zip`  located at the bottom of this page with the other downloads. Extract all the contents of this zip filed directly into the character's folder. This is located at
`~/.var/app/com.stepmania.Stepmania/.stepmania-5.1/Characters`
So after extracting, you should have a tree structure with these files exactly. (The main point to clarify here is that all these bones files need to be directly in the Characters file not in their own bones directory or something similar)
```
├── Characters
│   ├── Arrow-Blue.png
│   ├── Arrow-Red.png
│   ├── BeginnerHelper_step-down.bones.txt
│   ├── BeginnerHelper_step-jumplr.bones.txt
│   ├── BeginnerHelper_step-left.bones.txt
│   ├── BeginnerHelper_step-right.bones.txt
│   ├── BeginnerHelper_step-up.bones.txt
│   ├── DancePad-DDR.txt
│   ├── DancePads-DDR.txt
│   ├── _DDRPC_common_Dance0001.bones.txt
│   ├── _DDRPC_common_Dance0002.bones.txt
│   ├── _DDRPC_common_Dance0003.bones.txt
│   ├── _DDRPC_common_Dance0004.bones.txt
│   ├── _DDRPC_common_Dance0005.bones.txt
│   ├── _DDRPC_common_Dance0006.bones.txt
│   ├── _DDRPC_common_Dance0007.bones.txt
│   ├── _DDRPC_common_Dance0008.bones.txt
│   ├── _DDRPC_common_Dance0009.bones.txt
│   ├── _DDRPC_common_Dance0010.bones.txt
│   ├── _DDRPC_common_Dance0011.bones.txt
│   ├── _DDRPC_common_Dance0012.bones.txt
│   ├── _DDRPC_common_Dance0013.bones.txt
│   ├── _DDRPC_common_Dance0014.bones.txt
│   ├── _DDRPC_common_Dance0015.bones.txt
│   ├── _DDRPC_common_Dance0016.bones.txt
│   ├── _DDRPC_common_Dance0017.bones.txt
│   ├── _DDRPC_common_HowToPlay.bones.txt
│   ├── _DDRPC_common_Rest.bones.txt
│   ├── _DDRPC_common_WarmUp0001.bones.txt
│   ├── _DDRPC_common_WarmUp0003.bones.txt
│   ├── _DDRPC_common_WarmUp0005.bones.txt
│   ├── _DDRPC_common_WarmUp0007.bones.txt
│   └── MetalPanel.png
└──
```
You are now ready to install any models you want to use. A long list of models can be found at this link ->

http://stepmaniathings.com/files/index.htm
I also have a few hosted on my website at the links below.
The key difference with these models is that each model should have its own folder in the characters folder. Your directory structure should look like the following tree. If our model is `(4th)HatlessEmi` once we extract the zip and move her out from her own character folder, she should have her own folder in the Characters directory. *Note you will have to move this folder after extracting the zip, by default the zip contains its own characters folder*

```
├── Characters
│   ├── (4th)HatlessEmi
│   │   ├── Characters
│   │   │   └── (4th) Hatless Emi
│   │   │       ├── break.bmp
│   │   │       ├── card.bmp
│   │   │       ├── character.ini
│   │   │       ├── Dance
│   │   │       │   ├── Dance0001.redir
│   │   │       │   ├── Dance0002.redir
│   │   │       │   ├── Dance0003.redir
        
        ...

│   ├── Arrow-Blue.png
│   ├── Arrow-Red.png
│   ├── BeginnerHelper_step-down.bones.txt
│   ├── BeginnerHelper_step-jumplr.bones.txt
│   ├── BeginnerHelper_step-left.bones.txt

        ...

│   ├── _DDRPC_common_WarmUp0005.bones.txt
│   ├── _DDRPC_common_WarmUp0007.bones.txt
│   └── MetalPanel.png
```
Finally you are now able to activate the model.  First make sure the theme you are using supports models. Many themes do not upport them whatsoever and some do not let you choose the specific model for each song. The default stepmania theme to my knowledge does not support selecting models but only random ones.

Enabled this by going to `Options->Display Options->Appearance Options->Dancing Characters->Default to Random`

## Conclusion
 While this seems like a relatively easy topic, there's not a whole lot of documentation for Stepmania on Linux especially using Flatpak. I hoped this was useful to someone. I also wanted To start backing up some of the models and bones zip files. I found it rather concerning when trying to find these files that the only place they could be found was on the aforementioned stepmaniathings website,  which while I am grateful for it,  It is always impossible to know when a specialty file hosting site like this might go down.

## Downloads
{{< listfiles stepmania >}}

/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.41 24 December 2001	          *
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=4;			// Number of first level items
	var LowBgColor='white';			        // Background color when mouse is not over
	var LowSubBgColor='white';			// Background color when mouse is not over on subs
	var HighBgColor='black';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=50;				// Menu offset x coordinate
	var StartLeft=10;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=3;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","http://www.medmarktechnologies.com/index.html","",0,20,110);

Menu2=new Array("Contact Info","http://www.medmarktechnologies.com/sales.htm","",0,20,120);
	Menu2_1=new Array("About us","blank.htm","",5,20,130);	
		Menu2_1_1=new Array("Sales and Service","http://www.medmarktechnologies.com/sales.htm","",0,20,130);
		Menu2_1_2=new Array("ABCNews","http://www.abcnews.com","",0);
		Menu2_1_3=new Array("MSNBC","http://www.msnbc.com","",0);
                Menu2_1_4=new Array("CBSNews","http://www.cbsnews.com","",0);
                Menu2_1_5=new Array("Canadian News","http://news.bbc.co.uk","",2);
                          Menu2_1_5_1=new Array("Vancouver Sun","http://www.vancouversun.com","",0,20,130);
                          Menu2_1_5_2=new Array("CTV News","http://www.ctvnews.com","",0);
	Menu2_2=new Array("About us","blank.htm","",5,20,100);	
		Menu2_2_1=new Array("CNN","http://www.cnn.com","",0,20,130);
		Menu2_2_2=new Array("ABCNews","http://www.abcnews.com","",0);
		Menu2_2_3=new Array("MSNBC","http://www.msnbc.com","",0);
                Menu2_2_4=new Array("CBSNews","http://www.cbsnews.com","",0);
                Menu2_2_5=new Array("Canadian News","http://news.bbc.co.uk","",2);
	

Menu3=new Array("Sequential Pumps Models","index.html","",2);
	Menu3_1=new Array("MT 651","http://www.medmarktechnologies.com/mt651","",0,20,130);
	Menu3_2=new Array("(MT 652) GS-128 ","http://www.medmarktechnologies.com/E652","",0);
	Menu3_3=new Array("empty until the 2 changes to more","http://www.medmarktechnologies.com/","",0);

Menu4=new Array("Hematolgy Mixer","http://www.medmarktechnologies.com/mixer.htm","",0);
	Menu4_1=new Array("Hematolgy Mixer","http://www.medmarktechnologies.com/mixer.htm","",0,20,130);
	Menu4_2=new Array("JavaScript Kit","http://www.javascriptkit.com","",0);
	Menu4_3=new Array("Freewarejava","http://www.freewarejava.com","",0);
	Menu4_4=new Array("Web Review","http://www.webreview.com","",0);

Menu5=new Array("Contact Info","javascript:top.location.href='blank.htm'","",0);
	Menu5_1=new Array("Sales and Service","www.medmarktechnologies.com/contact.htm","",0,20,130);

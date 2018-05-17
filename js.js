		var situation=0, hisTurn=0;
		var firstCard=[];
		var playerPoints=[0,0];
		var stopClick=0;
		var i;	

//shuffle the cards			
		 var ul = document.querySelector('ul');
				for (var i = ul.children.length; i >= 0; i--) {
				ul.appendChild(ul.children[Math.floor(Math.random() * i)])};
		
		var img = document.getElementsByTagName("img");	
		var anchors = document.getElementsByTagName("li");
		
	/*		for (var i = 0; i < anchors.length; i++) {
				var id=img[i].id;
				var src=img[i].src;
			anchors[i].onclick = function(){openCard(id,id)};
	}
	for(var i = 0;i <= 17;i++){
    document.getElementById("c" + i).onclick = function(){
        openCard("i" + i, Math.floor(i / 2) + 1);
    };
}*/
		
		document.getElementById("c0").onclick = function(){openCard("i0",1)};
		document.getElementById("c1").onclick = function(){openCard("i1", 1)};
		document.getElementById("c2").onclick = function(){openCard("i2",2)};	
		document.getElementById("c3").onclick = function(){openCard("i3",2)};
		document.getElementById("c4").onclick = function(){openCard("i4",3)};
		document.getElementById("c5").onclick = function(){openCard("i5",3)};
		document.getElementById("c6").onclick = function(){openCard("i6",4)};
		document.getElementById("c7").onclick = function(){openCard("i7",4)};
		document.getElementById("c8").onclick = function(){openCard("i8",5)};
		document.getElementById("c9").onclick = function(){openCard("i9",5)};
		document.getElementById("c10").onclick = function(){openCard("i10",6)};
		document.getElementById("c11").onclick = function(){openCard("i11",6)};
		document.getElementById("c12").onclick = function(){openCard("i12",7)};
		document.getElementById("c13").onclick = function(){openCard("i13",7)};
		document.getElementById("c14").onclick = function(){openCard("i14",8)};
		document.getElementById("c15").onclick = function(){openCard("i15",8)};
		document.getElementById("c16").onclick = function(){openCard("i16",9)};
		document.getElementById("c17").onclick = function(){openCard("i17",9)};
		
		function openCard(id, cardMatch)
		{
			if(stopClick==0 && (document.getElementById(id).style.visibility=="hidden"))
			{
				
				if (situation==0)
				{
					document.getElementById(id).style.visibility='visible';
					firstCard[0]=id;
					firstCard[1]=cardMatch;
					situation=1;
				}
				else
				{
				
				situation=0;
					if (cardMatch==firstCard[1])
					{
					document.getElementById(id).style.visibility='visible';
					document.getElementById("hi").innerHTML= "you're right!";
					playerPoints[hisTurn]++;
					}
					else
					{
						stopClick=1;
					document.getElementById(id).style.visibility='visible';
					 setTimeout(function(){ 
					 document.getElementById(id).style.visibility='hidden';
					 document.getElementById(firstCard[0]).style.visibility='hidden';
					 stopClick=0;
											}, 1000);							
					}
				}	
				
			}
		}

            

		var situation=0, answers=0, stopClick=1, twoPlayers=1 ;
		var firstCard=[];
		var player1={name:"player1", score:"0"};
		var player2={name:"player2", score:"0"};
		var hisTurn=player1;
		
//shuffle the cards			
		 var ul = document.querySelector('ul');
				for (var i = ul.children.length; i >= 0; i--) {
				ul.appendChild(ul.children[Math.floor(Math.random() * i)])};
		
		
		$("#btn2p").click(function(){
			player1.name=$("#player1").val();
			player2.name=$("#player2").val();
			
			$("#announcement").css("visibility","hidden");
			stopClick=0;
			
			});
		$("#btn1p").click(function(){
			$("#announcement").css("visibility","hidden");
			twoPlayers=0;
			stopClick=0;
			});
	
var classname = document.getElementsByClassName("card");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', function() {
    var id = this.children[0].id;
    var attr = this.children[0].attributes['data-img-index'].nodeValue;
    openCard(id, attr);
  });
}
		function openCard(id, cardMatch)
		{
			
			if(twoPlayers)
			{
				if(stopClick==0 && (document.getElementById(id).style.visibility=="hidden"||document.getElementById(id).style.visibility==""))
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
						answers++;
						hisTurn.score++;
						
							if (answers==9){
								if (player1.score<player2.score)
									hisTurn=player2;
								else
									hisTurn=player1;
								$("#annText").html("המשחק נגמר!<br>"+
								hisTurn.name +" ניצח עם " +hisTurn.score+ " נקודות.");
								$("#announcement").css("visibility","visible");
							}
							
						
						}
						else
						{
							if (hisTurn==player1)
							{
								hisTurn=player2;
							}
							else
							{
								hisTurn=player1;
							}
							
							stopClick=1;
						document.getElementById(id).style.visibility='visible';
						setTimeout(function(){ 
						 document.getElementById(id).style.visibility='hidden';
						 document.getElementById(firstCard[0]).style.visibility='hidden';
						 
												}, 1000);
						setTimeout(function(){ 
						 document.getElementById("annText").innerHTML="עכשיו תור "+hisTurn.name;
						 document.getElementById("announcement").style.visibility='visible';
																	}, 1000);
						
						setTimeout(function(){ 
						 document.getElementById("annText").innerHTML="עכשיו תור "+hisTurn.name;
						 document.getElementById("announcement").style.visibility='hidden';
						 stopClick=0;
																	}, 2500);
						}
					}	
					
				}
			}
			if (twoPlayers==0)
			{
				if(stopClick==0 && (document.getElementById(id).style.visibility=="hidden"||document.getElementById(id).style.visibility==""))
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
					answers++;
					hisTurn.score++;
					
						if (answers==9){
							$("#annText").html("המשחק נגמר!");
							$("#announcement").css("visibility","visible");
						}
						
					
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
		

        }    

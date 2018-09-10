var has_csgo = false;
var state = 0;
var went_right = false;
var went_left = false;
var went_right2 = false;
var went_left2 = false;
var has_flag = false;
var has_syrup = false;
var doing_it_for_canada = false;
var has_sauce = false;
var stage_1_not_done = true;
var went_right4 = false;
var went_left4 = false;
var has_cpu = false;
var stage_1_not_done_4 = true;
var character = "";
var fought_friendly1 = false
var fought_friendly2 = false
var fought_friendly3 = false
$( document ).ready(function() {
   	console.log("abcdefg");
   	$("#output").html("Welcome to f_L_a_P! Choose your gender!");
   	$("#output").css("font-size", "70px");
   	$("#choice").html("Choose boy or girl.");
   	$("#choice").css("font-size", "70px");

   	init();
});

function init() {
	$("#input-textbox").keypress(function(a) {
  		if(a.which == 13 && state == 0) {
  			choose_gender();
  		}
	});
}

function choose_gender() {
  	var gender = $("#input-textbox").val();
  	$("#input-textbox").val("");
  	if(gender == "boy" || gender == "girl") {
  		if(gender == "girl") {
  			console.log('girl was selected');
  			$("#output").html("n0 gIrLs ALLoW3d!!!11!");
   			$("#output").css("font-size", "70px");
  		}
  		else if(gender == "boy") {
  			$("#input-textbox").val("");
  			console.log('boy was selected');
  			state += 1;
  			console.log(state);
  			choose_character()

		}
  	}
  	else {
  		$("#output").html(gender + " is not a gender.");
  	}
}

function choose_character() {
	$("#choice").html("");
	$("#output").html("");
	$("#choice").html("Type 1, 2, or 3 for a character.");
	$("#output").html("What character would you like to be?");
	$("#container img").attr("src", "characterchoose.jpg");
	console.log(state)
	$("#input-textbox").keypress(function(b) {
  		if(b.which == 13 && state == 1) {
  			var character = $("#input-textbox").val();
  			console.log(character);
  			$("#input-textbox").val("");
  			if(character == "1") {
  				console.log("character selected");
  				state += 1;
  				character = "Jan";
          console.log(character);
  				level_one("forest_arrows.jpg", "You wake up in the forest with no memories of the past. As you start walking around, you find a sword on the ground. You pick it up and examine it. The sword seems very lightweight. You start searching for the forest exit; maybe there you will find answers about the past.", "Options: right, left, or boss.", "34px");
  			}
  			else if(character == "2") {
  				console.log("character selected");
  				state += 1;
  				character = "Brandon";
          console.log(character);
  				level_one("forest_arrows.jpg", "You wake up in the forest with no memories of the past. As you start walking around, you find a sword on the ground. You pick it up and examine it. The sword seems very lightweight. You start searching for the forest exit; maybe there you will find answers about the past.", "Options: right, left, or boss.", "34px");
  			}
  			else if(character == "3") {
  				console.log("character selected");
  				state += 1;
  				character = "Shar";
          console.log(character);
  				level_one("forest_arrows.jpg", "You wake up in the forest with no memories of the past. As you start walking around, you find a sword on the ground. You pick it up and examine it. The sword seems very lightweight. You start searching for the forest exit; maybe there you will find answers about the past.", "Options: right, left, or boss.", "34px");
  			}
  			else {
  				$("#output").html("That is not a character! Choose another!");
  				$("#output").css("font-size", "50px");
  				console.log("no character selected");
  			}

  		}
  	}); 
	
}
// level 1
function level_one(img, text, options, size) {
	console.log("this is level one");
	$("#choice").html("");
	$("#output").html("");
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").html(text);
	$("#output").css("font-size", size);
	$("#container img").attr("src", img);
  $("#container audio").attr("src", "level_1_music.mp3")
	console.log(state);
	$("#input-textbox").keypress(function(e) {
  		if(e.which == 13 && state == 2) {
  			var direction = $("#input-textbox").val();
  			console.log(direction);
  			if(direction.toLowerCase() == "left") {
  				console.log("left selected");
  				$("#input-textbox").val("");
  				state = 99;
  				went_left_lvl1();
  			}
  			else if(direction.toLowerCase() == "right") {
  				console.log("right selected")
  				$("#input-textbox").val("");
  				state = 10;
  				went_right_lvl1();
  			}
  			else if(direction.toLowerCase() == "boss") {
  				console.log("boss selected");
  				$("#input-textbox").val("");
  				state = 1234;
  				boss_lvl1();
  				
  			}
  			else {
  				$("#output").html("That is not a direction! Choose another!");
  				$("#output").css("font-size", "50px");
  				$("#input-textbox").val("");
  				console.log("no direction selected");
  			}

  		}
  	}); 
}
function went_right_lvl1() {
	$("#choice").html("");
	$("#output").html("");
	$("#choice").html("Options: yes or no");
	$("#choice").css("font-size", "70px");
	$("#output").html("You find a copy of Counter-Strike, do you pick it up?");
	$("#output").css("font-size", "60px");
	$("#container img").attr("src", "csgo_disc.jpg");
	console.log(state);
	$("#input-textbox").keypress(function(b) {
  		if(b.which == 13 && state == 10) {
  			var choice1 = $("#input-textbox").val();
  			console.log(choice1);
  			$("#input-textbox").val("");
  			if(choice1.toLowerCase() == "yes") {
  			  has_csgo = true;
  				console.log(has_csgo);
  				state = 2;
  				if(went_left) {
  					level_one("lvl1_noarrows.jpg", "You have the disc. The only thing left is to go to the boss.", "Options: boss.", "60px");
  				}
  				else {
  					level_one("lvl1_norightarrow.jpg", "You have the disc, now where do you go?", "Options: left, boss.", "60px"); // only left arrow
  				}
  				
  			}
  			else if(choice1.toLowerCase() == "no") {
  				console.log(has_csgo);
  				state = 2;
  				if(went_left) {
  					level_one("lvl1_noarrows.jpg", "You didn't pick up the disc. The only thing left is to go to the boss.", "Options: boss.", "60px");
  				}
  				else {
  					level_one("lvl1_norightarrow.jpg", "You didn't pick up the disc. Now what?", "Options: left, or boss.", "60px"); // only left arrow
  				}
  				
  			}
  			else {
  				$("#output").html("That is not an option! Choose another!");
  			}
  		};
	});
	went_right = true;
}

function went_left_lvl1() {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html("You find an abandoned hut in the woods. You don't find anything useful. Return back?");
	$("#choice").html("Options: yes or no");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "60px");
	$("#container img").attr("src", "hutjabba.jpg");
	console.log(state);
	$("#input-textbox").keypress(function(b) {
  		if(b.which == 13 && state == 99) {
  			var choice2 = $("#input-textbox").val();
  			console.log(choice2);
  			$("#input-textbox").val("");
  			if(choice2.toLowerCase() == "yes") {
  				state = 2
  				if(went_right) {
  					level_one("lvl1_noarrows.jpg", "The only thing left is to go to the boss.", "Options: boss.", "60px");
  				}
  				else {
  					level_one("lvl1_noleftarrow.jpg", "You return to your previous place. What next?", "Options: right, boss.", "60px"); // implement!!!! only a right arrow (no left arrow)
  				}
  				
  			}
  			else {
  				$("#output").html("Too bad!");
  			}
  		}
	});
	went_left = true;
}

function boss_lvl1() {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html("After a while of wondering around the forest you find the exit. Outside of the exit you see a wild Brett. As you start to approach him he starts to sprint towards you.");
	$("#choice").html("Options: use item or fight");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "40px");
	$("#container img").attr("src", "brett_forest.jpg");
  $("#container audio").attr("src", "boss_battle.mp3")
	console.log(state);
	$("#input-textbox").keypress(function(q) {
  		if(q.which == 13 && state == 1234) {
  			var choice3 = $("#input-textbox").val();
        rand_num1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  			console.log(choice3);
  			$("#input-textbox").val("");
  			if(choice3.toLowerCase() == "fight") {
  				if(rand_num1 <= 9) {
            console.log(rand_num1)
            brett_dead("brett_dead.jpg", "You use your weapon to inflict damage on Brett; he faints.", "Type \'continue\' to keep going.");
            state = 69;
          }
          else {
            state = 16
            death()
          }
  			}
  			else if(choice3.toLowerCase() == "use item") {
  				if(has_csgo) {
  					state = 69;
            fought_friendly1 = true;
            brett_dead("brett_thanks.jpg", "You give Brett the copy of CS you found earlier. He seems content and he lets you through and you continue on your quest.", "Type \'continue\' to keep going.");
  					
  				}
  				else {
  					$("#output").html("You do not have that item! Choose a different option!");
  				}
  				
  			}
  			else {
  				$("#output").html(choice3 + " is not an option!");
  			}
  		}
	});
}


function brett_dead(img, text, options) {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html(text);
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "50px");
	$("#container img").attr("src", img);
	$("#input-textbox").keypress(function(h) {
  		if(h.which == 13 && state == 69) {
  			var choice4 = $("#input-textbox").val();
  			console.log(choice4);
  			$("#input-textbox").val("");
  			if(choice4.toLowerCase() == "continue") {
  				state = 7;
  				level_two("gymallarrows.jpg", "At the end of the path, you find a gym. You enter the gym but it is empty and abandoned. You decide to explore this gym.", "Options: left, right, or boss.", "50px");
  			}
  			else {
  				$("#output").html("Too bad!");
  			}
  		}
	});
}

// level two
function level_two(img, text, options, size) {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html(text);
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", size);
	$("#container img").attr("src", img);
  $("#container audio").attr("src", "level_2_music.mp3")
	$("#input-textbox").keypress(function(q) {
  		if(q.which == 13 && state == 7) {
  			var direction2 = $("#input-textbox").val();
  			console.log(direction2);
  			if(direction2.toLowerCase() == "left") {
  				console.log("left selected");
  				$("#input-textbox").val("");
  				state = 55;
  				went_left_lvl2();
  			}
  			else if(direction2.toLowerCase() == "right") {
  				console.log("right selected")
  				$("#input-textbox").val("");
  				state = 44;
  				went_right_lvl2();
  			}
  			else if(direction2.toLowerCase() == "boss") {
  				console.log("boss selected")
  				$("#input-textbox").val("");
  				state = 666;
  				boss_lvl2();
  				
  			}
  			else {
  				$("#output").html("That is not a direction! Choose another!");
  				$("#output").css("font-size", "50px");
  				$("#input-textbox").val("");
  				console.log("no direction selected");
  			}

  		}
  	}); 
}
function went_left_lvl2() {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html("You find some protein shakes and maple syrup. Do you take them?");
	$("#choice").html("Options: yes or no");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "60px");
	$("#container img").attr("src", "syrupandprotein.jpg");
	console.log(state);
	$("#input-textbox").keypress(function(b) {
  		if(b.which == 13 && state == 55) {
  			var choice2 = $("#input-textbox").val();
  			console.log(choice2);
  			$("#input-textbox").val("");
  			if(choice2.toLowerCase() == "yes") {
  				state = 7;
  				if(went_right2) {
  					level_two("onlybossarrow.jpg", "With these two items, you continue on. The only thing left is the boss.", "Options: boss.", "60px");
  				}
  				else {
  					level_two("gymnoleftarrow.jpg", "With these two items, you continue on. Where next?", "Options: right or boss.", "60px");
  				}
  				has_syrup = true;
  			}
  			else if(choice2.toLowerCase() == "no") {
  				state = 7;
  				if(went_right2) {
  					level_two("onlybossarrow.jpg", "Baffled about the previous room, you go back. The only thing left is the boss.", "Options: boss.", "60px");
  				}
  				else {
  					level_two("gymnoleftarrow.jpg", "Baffled about the previous room, you go back. Where next?", "Options: right or boss.", "60px");
  				}
  			}
  			else {
  				$("#output").html("Too bad!");
  			}
  		}
	});
	went_left2 = true;
}

function went_right_lvl2() {
	$("#choice").html("");
	$("#output").html("");
	$("#choice").html("Options: yes or no");
	$("#choice").css("font-size", "70px");
	$("#output").html("You find the flag of Canada and a bed. You wonder who has been living here, what the lost memories of this place are. You feel saddened by this fact. Do you take the flag and return?");
	$("#output").css("font-size", "40px");
	$("#container img").attr("src", "bedandflag.jpg");
	console.log(state);
	$("#input-textbox").keypress(function(b) {
  		if(b.which == 13 && state == 44) {
  			var choice5 = $("#input-textbox").val();
  			console.log(choice5);
  			$("#input-textbox").val("");
  			if(choice5.toLowerCase() == "yes") {
  				state = 7;
  				if(went_left2) {
  					has_flag = true;
            level_two("onlybossarrow.jpg", "With the canadian flag on your back, you return to the previous place. The only option is the boss.", "Options: boss.", "52px");
  				}
  				else {
  					level_two("gymnorightarrow.jpg", "With the canadian flag on your back, you return to the previous place. What next?", "Options: left, boss", "52px");
  				  has_flag = true;
          }
  			}
  			else if(choice5.toLowerCase() == "no") {
  				state = 7;
  				if(went_left2) {
  					level_two("onlybossarrow.jpg", "Saddened by the prior sight, you continue. The only option now is the boss!", "Options: boss.", "60px");
  				}
  				else {
  					level_two("gymnorightarrow.jpg", "Saddened by the prior sight, you continue. Where next?", "Options: left or boss.", "60px");
  				}
  			}
  			else {
  				$("#output").html("That is not an option! Choose another!");
  			}
  		};
	});
	went_right2 = true;
}

function boss_lvl2() {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html("As you start leaving the gym, you hear someone\'\s voice. You look around but you see no one. Then someone punches you. You scream in agony as the pain in your stomach worsens. You look down and see a young Candadian boy. You ask him why he punched you. He responds back with \"This is no place for scum like you -- no Americans allowed.\" You ignore his command and prepare yourself for a fight.");
	$("#choice").html("Options: use item (syrup, shake), or fight");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "29px");
	$("#container img").attr("src", "alexboss.jpg");
  $("#container audio").attr("src", "boss_battle.mp3")
	console.log(state);
	$("#input-textbox").keypress(function(q) {
  		if(q.which == 13 && state == 666) {
  			rand_num2 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        console.log(rand_num2);
        var choice6 = $("#input-textbox").val();
  			console.log(choice6);
  			$("#input-textbox").val("");
  			if(choice6.toLowerCase() == "fight") {
  				state = 31;
  				if(has_flag) {
  					fought_friendly2 = true
            alex_dead("alexboss_happy.jpg", "The young Candadian sees your flag. In an act of respect, he lets you go because of your respect towards the flag of the great nation of Canada.", "Type \'continue\' to keep going.", "50px");
  				}
  				else {
            if(rand_num2 <= 17) {
              alex_dead("canadadeleted.jpg", "This fight brings back your memories of a fight against the Mr. Hurley, the Code Master. You discover you have a ability to hack real life. You open up your command prompt and simply delete the Canadian. You continue your journey.", "Type \'continue\' to keep going.", "38px");
            }
            else {
              state = 16
              death()
            }
  				}
  			}
  			else if(choice6.toLowerCase() == "use item") {
  				state = 31;
  				if(has_syrup) {
  					fought_friendly2 = true;
            alex_dead("alexwithstuff.jpg", "You give him some of the maple syrup and protein shakes you found earlier. He feels saddened by this and starts cry. He tells you about his homeland and about how much he misses it. You ask him what happened. He explains how the evil Kevin Hurley, the code master, hacked the world and deleted all of Canada and most of the \world\'s countries. At this point you're reminded of your past with KPH. You and Mr. Hurley were in a code battle and you lost which resulted in the world to fall under \Mr.Hurley\'s hands. As you leave the gym you tell the canadian, \"I promise I\'ll\ get Canada back.\"", "Type \'continue\' to keep going.", "25px");
  					doing_it_for_canada = true;
  				}
  				else {
  					$("#output").html("You do not have that item! Choose a different option!", "60px");
  					state = 666;
  				}
  			}
  			
  			else {
  				$("#output").html(choice3 + " is not an option!");
  			}
  		}
	});
}

function alex_dead(img, text, options, size) {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html(text);
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", size);
	$("#container img").attr("src", img);
	$("#input-textbox").keypress(function(h) {
  		if(h.which == 13 && state == 31) {
  			var choice7 = $("#input-textbox").val();
  			console.log(choice7);
  			$("#input-textbox").val("");
  			if(choice7.toLowerCase() == "continue") {
  				state = 89;
  				level_three("ladypregosamples.jpg", "Behind the gym is a museum of sauce. You enter, and find a giant bottle of prego with a lady handing out free samples. Do you take one or not?", "Options: yes or no", "45px");
  			}
  			else {
  				$("#output").html("Too bad!");
  			}
  		}
	});
}

function level_three(img, text, options, size) {
	console.log("this is level 3");
	$("#choice").html("");
	$("#output").html("");
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").html(text);
	$("#output").css("font-size", size);
	$("#container img").attr("src", img);
  $("#container audio").attr("src", "character_select.mp3")
	console.log(state);
	$("#input-textbox").keypress(function(e) {
  		if(e.which == 13 && state == 89) {
  			var yn = $("#input-textbox").val();
  			console.log(yn);
  			if(yn.toLowerCase() == "yes") {
  				console.log("yes selected");
  				$("#input-textbox").val("");
  				state = 64;
  				has_sauce = true;
  				yes_lvl3("You try some sauce, and you say \"Hey, that's pretty good!\" You take a small bottle of it with you as you walk up the steps to the second floor. You meet Owen, the saucemeister, and he says that you must battle him to pass. You can offer up the sauce or fight Owen.", "30px");

  			}
  			else if(yn.toLowerCase() == "no") {
  				console.log("right selected")
  				$("#input-textbox").val("");
  				state = 64;
  				yes_lvl3("You walk past the lady and go up to the second floor. You meet Owen, the saucemeister, and he says that you must battle him to pass.", "50px");
  			}
  			else {
  				$("#output").html("That is not a choice! Choose another!");
  				$("#output").css("font-size", "50px");
  				$("#input-textbox").val("");
  				console.log("no choice selected");
  			}

  		}
  	}); 
}

function yes_lvl3(text, size) {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html(text);
	$("#choice").html("Options: use item (sauce), or fight");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", size);
	$("#container img").attr("src", "saucemusemregular.jpg");
  $("#container audio").attr("src", "boss_battle.mp3")
	console.log(state);
	$("#input-textbox").keypress(function(q) {
  		if(q.which == 13 && state == 64) {
        rand_num3 = Math.floor(Math.random() * (40 - 1 + 1) + 1);
        console.log(rand_num3)
  			var choice8 = $("#input-textbox").val();
  			console.log(choice8);
  			$("#input-textbox").val("");
  			if(choice8.toLowerCase() == "fight") {
  				state = 54;
  				if(stage_1_not_done) {
  					state = 1000;
  					$("#output").html("Owen says, \"Hahaha, you cannot defeat me.\" Do you attack again or do you hope he has mercy?");
  					$("#choice").html("Options: attack or mercy?");
  					$("#input-textbox").keypress(function(q) {
  						if(q.which == 13 && state == 1000) {
  							var fight_var = $("#input-textbox").val();
  							$("#input-textbox").val("");
  							if(fight_var.toLowerCase() == "attack") {
  								if(rand_num3 <= 33) {
                    stage_1_not_done = false;
                    state = 54;
                    owen_dead("owendead.jpg", "You deliver a final blow to Owen and he faints. You can move forward.", "Type \'continue\' to keep going.", "50px");
                  }
                  else {
                    state = 16
                    death()
                  }
  							}
  							else if(fight_var.toLowerCase() == "mercy") {
  								state = 16;
  								death();
  							}
  							else {
  								$("#output").html("That is not an option! Choose something else, maggot!", "60px");
  							}
  						}
  					});
  				}
  			}
  			else if(choice8.toLowerCase() == "use item") {
  				if(has_sauce) {
  					fought_friendly3 = true;
            owen_dead("owenacceptssauce.jpg", "You give Owen the bottle of Prego and he tries some and says, \"Hey, thats pretty good sauce. You can pass through the museum.\"", "Type \'continue\' to keep going.", "50px");
  					state = 54;
  				}
  				else {
  					$("#output").html("You do not have that item! Choose a different option!", "60px");
  				}
  				
  			}
  			
  			else {
  				$("#output").html(choice8 + " is not an option!");
  			}
  		}
	});
}

function owen_dead(img, text, options, size) {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html(text);
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", size);
	$("#container img").attr("src", img);
	$("#input-textbox").keypress(function(h) {
  		if(h.which == 13 && state == 54) {
  			var choice7 = $("#input-textbox").val();
  			console.log(choice7);
  			$("#input-textbox").val("");
  			if(choice7.toLowerCase() == "continue") {
  				state = 72;
  				level_four("computerlabalone.jpg", "Your journey lasts for another 4 years, looking, searching, for Mr. Hurley. You have defeated/saved many more foes along the way. For the last four years you have mastered your hacking_skillz, but your journey has finally come to an end as one of your sources has narrowed down Mr. Hurley's location at Maine South's Computer lab.", "Options: left, right, forward.", "30px");
  			}
  			else {
  				$("#output").html("Too bad!");
  			}
  		}
	});
}

function level_four(img, text, options, size) {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html(text);
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", size);
	$("#container img").attr("src", img);
  $("#container audio").attr("src", "level_1_music.mp3")
	$("#input-textbox").keypress(function(q) {
  		if(q.which == 13 && state == 72) {
  			var direction3 = $("#input-textbox").val();
  			console.log(direction3);
  			if(direction3.toLowerCase() == "left") {
  				console.log("left selected");
  				$("#input-textbox").val("");
  				state = 17;
  				went_left_lvl4();
  			}
  			else if(direction3.toLowerCase() == "right") {
  				console.log("right selected");
  				$("#input-textbox").val("");
  				state = 18;
  				went_right_lvl4();
  			}
  			else if(direction3.toLowerCase() == "forward") {
  				console.log("boss selected");
  				$("#input-textbox").val("");
  				state = 789;
  				boss_lvl4();
  				
  			}
  			else {
  				$("#output").html("That is not a direction! Choose another!");
  				$("#output").css("font-size", "50px");
  				$("#input-textbox").val("");
  				console.log("no direction selected");
  			}

  		}
  	}); 
}

function went_left_lvl4() {
	$("#choice").html("");
	$("#output").html("");
	$("#choice").html("Options: yes or no");
	$("#choice").css("font-size", "70px");
	$("#output").html("On the left side of the room you find a incredibly rare and expensive CPU; the Intel Xeon i123 e-5 90000000. Do you take it?");
	$("#output").css("font-size", "50px");
	$("#container img").attr("src", "deskwithcpu.jpg");
	console.log(state)
	$("#input-textbox").keypress(function(b) {
  		if(b.which == 13 && state == 17) {
  			var choice5 = $("#input-textbox").val();
  			console.log(choice5);
  			$("#input-textbox").val("");
  			if(choice5.toLowerCase() == "yes") {
  				state = 72;
  				if(went_right4) {
  					level_four("onlyforwardcomputerlab.jpg", "You take the CPU and return back to the center of the room. The only thing left is to face the hardest boss of them all...", "Options: forward.", "50px");
  				}
  				else {
  					level_four("noleftcomputerlab.jpg", "You take the CPU and return back to the center of the room. What next?", "Options: right or forward.", "50px");
  				}
  				has_cpu = true;
  			}
  			else if(choice5.toLowerCase() == "no") {
  				state = 72;
  				if(went_right4) {
  					level_four("onlyforwardcomputerlab.jpg", "The CPU disinterests you, but you are surprised by its high frequency. The only thing left is to face the hardest boss of them all...", "Options: forward.", "40px");
  				}
  				else {
  					level_four("noleftcomputerlab.jpg", "The CPU disinterests you, but you are surprised by its high frequency. Where next?", "Options: right or forward.", "50px");
  				}
  			}
  			else {
  				$("#output").html("That is not an option! Choose another!");
  			}
  		};
	});
	went_left4 = true;
}


function went_right_lvl4() {
	$("#choice").html("");
	$("#output").html("");
	$("#choice").html("Options: yes or no");
	$("#choice").css("font-size", "70px");
	$("#output").html("In this room you find nothing but a lonesome coder. Do you return?");
	$("#output").css("font-size", "60px");
	$("#container img").attr("src", "jebbushright.jpg");
	console.log(state);
	$("#input-textbox").keypress(function(b) {
  		if(b.which == 13 && state == 18) {
  			var choice5 = $("#input-textbox").val();
  			console.log(choice5);
  			$("#input-textbox").val("");
  			if(choice5.toLowerCase() == "yes") {
  				state = 72;
  				if(went_left4) {
  					level_four("onlyforwardcomputerlab.jpg", "Feeling bad for the disheartened JEB!, you return to the center of the computer lab.  The only thing left is to face the hardest boss of them all...", "Options: forward.", "45px");
  				}
  				else {
  					level_four("norightcomputerlab.jpg", "Feeling bad for the disheartened JEB!, you return to the center of the computer lab. What next?", "Options: left or forward.", "45px");
  				}
  			}
  			else {
  				$("#output").html("No one wants to be with JEB!. Return to the prior room.");
  			}
  		};
	});
	went_right4 = true;
}

function boss_lvl4() {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html("Everything has led up to this moment. You have finally encounted KEVIN. What do you do, your heart is racing.");
	$("#choice").html("Options: use item, or fight");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "55px");
	$("#container img").attr("src", "hurleyfinalboss.jpg");
  $("#container audio").attr("src", "level_3_music.mp3")
	console.log(state);
	$("#input-textbox").keypress(function(q) {
  		if(q.which == 13 && state == 789) {
  			var choice8 = $("#input-textbox").val();
        var rand_num4 = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        console.log(rand_num4);
  			console.log(choice8);
  			$("#input-textbox").val("");
  			if(choice8.toLowerCase() == "fight") {
  				state = 999;
  				if(stage_1_not_done_4) {
  					state = 1414;
  					$("#output").html("Hurley says, \"Did you forget your semicolon, scrub??? I thought you were a gr8 c0d3r! I will slay thee with my TI-84+!!!!!!\" Do you attack again or do you hope he has mercy?");
            $("#output").css("font-size", "40px");
  					$("#choice").html("Options: attack or mercy?");
  					$("#input-textbox").keypress(function(q) {
  						if(q.which == 13 && state == 1414) {
  							var fight_var = $("#input-textbox").val();
  							$("#input-textbox").val("");
  							if(fight_var.toLowerCase() == "attack") {
  								if(rand_num4 == 1) {
                    state = 999;
                    hurley_dead("hurleydead.jpg", "Hurley has fainted. RNG has favored you! You won the game but you are disappointed that the world no longer has a code master.", "Game over! Type continue.", "35px");
                  }
                  else {
                    state = 16;
                    death();
                  }
  							}
  							else if(fight_var.toLowerCase() == "mercy") {
  								state = 16;
  								death();
  							}
  							else {
  								$("#output").html("You do not have that item! Choose a different option!", "60px");
  							}
  						}
  					});
  				}
  			}
  			else if(choice8.toLowerCase() == "use item") {
          if(fought_friendly1 && fought_friendly2 && fought_friendly3) {
  					state = 999;
            console.log(character);
  					var congrats = "You're a good coder!";
            console.log(congrats)
  					hurley_dead("hurley.jpg", congrats, "Game over! Type continue.", "60px");
  				} 
  				else if(has_cpu) {
  					state = 999;
  					hurley_dead("hurleydead.jpg", "Hurley has fainted. You have finally defeated your nemesis but you feel empty inside. Your coding skills are still sub-par and without KPH they will never get better. Shucks!", "Game over! Type continue.", "42px");
  				}
          else {
            $("#output").html("You do not have that item!");
          }
  				
  			}
  			
  			else {
  				$("#output").html(choice8 + " is not an option!");
  			}
  		}
	});
}

function hurley_dead(img, text, options, size) {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html(text);
	$("#choice").html(options);
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", size);
	$("#container img").attr("src", img);
	$("#input-textbox").keypress(function(h) {
  		if(h.which == 13 && state == 999) {
  			var choice7 = $("#input-textbox").val();
  			console.log(choice7);
  			$("#input-textbox").val("");
  			if(choice7.toLowerCase() == "continue") {
  				end_game();
  			}
  			else {
  				$("#output").html("Too bad!");
  			}
  		}
	});
}

function death() {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html("YOU DIED.");
	$("#choice").html("RESTART? YES OR NO");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "70px");
	$("#container img").attr("src", "saddeath.jpg");
  $("#container audio").attr("src", "fail-trombone.mp3")
	$("#input-textbox").keypress(function(h) {
		state = 16;
  		if(h.which == 13 && state == 16) {
  			var choice7 = $("#input-textbox").val();
  			console.log(choice7);
  			$("#input-textbox").val("");
  			if(choice7.toLowerCase() == "yes") {
  				state = 0;
  				$("#input-textbox").val("");
  				$("#output").html("Welcome to the game! Choose your gender!");
   				$("#output").css("font-size", "70px");
   				$("#choice").html("Choose boy or girl.");
   				$("#choice").css("font-size", "70px");
   				$("#container img").attr("src", "boygirl.jpg");
          $("#container audio").attr("src", "character_select.mp3")
   				var has_csgo = false;
				  var state = 0;
				  var went_right = false;
				  var went_left = false;
  				var went_right2 = false;
  				var went_left2 = false;
  				var has_flag = false;
  				var has_syrup = false;
  				var doing_it_for_canada = false;
  				var has_sauce = false;
  				var stage_1_not_done = true;
  				var went_right4 = false;
  				var went_left4 = false;
  				var has_cpu = false;
  				var stage_1_not_done_4 = true;
  				var character = "";
   				init();
  			}
  			else if(choice7.toLowerCase() == "no") {
  				close();
  			}
  			else {
				$("#choice").html("");
				$("#output").html("");
				$("#output").html("What else is there?");
				$("#choice").html("Type yes or no!");
  			}
  		}
	});
}


function end_game() {
	$("#choice").html("");
	$("#output").html("");
	$("#output").html("CREDITS:");
	$("#choice").html("JAN KOBYLARZ, OWEN YOUNG, ANDY DALY, BRANDON JELKE");
	$("#choice").css("font-size", "70px");
	$("#output").css("font-size", "70px");
	$("#container img").attr("src", "backroundcredits.jpg");
  $("#container audio").attr("src", "character_select.mp3")
}
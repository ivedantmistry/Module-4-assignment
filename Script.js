(function () {

    var names = ["Yaakov", "Niklaus", "Elijah", "Rebecca", "Stefan", "Damon", "Elena", "Professor", "Tony Stark", "Captain America"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
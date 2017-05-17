exports.run = (api, event) => {
  var results = [
    "*CLICK* You pussy, can't you do anything right?",
    "*CLICK* Today's not your lucky day, is it?",
    "*CLICK* Sweet release so close you can almost taste it, but alas...",
    "*CLICK* Sorry, comrade. Survival at game bring dishonor to whole family. At least money from betting will buy potato.",
    "*CLICK* You begin to suspect you've been given a fake gun and your friends are only nice to you because you're mentally challenged",
    "*BANG!* RIDE INTO VALHALLA SHINY AND CRHOME. As the light fades, your family and friends clap for your bravery and heroism. Truly you are the pride of Springfield."];
    
  var roll = Math.floor(Math.random() * results.length);
	api.sendMessage(results[roll], event.thread_id);
};
